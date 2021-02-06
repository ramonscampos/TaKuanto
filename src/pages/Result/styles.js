import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import SImage from 'react-native-scalable-image';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Button from '~/components/Button';
import BottleAvatarSrc from '~/assets/images/bottle-avatar.png';
import WinnerIcon from '~/assets/images/winner.png';
import { colors } from '~/styles';
import CartIconSrc from '~/assets/images/blue-cart-icon.png';
import BackIconSrc from '~/assets/images/back-icon.png';

export const Container = styled(LinearGradient).attrs({
  colors: ['#5D66D3', '#1E2D44'],
})`
  flex: 1;
  padding-top: ${ifIphoneX('30px', '20px')};
`;

export const WinnerImage = styled(SImage).attrs({
  height: 150,
  source: WinnerIcon,
})``;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const Content = styled.View`
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: white;
  padding: 20px;
  flex: 1;
  padding-bottom: ${ifIphoneX('40px', '30px')};
`;

export const TitleContainer = styled.View`
  align-self: center;
  text-align: center;
`;

export const Title = styled.Text`
  color: ${colors.textColor};
  font-family: 'Poppins-Bold';
  font-size: 26px;
`;

export const Volume = styled.Text`
  color: ${colors.regular};
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  align-self: center;
  margin-bottom: -10px;
`;

export const WinnerCard = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0 30px;
`;

export const BottleAvatar = styled(SImage).attrs({
  source: BottleAvatarSrc,
  height: 80,
})`
  margin-right: 20px;
`;

export const WinnerCardContent = styled.View`
  align-items: center;
`;

export const Price = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: ${colors.primary};
  font-size: 26px;
`;

export const WinnerCardDescription = styled.Text`
  color: ${colors.regular};
  font-size: 16px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const ResetButton = styled(Button).attrs({
  textStyle: {
    color: colors.textColor,
  },
})`
  background: #fab400;
`;

export const CartIcon = styled(SImage).attrs({
  source: CartIconSrc,
})`
  margin-right: 10px;
`;

export const BackIcon = styled(SImage).attrs({
  source: BackIconSrc,
  height: 12,
})`
  margin-right: 5px;
`;

export const BackLinkButton = styled.TouchableOpacity`
  align-self: center;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const BackLinkText = styled.Text`
  text-decoration: underline;
  font-family: 'Poppins-SemiBold';
  color: #627086;
  text-decoration-color: #627086;
  font-size: 16px;
`;
