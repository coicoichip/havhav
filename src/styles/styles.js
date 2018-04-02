import { StyleSheet, Platform } from 'react-native';
import * as color from './colors';
import * as size from './sizes';
const FONT_MAIN = "Helvetica";
const FONT_MAIN_BOLD = FONT_MAIN + "-" + "Bold";
const isIOS = Platform.OS === 'ios';

const buttonTab = {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden",
    borderRadius: 13,
    padding: 15,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 12,
    fontFamily: FONT_MAIN,
    color: color.BACKGROUND_COLOR,
};

const buttonFull = {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    padding: 10,
};
const wrapperCenter = {
    alignItems: 'center',
    justifyContent: 'center',
};

const style = {
    wrapperContainer: {
        flex: 1,
        backgroundColor: color.BACKGROUND_COLOR,
    },
}

const styles = StyleSheet.create(style)

export default (styles)