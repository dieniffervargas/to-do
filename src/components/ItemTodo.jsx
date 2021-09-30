import React from 'react';

import {ListItem,
  ListItemButton, 
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton} from '@mui/material/';

import DeleteIcon from '@material-ui/icons/Delete';

const ItemTodo = ({task, checked, index, Remove}) => {
  //const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   //setChecked(newChecked);
  };

  const Delete = () => {
    Remove(index)
  }
  
    return <ListItem
      key={task}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <DeleteIcon onClick={Delete} marginRight=" " />
        </IconButton>
      }
      disablePadding>
      <ListItemButton 
          role={undefined} 
          onClick={( value ) => handleToggle( value ) } 
          dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': `checkbox-list-label- ${task}` }}
          />
        </ListItemIcon>
        <ListItemText id={task} primary={task} />
      </ListItemButton>
    </ListItem>
}

export default ItemTodo;
