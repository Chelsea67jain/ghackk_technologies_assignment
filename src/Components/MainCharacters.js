import * as React from 'react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

var characterDetails = [
//  {'id':1 , image:`Hades.jpg`}
];
export default function MainCharacters(){
     const theme = useTheme();
     const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [isFlipped,setIsFlipped]=useState(false);
//  const details=Object.values(characterDetails);
 const [isFlipped2,setIsFlipped2]=useState(false);
 const [isFlipped3, setIsFlipped3] = useState(false);
 const [isFlipped4, setIsFlipped4] = useState(false);
 

  const flipCard=()=>{
   
     setIsFlipped(!isFlipped);
  }

   const flipCard2 = () => {
    
     setIsFlipped2(!isFlipped2);
   };
    const flipCard3= () => {
     
      setIsFlipped3(!isFlipped3);
    };
     const flipCard4 = () => {
      
       setIsFlipped4(!isFlipped4);
     };

    return (
      <div
        id="maincharacters"
        style={{
          displat: "flex",
          flexDirection: "column",
          textAlign: "center",
          // width: "100%",
          // margin: 10,
          padding: 5,
          fontFamily: "Poppins",
        }}
      >
        <h1 style={{ color: "#0652DD" }}>
          <u> Main Characters Sections</u>
        </h1>
        <div
          style={{ display: "flex", flexDirection: matches ? "column" : "row" }}
        >
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <img
              title="Hades"
              src="/Hades.jpg"
              style={{
                marginRight: 10,
                width: "90%",
                height: 300,
                marginBottom: matches ? 10 : 0,
              }}
              onClick={() => flipCard()}
            />
            <div
              className="card-back"
              style={{
                width: matches ? "90%" : 300,
                height: 280,
                marginBottom: matches ? 10 : 0,
              }}
              onClick={flipCard}
            >
              Character Name: Hades <br />
              Role: CEO of Underworld Corp Descriptions:
            </div>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
            <img
              title="Persephone"
              src="/Persephone.jpg"
              style={{
                marginRight: 10,
                width: "90%",
                height: 300,
                marginBottom: matches ? 10 : 0,
              }}
              onClick={() => flipCard2()}
            />
            <div
              className="card-back"
              style={{
                width: matches ? "90%" : 300,
                height: 280,
                marginBottom: matches ? 10 : 0,
              }}
              onClick={flipCard2}
            >
              Character Name: Persephone
              <br />
              Role: She is the female protagonist of Lore Olympus.
            </div>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
            <img
              title="Zeus"
              src="/Zeus.jpg"
              style={{
                marginRight: 10,
                width: "90%",
                height: 300,
                marginBottom: matches ? 10 : 0,
              }}
              onClick={() => flipCard3()}
            />
            <div
              className="card-back"
              style={{
                width: matches ? "90%" : 300,
                height: 280,
                marginBottom: matches ? 10 : 0,
              }}
              onClick={flipCard3}
            >
              Character Name: Zeus
              <br />
              Role: Zeus is a god with purple skin
            </div>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
            <img
              title="Poseidon"
              src="/Poseidon.jpg"
              style={{
                marginRight: 10,
                width: "90%",
                height: 300,
                marginBottom: matches ? 10 : 0,
              }}
              onClick={() => flipCard4()}
            />
            <div
              className="card-back"
              style={{
                width: matches ? "90%" : 300,
                height: 280,
                marginBottom: matches ? 10 : 0,
              }}
              onClick={flipCard4}
            >
              Character Name: Poseidon
              <br />
              Role: Hades's younger brother with childish and annoying nature
            </div>
          </ReactCardFlip>
        </div>
      </div>
    );
}