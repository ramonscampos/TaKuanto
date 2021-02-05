import styled from 'styled-components/native';
import SImage from 'react-native-scalable-image';
import BottleAvatarSrc from '~/assets/images/bottle-avatar.png';
import EditSrc from '~/assets/images/edit.png';
import { colors } from '~/styles/index';

export const Container = styled.TouchableOpacity`
  border: 1.5px solid #d7d7d7;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  width: 90%;
  height: 70px;
  border-radius: 15px;
  padding: 10px;
  margin-top: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const BottleAvatar = styled(SImage).attrs({
  source: BottleAvatarSrc,
})``;

export const EditImage = styled(SImage).attrs({
  source: EditSrc,
})``;

export const Content = styled.View`
  flex: 1;
  margin: 10px;
`;

export const Description = styled.Text`
  color: ${colors.secondary};
  font-family: 'Poppins-Bold';
  top: 5px;
  font-size: 16px;
`;

export const Volume = styled.Text`
  color: ${colors.secondary};
  font-family: 'Poppins-Bold';
  opacity: 0.5;
  margin-right: 10px;
`;

export const Price = styled.Text`
  color: ${colors.secondary};
  font-family: 'Poppins-Bold';
  opacity: 0.5;
`;
