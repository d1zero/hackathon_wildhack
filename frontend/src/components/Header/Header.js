import React from 'react';
import { AppBar, Tab, Tabs, Box, Toolbar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Search, SearchIconWrapper, StyledInputBase } from './Header.styles';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="transparent">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Tabs
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        <Tab label="Новости" />
                        <Tab label="Таймлайн" />
                        <Tab label="О проекте" />
                    </Tabs>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
