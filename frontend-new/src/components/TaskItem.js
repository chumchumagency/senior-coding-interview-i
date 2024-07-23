import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Grid, Box, Typography } from '@mui/material';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

   const onSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
  };

  return (
    <Box 
      component="form" 
      onSubmit={onSubmit} 
      sx={{ 
        p: 2, 
        backgroundColor: '#f9f9f9', 
        borderRadius: 2, 
        boxShadow: 3, 
        maxWidth: 400, 
        mx: 'auto' 
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Add New Task
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Priority</InputLabel>
            <Select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              label="Priority"
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Task
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskForm;
