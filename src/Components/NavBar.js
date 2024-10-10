import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
import MenuComponent from "./MenuComponent";

const navItems = ["Home", "About the Webtoon", "Main Characters"];

export default function NavBar() {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="inherit"
        style={{ display: "flex", color: "#fff", background: "#FD7272" }}
      >
        <Toolbar>

          <MenuComponent />

          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ fontFamily: "Poppins" }}
          >
            Lore Olympus Webtoon
          </Typography>

          {matches ? (
            <></>
          ) : (
            <div
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* {navItems.map((item) => (
                <Button
                  key={item}
                  style={{
                    color: "inherit",
                    fontWeight: 500,
                    fontSize: 18,
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    //   display:'flex',
                    //   justifyContent:"space-between"
                  }}
                >
                  {item}
                </Button> 

              ))} */}
              <Link
                href="#home"
                component="button"
              
                underline="hover"
               
                style={{
                  color: "inherit",
                  fontWeight: 500,
                  fontSize: 18,
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  marginRight: 10,
                }}
              >
                Home
              </Link>

              <Link
                href="#readmore"
                underline="hover"
               
                style={{
                  color: "inherit",
                  fontWeight: 500,
                  fontSize: 18,
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  marginRight: 10,
                }}
              >
                Read More
              </Link>

              <Link
                href="#maincharacters"
                underline="hover"
                style={{
                  color: "inherit",
                  fontWeight: 500,
                  fontSize: 18,
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                }}
              >
                Main Characters
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

