import * as Yup from 'yup';

export const AddSchema = Yup.object().shape({
    img: Yup.string()
      .min(2, 'Too Short!')
      .max(350, 'Too Long!')
      .required('Required'),
      name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      price: Yup.number()
      .min(2, 'Too Short!')
      .max(599, 'Too much!')
      .required('Required'),
  });