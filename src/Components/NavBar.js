import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

const navItems = ["Home", "About the Webtoon", "Main Characters"];

export default function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="inherit"
        style={{ display: "flex", color: "#fff", background: "#FD7272" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            //color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            // style={{ fontFamily: "Lora" }}
          >
            Lore Olympus Webtoon
          </Typography>

          <div
            style={{ width: "60%", display: "flex", justifyContent: "center" }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                style={{
                  color: "inherit",
                  fontWeight: 500,
                  fontSize: 18,
                  textTransform: "capitalize",
                //   fontFamily: "Lora",
                  //   display:'flex',
                  //   justifyContent:"space-between"
                }}
              >
                {item}
              </Button>
            ))}
           
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

