import Link from 'next/link'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Slide from '@mui/material/Slide'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CssBaseline from '@mui/material/CssBaseline'
import { links, profileLinks } from 'config/navbar.config'
import useScrollTrigger from '@mui/material/useScrollTrigger'

function HideOnScroll ({ children, window }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function NavBar (props) {
  const dispatch = useDispatch()
  const { isAuthenticated, deauthenticate } = props
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = ({ currentTarget }) => {
    setAnchorElNav(currentTarget)
  }
  const handleOpenUserMenu = ({ currentTarget }) => {
    setAnchorElUser(currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
                LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {links.map(({ name, path }) => (
                  <MenuItem key={name} onClick={handleCloseNavMenu}>
                    <Link href={path}>
                      <a>{name}</a>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {links.map(({ name, path }) => (
                <Button
                  key={name}
                  component='div'
                  sx={{ mr: 2, color: 'inherit' }}
                >
                  <Link href={path}>
                    <a>{name}</a>
                  </Link>
                </Button>
              ))}
            </Box>
            {isAuthenticated && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{ flexGrow: 1, color: 'white', display: { xs: 'flex', md: 'flex' } }}
                    >
                      Profile
                    </Typography>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {profileLinks.map(({ name, path }) => (
                    <MenuItem key={name} onClick={handleCloseUserMenu}>
                      <Link href={path}>
                        <a>{name}</a>
                      </Link>
                    </MenuItem>
                  ))}

                  {isAuthenticated && (
                    <MenuItem onClick={() => dispatch(deauthenticate())}>
                      <Typography
                        variant="p"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
                      >
                        Logout
                      </Typography>
                    </MenuItem>
                  )}
                </Menu>
              </Box>
            )}

            {!isAuthenticated && (
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  component='div'
                  sx={{ mr: 2, color: 'inherit' }}
                >
                  <Link href='/auth/signIn'>
                    <a>SignIn</a>
                  </Link>
                </Button>
                <Button
                  component='div'
                  sx={{ mr: 2, color: 'inherit' }}
                >
                  <Link href='/auth/signUp'>
                    <a>SignUp</a>
                  </Link>
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  )
}
