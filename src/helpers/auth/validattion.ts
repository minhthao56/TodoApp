import * as yup from 'yup';

export const email = yup
  .string()
  .email()
  .typeError('Email is not variable')
  .trim()
  .required('Required');

export const password = yup
  .string()
  .min(8, 'Limit 8 character')
  .trim()
  .required('Required');

export const name = yup
  .string()
  .min(4, 'Lastest 4 character')
  .max(30, 'Limited 30 character');
