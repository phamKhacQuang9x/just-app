import { StyleSheet } from 'react-native';
import colors from 'theme/colors';
import { FontFamily } from 'utils/screen';

export default StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },

  iconRight: { position: 'absolute', right: 15, zIndex: 10 },

  iconLeft: {
    position: 'absolute',
    left: 15,
    zIndex: 10,
  },

  txtError: {
    marginTop: 4,
  },

  input: {
    fontSize: 16,
    fontFamily: FontFamily.Mulish,
    lineHeight: 20,
    paddingVertical: 10,
    height: 55,
    backgroundColor: colors.white[500],
    width: '75%',
    margin: 1.5,
    // borderRadius: 6,
  },

  passwordInput: {
    paddingRight: 45,
  },

  paddingLeft: {
    paddingLeft: 45,
  },
  spaceLeft: {
    // paddingLeft:12,
  },
  wrapInput: {
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.black[300],
  },
});
