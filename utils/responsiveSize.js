import { RFValue } from "react-native-responsive-fontsize";

export const responsiveSize = size => {
    return RFValue(size);
}

export const responsiveFont = size => {
    let responsiveFont = RFValue(size);
    return responsiveFont;
}
