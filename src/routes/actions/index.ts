import { isNavigationReady, navigationRef } from '../../app/Navigation.ref';

export function navigateTo(name: string, params?: any[typeof name]) {
  if (isNavigationReady() && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function goBack() {
  if (isNavigationReady() && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.canGoBack() && navigationRef.current.goBack();
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
