import { memo } from 'react'

import { FormSelect, FormLabel, FormGroup } from 'react-bootstrap'

const ScheduleSelect = memo(({ children, label, ...props }) => {
  return (
    <FormGroup controlId='formFile' className='mb-3'>
      <FormLabel>{label}</FormLabel>
      <FormSelect {...props}>
        <option value=''>...</option>
        {children}
      </FormSelect>
    </FormGroup>
  )
})

export default ScheduleSelect
