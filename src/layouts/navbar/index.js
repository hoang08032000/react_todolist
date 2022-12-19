import AdbIcon from '@mui/icons-material/Adb';
import ListAltIcon from "@mui/icons-material/ListAlt";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Link, Menu, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const pages = ['Home', 'About']

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <Box >
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters >

                        <ListAltIcon
                            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            TODO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup='true'
                                color="inherit"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map(page => (
                                    <Link href={`/${page.toLowerCase()}`} underline="none" key={page}>
                                        <Button
                                            sx={{ my: 2, color: 'black', display: 'block' }}
                                            onClick={handleCloseNavMenu}
                                        >
                                            {page}
                                        </Button>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>

                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Link href={`/${page.toLowerCase()}`} underline="none" key={page}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                </Link >
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container maxWidth='xl'>
                <Outlet />
            </Container>
        </Box>
    );
};

export default Navbar;
