import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigateTo = (name, params) => {
  navigationRef.current.navigate(name, params);
};

export const goBack = () => {
  navigationRef.canGoBack() && navigationRef.goBack();
};
