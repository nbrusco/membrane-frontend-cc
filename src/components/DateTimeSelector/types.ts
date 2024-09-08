import { Dayjs } from 'dayjs'

export interface DateTimeSelectorProps {
  value: Dayjs | null
  onChange: (value: Dayjs | null) => void
  error?: string;
}