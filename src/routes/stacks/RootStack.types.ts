import { ParamListBase } from '@react-navigation/native';

export interface RootStackParamsList extends ParamListBase {
  LOGIN: undefined;
  REGISTER: undefined;
  HISTORY_DETAIL: {
    item: any;
  };
}
