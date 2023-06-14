import { Platform, StyleSheet } from 'react-native';
import colors from 'theme/colors';

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white[500],
  },

  flexRow: {
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#5b5b5d',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
});
export const ButtonStyles = StyleSheet.create({
  input: {
    borderRadius: 6,
    height: 42,
    fontSize: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#CDD9ED',
    color: colors.black[500],
  },
  inputFocus: {
    borderColor: '#17563E',
  },
  errorInputStyle: {
    borderColor: colors.danger[500],
  },
  containerStyle: {
    paddingHorizontal: 0,
  },
  label: {
    color: '#767676',
    fontWeight: '400',
    fontSize: 12,
    marginBottom: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'left',
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  errorStyle: {
    color: colors.danger[500],
    fontSize: 12,
    margin: 5,
  },
  rightIconContainerStyle: {
    color: colors.success[500],
    borderWidth: 1,
    paddingRight: 10,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderLeftWidth: 0,
    borderColor: '#CDD9ED',
    height: 42,
    ...Platform.select({
      android: {
        marginRight: 0,
      },
    }),
  },

  inputPassword: {
    height: 42,
    fontSize: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#CDD9ED',
    color: colors.black[500],
    borderRightWidth: 0,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  inputAndroid: {
    ...Platform.select({
      android: {
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        borderRightWidth: 1,
        borderLeftWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    }),
  },
});
