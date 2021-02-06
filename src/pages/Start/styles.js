import styled from 'styled-components';
import SImage from 'react-native-scalable-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { colors } from '~/styles';
import Button from '~/components/Button';
import LogoSrc from '~/assets/images/logo.png';
import EmptyCartSrc from '~/assets/images/empty-cart.png';
import CartIconSrc from '~/assets/images/cart-icon.png';

export const Container = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  flex: 1;
  background: ${colors.primary};
`;

export const Card = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  elevation: 7;
  box-shadow: 0 0 5px black;
  flex: 1;
`;

export const BottomCard = styled.View`
  height: 115px;
  justify-content: center;
`;

export const Logo = styled(SImage).attrs({
  source: LogoSrc,
})``;

export const EmptyCartImage = styled(SImage).attrs({
  source: EmptyCartSrc,
})`
  margin-top: ${Dimensions.get('window').height * 0.1}px;
  margin-bottom: 5px;
`;

export const EmptyCartText = styled.Text`
  color: ${colors.black};
  font-family: 'Poppins-Bold';
`;

export const CartIcon = styled(SImage).attrs({
  source: CartIconSrc,
})`
  margin-right: 10px;
`;

export const StartButton = styled(Button)`
  width: 90%;
  align-self: center;
`;
