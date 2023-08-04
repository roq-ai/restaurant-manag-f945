import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  user_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
