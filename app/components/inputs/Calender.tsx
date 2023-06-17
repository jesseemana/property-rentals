'use client'

import { DateRange, Range, RangeKeyDict } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface DatePickerProps {
  value: Range
  onChange: (value: RangeKeyDict) => void
  disabledDates?: Date[]
}

const Calender: React.FC<DatePickerProps> = ({value, onChange, disabledDates}) => {
  return (
    <div>Calender</div>
  )
}

export default Calender