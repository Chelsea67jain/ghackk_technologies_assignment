import * as React from 'react';

export default function MainCharacters(){
    return (
      <div
        style={{
          displat: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
          margin: 10,
          padding: 5,
        }}
      >
        <h1 style={{ color: "#0652DD" }}>
          <u> Main Characters Sections</u>
        </h1>

        <img src="./Hades.jpg" width="20%" style={{ marginRight: 10 }} />

        <img src="./Persephone.jpg" width="20%" style={{ marginRight: 10 }} />

        <img src="./Zeus.jpg" width="20%" style={{ marginRight: 10 }} />

        <img src="./Poseidon.jpg" width="20%" />
      </div>
    );
}