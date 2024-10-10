import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function MenuComponent() {
      const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down("md"));

       const [anchorEl, setAnchorEl] = useState(null);
       const [open,setOpen]=useState(false);

       const handleClick = (event) => {
         setAnchorEl(event.currentTarget);
         setOpen(true);
       };
       const handleClose = () => {
         setAnchorEl(null);
         setOpen(false);
       };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        //color="inherit"
        aria-label="menu"
        sx={{ mr: 2, color: "#fff" }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      {matches?<Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href="#home" underline="hover" color="inherit">
            Home
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link href="#readmore" underline="hover" color="inherit">
            Read More
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link href="#maincharacters" underline="hover" color="inherit">
            Main Characters
          </Link>
        </MenuItem>
      </Menu>
      :<></>}
    </div>
  );
}
