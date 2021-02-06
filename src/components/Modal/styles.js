import styled from 'styled-components';
import Button from '~/components/Button';
import { BlurView } from '@react-native-community/blur';
import { colors } from '~/styles/index';

export const ModalView = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true,
})`
  background: red;
`;

export const TitleContainer = styled.View`
  align-items: center;
  border-color: ${colors.light};
  border-bottom-width: 1px;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${colors.dark};
  font-family: 'Poppins-Bold';
  font-size: 22px;
`;

export const Backdrop = styled(BlurView).attrs({
  blurAmount: 1,
  blurType: 'xlight',
  reducedTransparencyFallbackColor: 'black',
})`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Container = styled.View`
  background: white;
  width: 80%;
  height: 300px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const Content = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Text = styled.Text`
  color: ${colors.textColor};
  font-family: 'Poppins-Bold';
  font-size: 18px;
  text-align: center;
`;

export const OKButton = styled(Button)``;
