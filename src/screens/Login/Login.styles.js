import { StyleSheet } from 'react-native';
import colors from 'theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white[500],
    paddingHorizontal: 16,
  },

  logoImg: {
    width: 160,
    height: 160,
    alignSelf: 'center',
  },
});
export default styles;
