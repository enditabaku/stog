import styled from 'styled-components';
import { Dimensions, Platform } from 'react-native';
import { responsiveSize, responsiveFont } from './../utils/responsiveSize';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// screen dimensions
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// colors
export const Colors = {
    white: '#fff',
    black: '#000',
    castletonGreen: '#17625D',
    lightGrey: '#CACACA',
    darkGrey: '#2a2d2d',
    whiteGrey: '#DEE1E2',
    orange: '#FF7A00',
    transparentGreen: '#CFDFDA40',
    lightGreen: '#CFDFDA',
    dark: '#0d4c48',
    lightGreenOpacity: '#CFDFDA90',
    red: '#f05050',
    strongGreen: '#12ac7a'
};

const { white, black, castletonGreen, lightGrey, orange, whiteGrey, transparentGreen, lightGreen, darkGrey, dark, lightGreenOpacity, red, strongGreen } = Colors;

/* //////////////////////////////////////////// */
/* ////////// GENERAL STYLES /////////// */
/* //////////////////////////////////////////// */

export const CenterContainer = styled.View`
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: ${castletonGreen};
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: ${Platform.OS === 'ios' ? '60px' : '30px'}
  right: 2px;
  justify-content: center;
  align-items: center;
`;

/* //////////////////////////////////////////// */
/* ////////// WELCOME SCREEN STYLES /////////// */
/* //////////////////////////////////////////// */

export const WelcomeContainer = styled.View`
  width: 100%;
  flex: 1;
  align-content: center;
  justify-content: center;
  margin-top: 90%;
  padding: 20px;
`;

export const WelcomeText = styled.Text`
  color: ${white};
  font-weight: 700;
  font-size: ${responsiveFont(35)};
  text-align: center;
  text-transform: uppercase;
`;

export const StartButton = styled.TouchableOpacity`
  background-color: ${castletonGreen};
  border-radius: 45px;
  padding: 15px 80px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${white};
  font-weight: 700;
  font-size: ${responsiveFont(25)};
  text-align: center;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 45px;
  width: 110%;
`;

/* //////////////////////////////////////////// */
/* /////////// LOGIN SCREEN STYLES //////////// */
/* //////////////////////////////////////////// */

export const LoadingContainer = styled.View`
  width: 100%;
  flex: 1;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: ${whiteGrey};
`;

export const LoginContainer = styled.View`
  width: 100%;
  flex: 1;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const EyeIcon = styled.TouchableOpacity`
  right: 20%;
  padding-top: 15px;
  position: absolute;
  z-index: 1;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: ${responsiveSize(13)};
  color: ${white};
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  width: 70%;
  background-color: ${orange};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-vertical: 5px;
  height: 60px;
`;

export const LoginButtonText = styled.Text`
  color: ${white};
  font-size: ${responsiveSize(16)};
`;

export const StyledTextInput = styled.TextInput`
  padding: 15px;
  border-radius: 10px;
  border: 2px solid ${lightGrey};
  font-size: ${responsiveSize(16)};
  height: 60px;
  width: 70%;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${white};
`;

export const StyledInputLabel = styled.Text`
  color: ${white};
  font-size: ${responsiveSize(13)};
`;

/* //////////////////////////////////////////// */
/* /////// ACTIVE INVOICE SCREEN STYLES /////// */
/* //////////////////////////////////////////// */

export const InvoiceHeaderBackground = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: ${dark};
  padding-top: ${responsiveSize(50)};
`;

export const InvoiceText = styled.Text`
  font-weight: 700;
  font-size: ${responsiveFont(25)};
  text-align: center;
  margin-top: ${responsiveSize(-80)}
`;

export const OrangeText = styled.Text`
  color: ${orange};
  text-align: center;
`;

export const ModalView = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  width: 100%
`

export const TitleText = styled.Text`
  font-weight: 700;
  font-size: ${responsiveFont(20)};
  text-align: center;
  color: ${castletonGreen};
`

export const SubtitleText = styled.Text`
  font-weight: 600;
  font-size: ${responsiveFont(18)};
  text-align: center;
  color: ${castletonGreen};
