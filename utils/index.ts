import * as Yup from 'yup';

export * as jwt from './jwt';
export * as validations from './validations';
export * as handleResponse from './response';
export * as stringifyQuery from './stringifyQuery';
export * as stringWrangler from './string-wrangler';
export * from './currency';

Yup.addMethod(Yup.string, 'name', function (msg = 'invalidValue') {
  return this.matches(/^[A-Za-z| |ñ|Ñ|À-ÿ]*$/, msg);
});

Yup.addMethod(Yup.string, 'password', function (msg = 'passwordStrength') {
  return this.min(6, msg);
});
