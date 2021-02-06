import styled from 'styled-components';
import SImage from 'react-native-scalable-image';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Button from '~/components/Button';
import Input from '~/components/Input';
import BottleIconSrc from '~/assets/images/bottle-icon.png';
import TrashIconSrc from '~/assets/images/trash-icon.png';
import { colors } from '~/styles/index';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`;

export const HeaderContent = styled.View`
  margin-top: 10%;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackSymbol = styled.Text`
  color: #3b4c68;
  font-size: 30px;
  font-family: 'Poppins-Bold';
  margin-right: 20px;
  top: -5px;
`;

export const Title = styled.Text`
  color: #3b4c68;
  font-size: 22px;
  font-family: 'Poppins-Bold';
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 50px;
`;

export const InsertButton = styled(Button).attrs({
  textStyle: {
    color: colors.secondary,
  },
})`
  margin-top: 10px;
  background: ${colors.primary};
`;

export const RemoveButton = styled(Button)`
  margin-top: 10px;
  background: ${colors.danger};
  width: 60%;
  align-self: center;
  height: 40px;
`;

export const Description = styled(Input)``;

export const Volume = styled(Input)`
  margin-top: 20px;
`;

export const Price = styled(Input)`
  margin-top: 20px;
`;

export const ButtonsContainer = styled.View`
  margin-top: auto;
  padding-bottom: ${ifIphoneX('40px', '20px')};
`;

export const BottleIcon = styled(SImage).attrs({
  source: BottleIconSrc,
  width: 30,
})`
  margin-right: 10px;
`;

export const TrashIcon = styled(SImage).attrs({
  source: TrashIconSrc,
  width: 20,
})`
  margin-right: 10px;
`;
