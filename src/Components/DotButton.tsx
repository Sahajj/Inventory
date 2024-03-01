import * as React from 'react';
// @ts-ignore
import IconButton from '@mui/material/IconButton';
// @ts-ignore
import Menu from '@mui/material/Menu';
// @ts-ignore
import MenuItem from '@mui/material/MenuItem';
// @ts-ignore
import MoreVertIcon from '@mui/icons-material/MoreVert';


interface Props {
  onEdit: () => void;
  onDelete: () => void;
  onNavigateToProducts: () => void;
}

const ITEM_HEIGHT = 48;

const LongMenu: React.FC<Props> = ({ onEdit, onDelete, onNavigateToProducts }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
      <MenuItem onClick={onEdit}>Edit</MenuItem>
      <MenuItem onClick={onDelete}>Delete</MenuItem>
      <MenuItem onClick={onNavigateToProducts}>Show Inventory</MenuItem>
    </Menu>
    </div >
  );
}

export default LongMenu;