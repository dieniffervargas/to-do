import React from 'react';

import {ListItem,
  ListItemButton, 
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton} from '@mui/material/';

import DeleteIcon from '@material-ui/icons/Delete';

const ItemTodo = ({item, index, Remove}) => {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const Delete = () => {
    Remove(index)
  }
  
    return <ListItem
      key={item}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <DeleteIcon onClick={Delete} marginRight=" " />
        </IconButton>
      }
      disablePadding>
      <ListItemButton role={undefined} onClick={handleToggle(item)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(item) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': `checkbox-list-label- ${item}` }}
          />
        </ListItemIcon>
        <ListItemText id={item} primary={item} />
      </ListItemButton>
    </ListItem>
}

export default ItemTodo;
