import * as yup from 'yup'

export const orderValidationSchema = yup
  .object()
  .shape({
    orderType: yup.string().required('Order type is required'),
    cryptocurrency: yup.string().required('Cryptocurrency is required'),
    amount: yup
      .number()
      .typeError('Amount must be a valid number')
      .positive('Amount must be greater than 0')
      .required('Amount is required')
      .min(0.000001, 'Amount must be at least 0.00001'),
    price: yup.number().required('Price is required'),
    expirationDate: yup
      .date()
      .min(new Date(), "Expiration date can't be in the past")
      .required('Expiration date is required'),
    orderId: yup.string().required('Id is required')
  })
  .required()
