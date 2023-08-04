import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
