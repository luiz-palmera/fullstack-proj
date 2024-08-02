import React from 'react';
import styled from 'styled-components';
import Menu from '../../assets/menu.svg'
import { useState } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #0D0106;
  margin: 0;
  padding: 0;
  flex-direction: row;
`

const Title = styled.h1`
  font-size: 18px;
  color: #545F4F;  
  font-weight: 800;
  justify-content: flex-start;
  margin: 0;
  padding-left: 20px;
  padding-top: 7px;
`

const MenuImage = styled.img`
  padding-left: 20px;
  width:30px;
  transition: width 0.3s;
  &:hover{
      width: 33px;
      transition-delay: 0s;
  }
`

export const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    //criar componente em arquivo separado para a drower
    const DrawerList = (
        <Box sx={{ width:250 }} role="presentation" onClick={toggleDrawer(false)} >
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>

                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
    )

    return (
        <Wrapper>
            <MenuImage src={Menu} onClick={toggleDrawer(true)} />
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
            <Title>
                E-TAC-TOE
            </Title>
        </Wrapper>
    )
}
