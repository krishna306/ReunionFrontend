import React from "react";
import { AppBar, Toolbar ,Typography} from "@material-ui/core";
import {HomeOutlined} from '@material-ui/icons';
function Navigation() {
  return (
    <div>
      <AppBar position="static" >
        <Toolbar variant="dense">
          <HomeOutlined size="large" sx={{ mr: 2 }}/>
          <Typography variant = "h6">Estatery</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
