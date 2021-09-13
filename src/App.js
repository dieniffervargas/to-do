import React from 'react'
import Header from "./components/Header"

//aqui foi
import { Container, TextField, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

const handleChange = (event) => {  
  const { value } = event.target
   console.log(value)
  
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
          onChange={handleChange}
          />

        <IconButton
          aria-label="newTask"
          onClick={() => { alert('Ta indo UHUUULES') }}>
          <AddIcon color="primary" fontSize="large" />
        </IconButton>
      </form>

    </Container>
  </body>
}

export default App;
