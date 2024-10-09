import * as React from "react";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import MainCharacters from "../Components/MainCharacters";

export default function HomePage(){
    return (
      <div>
        <NavBar />
        <HeroSection />
        <MainCharacters />
      </div>
    );
}
