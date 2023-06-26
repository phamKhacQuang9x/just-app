import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import { loginValidator } from 'utils/yup.validator';

const useLoginLogic = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    isSecure: true,
  });

  const { isLoading, isSecure } = state;

  const updateState = data => setState(() => ({ ...state, ...data }));

  const loginFormByEmailPassword = {
    email: '',
    password: '',
  };

  const onLogin = useCallback(() => {
    // navigation.navigate('REGISTER');
  }, []);

  const formik = useFormik({
    validationSchema: loginValidator,
    initialValues: loginFormByEmailPassword,
    onSubmit: onLogin,
    validateOnBlur: true,
  });
  const { values, handleChange, handleSubmit, errors, touched, setTouched } =
    formik;

  const onChangeEmail = useCallback(
    value => {
      if (!touched.email) {
        setTouched({
          email: true,
          password: touched.password,
        });
      }
      handleChange('email')(value);
    },
    [handleChange, setTouched, touched.email, touched.password],
  );

  const onChangePassword = useCallback(
    value => {
      if (!touched.password) {
        setTouched({
          email: touched.email,
          password: true,
        });
      }
      handleChange('password')(value);
    },
    [handleChange, setTouched, touched.email, touched.password],
  );

  return {
    isSecure,
    onLogin,
    onChangePassword,
    onChangeEmail,
    values,
    errorsValidate: errors,
    handleSubmit,
    touched,
  };
};

export default useLoginLogic;