`

export const SmallButtonText = styled.Text`
  color: ${white};
  font-weight: 700;
  font-size: ${responsiveFont(18)};
  text-align: center;
`;

export const TransparentBox = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center; 
  border-radius: ${responsiveSize(0)};
  margin-top: ${responsiveSize(25)};
`

export const OrangeButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${orange};
  width: 75%;
  margin-top: ${responsiveSize(10)};
  padding: 18px 12px;
`;

export const LeftButtonText = styled.Text`
  color: ${white};
  font-size: ${responsiveFont(16)};
`;

/* //////////////////////////////////////////// */
/* //////// PRODUCT LIST MODAL STYLES ///////// */
/* //////////////////////////////////////////// */

export const ProductButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${lightGreen};
  width: 90%;
  align-self: center;
  margin-top: ${responsiveSize(15)};
  padding: 16px 12px;
`;

export const ProductNameText = styled.Text`
  font-weight: 700;
  font-size: ${responsiveFont(18)};
  text-align: center;
  color: ${castletonGreen};
`

export const ProductDataText = styled.Text`
  color: ${castletonGreen};
  font-size: ${responsiveFont(16)};
`;

/* //////////////////////////////////////////// */
/* ////// ACTIVE INVOICE MODAL STYLES ///////// */
/* //////////////////////////////////////////// */


export const WelcomeUserText = styled.Text`
  color: ${castletonGreen};
  font-weight: 700;
  font-size: ${responsiveFont(20)};
  text-align: center;
  margin-top: ${responsiveFont(150)};
`;

export const InvoiceInstructionsText = styled.Text`
  color: ${castletonGreen};
  font-weight: 700;
  font-size: ${responsiveFont(18)};
  text-align: center;
  padding: 0px 20px;
`;

export const InvoiceProductName = styled.Text`
  color: ${darkGrey};
  font-weight: 700;
  font-size: ${responsiveFont(16)};
  text-align: left;
`;

export const InvoiceProductButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${lightGreenOpacity};
  width: 90%;
  align-self: center;
  margin-top: ${responsiveSize(15)};
  padding: 16px;
`;

export const InvoiceProductTotal = styled.Text`
  color: ${orange};
  font-weight: 700;
  font-size: ${responsiveFont(19)};
  text-align: right;
`;

export const ButtonsRow = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DeleteButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${red};
  width: 25%;
  margin-top: ${responsiveSize(10)};
  margin-right: ${responsiveSize(10)};
  padding: 8px;
  align-items: center;
`;

export const DeleteButton2 = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${red};
  margin-top: ${responsiveSize(10)};
  margin-right: ${responsiveSize(10)};
  padding: 8px;
  align-items: center;
`;

export const SaveButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${castletonGreen};
  width: 25%;
  margin-top: ${responsiveSize(10)};
  margin-right: ${responsiveSize(10)};
  padding: 8px;
  align-items: center;
`;

export const DeleteText = styled.Text`
  color: ${white};
  font-weight: 700;
  font-size: ${responsiveFont(15)};
`;

export const PayButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${strongGreen};
  width: 30%;
  margin-top: ${responsiveSize(10)};
  margin-right: ${responsiveSize(10)};
  padding: 8px;
  align-items: center;
  ${(props) =>
    props.disabled == true &&
    `
      background-color: ${lightGreen}
    `
  }
`;

export const PayText = styled.Text`
  color: ${white};
  font-weight: 700;
  font-size: ${responsiveFont(15)};
`;

export const InfoRowText = styled.Text`
  color: ${castletonGreen};
  font-weight: 700;
  font-size: ${responsiveFont(18)};
`;

export const TotalAmountText = styled.Text`
  color: ${dark};
  font-weight: 700;
  font-size: ${responsiveFont(20)};
  padding-top: 5px;
`;


export const CouponButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${strongGreen};
  margin-top: ${responsiveSize(10)};
  margin-right: ${responsiveSize(10)};
  padding: 8px;
  align-items: center;
`;