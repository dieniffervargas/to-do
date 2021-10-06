import React, { useState } from 'react';

import {ListItem,
  ListItemButton, 
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton} from '@mui/material/';

import DeleteIcon from '@material-ui/icons/Delete';

const ItemTodo = ({task, checked, index, Remove, checkBox}) => {
  const [checkedAtual, setCheckedAtual] = useState(checked);

  const handleToggle = () => {
   
    checkBox(!checked,index)
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
          onClick={handleToggle} 
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
