import React, { FC, ReactElement } from 'react'
import { TextField } from '@mui/material'
import { ITextField } from './interfaces/ITextField'
import  PropTypes  from 'prop-types'

const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
    
    const {onChange = (e)=>{console.log(e);
    }, disabled= false} = props
  return (
      <TextField
      id='Description'
             label="Description"
             placeholder='Description'
             variant='outlined'
             size='small'
          name='Description'
          multiline
          rows={4}
          fullWidth
          onChange={onChange}
          disabled={disabled}
      />
  )
}

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
 
export default TaskDescriptionField