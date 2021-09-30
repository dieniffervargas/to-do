import React, { useState } from 'react'
import Header from "./components/Header"
import ItemTodo from "./components/ItemTodo"
import List from '@mui/material/List';
//import NewList from "./components/NewList"

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

  const [listTask, setlistTask] = useState([
    {
      task: "Tarefa 0",
      checked: false
    },
    {
      task: "Tarefa 1",
      checked: true
    }
  ]);




  const [task, setTask] = useState("");

const handleChange = (event) => {  
  const { value } = event.target
   setTask(value) 
}

const handleClick = () => {
  setlistTask( ant => [...ant, task])
  setTask("")
}

const Remove = (index) => {
  setlistTask(listTask.filter((item,atual) => atual !== index))}


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
          onChange={handleChange}
          />

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
              Remove={Remove}/>
        ))}
      </List>
      { <h5> --- {listTask.length} Tarefas --- </h5>}
      {/* { listTask.length <= 0 && <p> --- {listTask.length} tarefas --- </p>} */}
    </Container>
  </body>
}

export default App;

