import * as React from 'react';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function CallToActionBtn(){
    return (
      <div id="readmore">
        <Button
          variant="contained"
          style={{
            width: 200,
            height: 50,
            fontSize: 20,
            letterSpacing: 1,
            textTransform: "capitalize",
            background: "#FD7272",
          }}
        >
          <Link
            href="https://animemangatoon.com/lore-olympus-webtoon-overview/"
            color="inherit"
            underline="hover"
          >
            Read more
          </Link>
        </Button>
      </div>
    );
}