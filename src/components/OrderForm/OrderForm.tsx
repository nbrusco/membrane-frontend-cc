import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { Button, Typography } from '@mui/material'

import InputLabel from '@mui/material/InputLabel'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import { useCoins } from '@/hooks/useCoins/useCoins'

import DateTimeSelector from '../DateTimeSelector/DateTimeSelector'

import { validationProps } from '@/utils/validationProps'

const validationSchema = yup
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
    price: yup.number(),
    expirationDate: yup
      .date()
      .min(new Date())
      .required('Expiration date is required')
  })
  .required()

const formatToUSD = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

const OrderForm = () => {
  dayjs.extend(utc)

  const { data, isLoading } = useCoins()
  const {
    register,
    control,
    setValue,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const handleType = (
    event: React.MouseEvent<HTMLElement>,
    newType: string
  ) => {
    if (newType !== null) {
      setValue('orderType', newType)
    }
  }

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  const expirationDate = watch('expirationDate')
  const expirationDateUTC = expirationDate
    ? dayjs(expirationDate).utc().format('YYYY-MM-DD HH:mm:ss')
    : ''

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            scale: '200%'
          }}
        >
          <CircularProgress className='my-16' />
        </Box>
      ) : (
        <form onSubmit={onSubmit} className='flex flex-col gap-3'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='orderType'>Order type</label>
            <Controller
              name='orderType'
              control={control}
              render={({ field }) => (
                <ToggleButtonGroup
                  {...field}
                  value={field.value}
                  onChange={handleType}
                  exclusive
                  aria-label='order type'
                  size='large'
                >
                  <ToggleButton
                    value='buy'
                    aria-label='buy'
                    className={`w-1/2 transition-all duration-300 hover:bg-green-400 ${
                      watch('orderType') === 'buy' && 'bg-green-500 '
                    }`}
                  >
                    Buy
                  </ToggleButton>
                  <ToggleButton
                    value='sell'
                    aria-label='sell'
                    className={`w-1/2 transition-all duration-300 hover:bg-red-400 ${
                      watch('orderType') === 'sell' && 'bg-red-500 '
                    }`}
                  >
                    Sell
                  </ToggleButton>
                </ToggleButtonGroup>
              )}
            />
            {errors.orderType && (
              <Typography className='text-red-500 text-sm'>
                {errors.orderType.message}
              </Typography>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <Controller
              name='cryptocurrency'
              control={control}
              render={({ field }) => (
                <div className='flex flex-col gap-2'>
                  <InputLabel id='cryptoCurrency-select-label'>
                    Cryptocurrency
                  </InputLabel>
                  <Select
                    {...field}
                    value={field.value || ''}
                    labelId='cryptoCurrency-select-label'
                    id='cryptoCurrency-select'
                    error={!!errors.cryptocurrency}
                  >
                    {data?.map((coin) => (
                      <MenuItem key={coin.id} value={coin.id}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.75rem'
                          }}
                        >
                          <img
                            src={coin.image}
                            alt={`${coin.name} image`}
                            style={{ width: '28px', height: '28px' }}
                          />
                          <span>{coin.name}</span>
                        </div>
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              )}
            />
            {errors.cryptocurrency && (
              <Typography className='text-red-500 text-sm'>
                {errors.cryptocurrency.message}
              </Typography>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <InputLabel id='cryptoCurrency-select-label'>Amount</InputLabel>
            <TextField
              {...validationProps()}
              {...register('amount')}
              type='number'
              className='w-full'
              id='outlined-basic'
              variant='outlined'
              inputProps={{ min: 0 }}
              error={!!errors.amount}
            />
            {errors.amount && (
              <Typography className='text-red-500 text-sm'>
                {errors.amount.message}
              </Typography>
            )}
          </div>

          <div className='flex flex-row items-center gap-4'>
            <strong>Price in USD</strong>
            <Typography variant={'h6'}>
              {formatToUSD(
                (data?.find((coin) => coin.id === watch('cryptocurrency'))
                  ?.current_price ?? 0) * (watch('amount') ?? 0)
              )}
            </Typography>
          </div>

          <div>
            <label htmlFor='expirationDate'>Expiration Date</label>
            <Controller
              name='expirationDate'
              control={control}
              defaultValue={undefined}
              render={({ field }) => (
                <DateTimeSelector
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date: Dayjs | null) =>
                    field.onChange(date?.toDate() ?? null)
                  }
                  error={errors.expirationDate?.message}
                />
              )}
            />
            {expirationDate && (
              <Typography
                variant='body2'
                color='textSecondary'
                className='mt-1'
              >
                Expiration Date (UTC): {expirationDateUTC}
              </Typography>
            )}
            {errors.expirationDate && (
              <Typography className='text-red-500 text-sm mt-1'>
                {errors.expirationDate.message}
              </Typography>
            )}
          </div>

          <div className='flex flex-row gap-4'>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className='w-2/3 bg-slate-400'
            >
              Place Order
            </Button>
            <Button
              onClick={() => reset()}
              variant='contained'
              className='w-1/3 bg-slate-500'
            >
              Reset
            </Button>
          </div>

          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </form>
      )}
    </>
  )
}

export default OrderForm