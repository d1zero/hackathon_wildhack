import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Search, SearchIconWrapper, StyledInputBase } from './Header.styles';
import logo from '../../logo.png';

const Header = () => {
    const [page, setPage] = React.useState(0);
    React.useEffect(() => {
        const { pathname } = window.location;
        const pageUrl =
            pathname.split('/').length > 1 ? pathname.split('/')[1] : '/';
        switch (pageUrl) {
            case 'news':
                setPage(1);
                break;
            case 'about':
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
                color="inherit"
                position="fixed"
                style={{ padding: '0 20px', marginBottom: '20px' }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{
                            display: { xs: 'inline-flex', md: 'none' },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link
                        component={RouterLink}
                        to="/"
                        color="inherit"
                        underline="none"
                        onClick={() => {
                            setPage(0);
                        }}
                        sx={{
                            display: { xs: 'none', md: 'block' },
                        }}
                    >
                        <img
                            src={logo}
                            alt="Logo Nature of Kamchatka"
                            height="80px"
                        />
                    </Link>
                    <Tabs
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'block' },
                        }}
                        value={page}
                    >
                        <Tab
                            label="Таймлайн"
                            component={RouterLink}
                            to="/"
                            onClick={() => {
                                setPage(0);
                            }}
                        />
                        <Tab
                            label="Новости"
                            component={RouterLink}
                            to="/news"
                            onClick={() => {
                                setPage(1);
                            }}
                        />
                        <Tab
                            label="О проекте"
                            component={RouterLink}
                            to="/about"
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
            <Toolbar />
        </Box>
    );
};

export default Header;
