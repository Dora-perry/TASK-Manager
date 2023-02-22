import React, { FC, ReactElement, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';
import propTypes from 'prop-types'

const TaskDateField: FC<IDateField> = (props): ReactElement => {
    
    // state
    const {disabled = false, value = new Date(), onChange  = (date) =>{console.log(date);
    }} = props
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Task Date"
                inputFormat='dd/mm/yyyy'
                value={value}
                disabled={disabled}
          onChange={onChange}
          renderInput={(params) => (
            <TextField {...params} />
          )}
        />
      </LocalizationProvider>
    );
}
TaskDateField.propTypes = {
    disabled: propTypes.bool,
    onChange: propTypes.func,
    value: propTypes.instanceOf(Date)
}

export default TaskDateField