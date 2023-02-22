import React, { FC, ReactElement } from 'react'
import { TextField } from '@mui/material'
import { ITextField } from './interfaces/ITextField'
 import propTypes from 'prop-types'
 
const TaskTitleField: FC<ITextField> = (props): ReactElement => {
     
    const { onChange = (e) => {
        console.log(e)
    }, disabled = false } = props;


     return (
         <TextField
             id='title'
             label="Task Title"
             placeholder='Task Title'
             variant='outlined'
             size='small'
             name='title'
             disabled={disabled}
             fullWidth
             onChange ={onChange}

         />
   )
}
 
TaskTitleField.propTypes = {
    onChange: propTypes.func,
    disabled: propTypes.bool
}
 
 export default TaskTitleField