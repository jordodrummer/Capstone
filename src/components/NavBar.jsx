// import { EmojiNature } from '@mui/icons-material';
import { Typography, AppBar, Toolbar } from '@mui/material';



function NavBar() {
  // JR: needs auth context here
  // in order to see login options
    return (
      <AppBar position="relative">
      <Toolbar>
        {/* <EmojiNature /> */}
        <Typography variant="h6">
          Cactus for sale!
        </Typography>
        
      </Toolbar>
    </AppBar>
    )
  }

  export default NavBar