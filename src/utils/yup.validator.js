import * as Yup from 'yup';

// export const vnPhoneReg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
// export const cnPhoneReg = /^1[0-9]{10}$/g;
// const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b|^1[0-9]{10}$/g;
export const passwordValidator = Yup.string()
  .required('password Empty')
  .min(6, 'password Min')
  .max(60, 'password Max')
  .matches(/[\w\d*.!@#$%^&(){}[\]:;<>,.?/~_+-=|]{1,}/, {
    message: 'password Not Valid',
  });

export const emailValidator = Yup.string()
  .email('email Not Valid')
  .required('email Empty');

export const loginValidator = Yup.object().shape({
  email: emailValidator,
  password: passwordValidator,
});

export const registerValidator = Yup.object().shape({
  email: emailValidator,
  password: passwordValidator,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'confirm Password Not Match')
    .required('confirm Password Empty'),
});

export const forgotPasswordValidator = Yup.object().shape({
  phone: emailValidator,
  password: passwordValidator,
});

export const oldPasswordValidator = Yup.string()
  .min(6, 'passwordMin')
  .max(60, 'passwordMax')
  .matches(/[\w\d*.!@#$%^&(){}[\]:;<>,.?/~_+-=|]{1,}/, {
    message: 'passwordNotValid',
  });

export const changePasswordValidator = Yup.object().shape({
  oldPassword: oldPasswordValidator,
  password: passwordValidator,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'confirm password not match')
    .required('confirm password empty'),
});
