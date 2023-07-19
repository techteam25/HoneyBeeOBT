import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import styles from "./BottomNav.module.css";

type Routes = {
  [key: string]: string;
};

const routes: Routes = {
  Learn: '/workflow/learn',
  Translate: '/workflow/translate',
  Naturalness: '/workflow/naturalness',
  Accuracy: '/workflow/accuracy',
  'Voice Studio': '/workflow/voice',
  Finalize: '/workflow/finalize',
  Review: '/workflow/review',
};

const routeColor: any = {
  '/workflow/learn': "#00cc88",
  '/workflow/translate': "#ff0000",
  '/workflow/naturalness': "#009900",
  '/workflow/accuracy': "#008ae6",
  '/workflow/voice': "#ff0066",
  '/workflow/finalize': "#aa80ff",
  '/workflow/review': "#ff6600",
}

export default function BottomNav({ router }: { router: string }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const index = Object.values(routes).findIndex((route) => route === router);
    setSelectedIndex(index);
  }, [router]);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.mainContainer} >

      <List component="nav" aria-label="Workflow">
        <ListItem
          button
          id="workflow-button"
          aria-haspopup="true"
          aria-controls="workflow-menu"
          aria-label="workflow menu"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          style={{
            backgroundColor: routeColor[router],
            margin: '1rem 0',
            borderRadius: '10px',
            textAlign: 'center'
          }}
        >
          <ListItemText
            primary="Workflow"
            secondary={selectedIndex !== -1 ? Object.keys(routes)[selectedIndex] : ''}
          />
        </ListItem>
      </List>
      <Menu
        id="workflow-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'workflow-button',
          role: 'listbox',
        }}
      >
        {Object.keys(routes).map((route, index) => (
          <Link key={route} href={routes[route]}>
            <MenuItem
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
              style={{
                backgroundColor: routeColor[routes[route]],
                height: '3rem',
                marginTop: '1rem'
              }}

            >
              {route}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}