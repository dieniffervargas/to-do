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

  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

const handleChange = (event) => {  
  const { value } = event.target
   setTask(value) 
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
          autofocus="true"
          onChange={handleChange}
          />

        <IconButton
          aria-label="newTask"   
          // adicionar um novo valor ao estado anterior
          onClick={() => setList(ant =>[... ant, task])}>

          <AddIcon color="primary" fontSize="large" />
        
        </IconButton>
      </form>


      <h4>Lista de Tarefas</h4>
    

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {list.map( item => (
           <ItemTodo item={item}/>
        ))}
      </List>
    </Container>
  </body>
}

export default App;

