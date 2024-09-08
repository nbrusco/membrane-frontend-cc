import { useState, useEffect } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'

import { Dayjs } from 'dayjs'

import { DateTimeSelectorProps } from './types'

const DateTimeSelector: React.FC<DateTimeSelectorProps> = ({
  value,
  onChange,
  error
}) => {
  const [internalValue, setInternalValue] = useState<Dayjs | null>(
    value ?? null
  )

  useEffect(() => {
    setInternalValue(value ?? null)
  }, [value])

  const handleChange = (newValue: Dayjs | null) => {
    setInternalValue(newValue ?? null)
    onChange(newValue ?? null)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          value={internalValue}
          onChange={handleChange}
          slotProps={{
            textField: {
              error: !!error
            }
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default DateTimeSelector
