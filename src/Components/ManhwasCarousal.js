import {createRef} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ManhwasCarousl(props){
    var mySlider = createRef();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

   //console.log(props.images)
    const setImageInSlider = () => {
      return props.images.map((item) => {
        //console.log(item);
        return (
          <div>
            <img src={`${item.image}`} title={`${item.name}`} width="100%" />
          </div>
        );
      });
    };

    const handleBack = () => {
      mySlider.current.slickPrev();
    };

    const handleForward = () => {
      mySlider.current.slickNext();
    };

    return (
      <div>
        <h1
          style={{
            color: "#0652DD",
            textAlign: "center",
            fontFamily: "Poppins",
          }}
        >
          <u> Best Supernatural Manhwas</u>
        </h1>
        <div style={{ width: "100%", position: "relative" }}>
          {matches ? (
            <></>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                background: "#000",
                width: 40,
                height: 40,
                position: "absolute",
                left: 10,
                top: "50%",
                // margin:10,
                zIndex: 1,
                borderRadius: 20,
              }}
            >
              <ArrowBackIosNewIcon
                style={{ color: "#fff" }}
                onClick={() => handleBack()}
              />
            </div>
          )}

          <Slider {...props.bannerSettings} ref={mySlider}>
            {setImageInSlider()}
          </Slider>

          {matches ? (
            <></>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                background: "#000",
                width: 40,
                height: 40,
                position: "absolute",
                left: "96%",
                top: "50%",
                zIndex: 1,
                borderRadius: 20,
              }}
            >
              <ArrowForwardIosIcon
                style={{ color: "#fff" }}
                onClick={() => handleForward()}
              />
            </div>
          )}
        </div>
      </div>
    );
}