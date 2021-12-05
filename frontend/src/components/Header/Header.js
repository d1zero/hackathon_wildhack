import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Search, SearchIconWrapper, StyledInputBase } from './Header.styles';

const Header = () => {
    const [page, setPage] = React.useState(0);
    React.useEffect(() => {
        const { pathname } = window.location;
        switch (pathname) {
            case '/news/':
                setPage(1);
                break;
            case '/about/':
                setPage(2);
                break;
            default:
                setPage(0);
                break;
        }
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                color="default"
                position="static"
                style={{ padding: '0 20px', marginBottom: '20px' }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{
                            display: { xs: 'inline-flex', sm: 'none' },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Tabs
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                        value={page}
                    >
                        <Tab
                            label="Таймлайн"
                            component={Link}
                            to="/"
                            onClick={() => {
                                setPage(0);
                            }}
                        />
                        <Tab
                            label="Новости"
                            component={Link}
                            to="/news/"
                            onClick={() => {
                                setPage(1);
                            }}
                        />
                        <Tab
                            label="О проекте"
                            component={Link}
                            to="/about/"
                            onClick={() => {
                                setPage(2);
                            }}
                        />
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
