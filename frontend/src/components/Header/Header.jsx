import React from 'react';
import { AppBar, Box, Toolbar, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Search, SearchIconWrapper, StyledInputBase } from './Header.styles';
import logo from '../../Logo.png';

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
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Логотип"
                            height="64px"
                            style={{ marginRight: '20px' }}
                        />
                    </Link>
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
