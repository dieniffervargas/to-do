import React, { useState, useEffect } from 'react'
import Header from "./components/Header"
import ItemTodo from "./components/ItemTodo"
import List from '@mui/material/List';

import { Container, TextField, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Add as AddIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  const [listTask, setlistTask] = useState([ ]);
  const [task, setTask] = useState("");

  useEffect( () => {
    const prevListask = localStorage.getItem('task@to-do')
    if(prevListask) {
      setlistTask(JSON.parse(prevListask));}
  }, [])

  useEffect( () => {
    localStorage.setItem('task@to-do', JSON.stringify(listTask));
  }, [listTask])

  const handleChange = (event) => {  
    const { value } = event.target
    setTask(value) 
  }

  const handleClick = () => {
    const newtask = {
      task,
      checked: false,
    } 
  setlistTask(ant => [...ant, newtask])
  setTask("")
  }

  const Remove = (index) => {
    setlistTask(listTask.filter((item,atual) => atual !== index))
  }

  const checkBox = (checked,index) => {
    const newList = listTask.map( (item,indexAtual) => {
      let atual = item.checked

      if(indexAtual == index){
        atual = checked}

    return{
      ...item,
      checked: atual
    }
  })
    setlistTask(newList)
}

  return <body>
    <Header />
    <Container maxWidth="md">
      
      <form className={classes.root}>
        <TextField
          multiline
          rows={4}
          placeholder="Digite sua tarefa"
          label="Digite a tarefa"
          variant="outlined"
          fullWidth 
          value={task}
          onChange={handleChange}/>
        <IconButton
          aria-label="newTask"   
          // adicionar um novo valor ao estado anterior
          onClick={handleClick}>
          <AddIcon color="primary" fontSize="large" />
        </IconButton>
      </form>

     {listTask.length > 0 &&  <h4>Tarefas para fazer</h4>}
    
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {listTask.map( (item,index) => (
           <ItemTodo 
              task={item.task} 
              checked={item.checked} 
              index={index} 
              Remove={Remove}
              checkBox={checkBox}/>
        ))}
      </List>
      { <h5 color="primary" align="center" >  {listTask.length} Tarefas </h5>}
    </Container>
  </body>
}

export default App;