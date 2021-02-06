import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import AsyncStorage from '@react-native-community/async-storage';

const DrinkContext = createContext(null);

const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function loadDrinks() {
      const data = await AsyncStorage.getItem('@drinks');

      if (data) {
        setDrinks(JSON.parse(data));
      }
    }

    loadDrinks();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@drinks', JSON.stringify(drinks));
  }, [drinks]);

  function calcPricePerLiter(drink) {
    return (parseFloat(drink.price) / parseFloat(drink.volume)) * 1000;
  }

  const addDrink = useCallback(async (drink) => {
    setDrinks((currentDrinks) => [
      { id: uuidv4(), pricePerLiter: calcPricePerLiter(drink), ...drink },
      ...currentDrinks,
    ]);
  }, []);

  const updateDrink = useCallback(async (drink) => {
    setDrinks((currentDrinks) =>
      currentDrinks.map((d) =>
        d.id === drink.id
          ? { pricePerLiter: calcPricePerLiter(drink), ...drink }
          : d,
      ),
    );
  }, []);

  const removeDrink = useCallback(async (drink) => {
    setDrinks((currentDrinks) =>
      currentDrinks.filter((d) => d.id !== drink.id),
    );
  }, []);

  const reset = useCallback(async (drink) => {
    setDrinks([]);

    AsyncStorage.setItem('@drinks', JSON.stringify([]));
  }, []);

  const value = React.useMemo(
    () => ({ addDrink, updateDrink, removeDrink, reset, drinks }),
    [drinks, addDrink, updateDrink, removeDrink, reset],
  );

  return (
    <DrinkContext.Provider value={value}>{children}</DrinkContext.Provider>
  );
};

function useDrink() {
  const context = useContext(DrinkContext);

  if (!context) {
    throw new Error('useDrink must be used within a DrinkProvider');
  }

  return context;
}

export { DrinkProvider, useDrink };
