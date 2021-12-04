import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
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
                        <Link to="/">
                            <Tab label="Новости" />
                        </Link>
                        <Link to="/Timeline">
                            <Tab label="Таймлайн" />
                        </Link>
                        <Link to="/About">
                            <Tab label="О проекте" />
                        </Link>
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
