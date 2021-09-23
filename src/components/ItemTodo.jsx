import React from 'react';


import {ListItem} from '@mui/material/';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
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
          <DeleteIcon onClick={Delete} />
        </IconButton>
      }
      disablePadding
    >
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
