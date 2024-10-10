import * as React from "react";
import Typewriter from 'typewriter-effect';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HeroSection() {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <img
        src="/lore olympus.jpg"
        style={{ width: "100%", position: "relative" }}
      />
     {matches?<></>: <div
        style={{
          width: 320,
          color: "#fff",
          fontSize: 50,
          position: "absolute",
          top: "60%",
          left: "60%",
          zIndex: 1,
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            strings: ["Lore Olympus"],
          }}
        />

        {/* <span style={{ fontWeight: "bolder" }}>Olympus</span> <br /> */}
        <div style={{ textTransform: "uppercase", fontSize: 20 }}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: [" Love can find its way to hell"],
            }}
          />
        </div>
      </div>
}
    </div>
  );
}



