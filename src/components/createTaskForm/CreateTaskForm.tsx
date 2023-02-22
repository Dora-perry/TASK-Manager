import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, ReactElement } from 'react';
import TaskTitleField from './_TaskTitleField';
import TaskDescriptionField from './_TaskDescriptionField';
import TaskDateField from './TaskDateField';
import TaskSelectField from './TaskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/priority';

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={4} variant="h6" component="h2">
        Create A Task
          </Typography>
          <Stack sx={{ width: "100%" }} spacing={2} >
              
          <TaskTitleField />
              <TaskDescriptionField />
              <TaskDateField />
              <Stack direction="row" spacing={2}>
                  <TaskSelectField
                      label='Status'
                      name='status'
                      items={[
                          {
                              value: Status.todo,
                              label: Status.todo.toUpperCase()
                      },
                          {
                              value: Status.inProgress,
                              label: Status.inProgress.toUpperCase()
                      }
                  ]}/>
                  <TaskSelectField
                      label='Priority'
                      name='priority'
                      items={[
                          {
                          value: Priority.low,
                          label:Priority.low
                      
                          },
                          {
                          value: Priority.normal,
                          label:Priority.normal
                      
                          },
                          {
                          value: Priority.high,
                          label:Priority.high
                      
                          }
                      ]} />
              </Stack>
          </Stack>
    </Box>
  );
};

export default CreateTaskForm;
