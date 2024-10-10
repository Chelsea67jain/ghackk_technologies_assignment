import * as React from "react";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import MainCharacters from "../Components/MainCharacters";
import CallToActionBtn from "../Components/CallToActionBtn";
import ManhwasCarousal from "../Components/ManhwasCarousal";
var bannerSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplayspeed: 2000,
};

var images = [
  { id: 1, image: "/2.jpg", name: "Tower of God" },
  { id: 2, image: "/1.jpg", name: "Leviathan" },
  { id: 3, image: "/3.jpg", name: "Leveling Up with the Gods" },
  { id: 4, image: "/4.jpg", name: "Existence" },
  { id: 5, image: "/5.jpg", name: "The Breaker" },
  {
    id: 6,
    image: "/6.jpg",
    name: "The First Hunter – Another Great Supernatural Manhwa",
  },
  { id: 7, image: "/7.jpg", name: "Noblesse" },
  { id: 8, image: "/8.jpg", name: "Ultimate Outcast" },
  { id: 9, image: "/9.jpg", name: "Unholy Blood" },
  { id: 10, image: "/10(2).jpg", name: "The Cube that Changes Everything" },
];

export default function HomePage(){

    return (
      <div id="home">
        <NavBar />
        <HeroSection />
        <MainCharacters />
        <div style={{display:'flex',justifyContent:'center',margin:20,padding:5}}>
        <CallToActionBtn />
        </div>
       <div>
       <ManhwasCarousal images={images} bannerSettings={bannerSettings} />
</div>
      </div>
    );
}
