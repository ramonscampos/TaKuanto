import styled from 'styled-components';
import SImage from 'react-native-scalable-image';
import Button from '~/components/Button';

import LogoSrc from '~/assets/images/logo.png';
import HomeImageSrc from '~/assets/images/home.png';
import CompareIconSrc from '~/assets/images/compare-icon.png';
import BottleIconSrc from '~/assets/images/bottle-icon.png';

import { colors } from '~/styles/index';

export const Container = styled.View``;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
})`
  height: 83%;
`;

export const Logo = styled(SImage).attrs({
  source: LogoSrc,
})`
  margin-bottom: 40px;
`;

export const HomeImage = styled(SImage).attrs({
  source: HomeImageSrc,
})`
  margin-bottom: 20px;
`;

export const NewDrinkButton = styled(Button)`
  width: 90%;
  align-self: center;
`;

export const Footer = styled.View`
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  height: 17%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  elevation: 0;
  z-index: 9;
`;

export const CompareButton = styled(Button)`
  width: 89%;
  align-self: center;
`;

export const CompareIcon = styled(SImage).attrs({
  source: CompareIconSrc,
})`
  margin-right: 10px;
  top: -4px;
`;

export const BottleIcon = styled(SImage).attrs({
  source: BottleIconSrc,
})`
  margin-right: 10px;
  top: -4px;
`;

export const ClearLinkButton = styled.TouchableOpacity``;

export const ClearLinkText = styled.Text`
  text-decoration: underline;
  margin-top: 8px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.secondary};
`;
