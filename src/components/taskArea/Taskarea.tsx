import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import React, { FC, ReactElement } from 'react';
import TaskCounter from '../taskCounter/TaskCounter';
import Task from '../task/Task';

const Taskarea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status Of Your Task As On{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
        >
          <Task />
          <Task />
          <Task/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Taskarea;
