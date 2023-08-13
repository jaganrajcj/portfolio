import React from 'react'
// import Slider from 'react-slick';
import Project from './Project';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import fxEdge from "../../assets/fxEdge.png"
import tradingViewMC from "../../assets/tradingViewMC.png"

let data = [
  {
    img: fxEdge,
    disc: "A full-stack MERN application for currency market research/analysis",
    demo: "https://silly-cascaron-6ff2ce.netlify.app/"
  },
  {
    img: tradingViewMC,
    disc: "React application that offers TradingView multi chart layout",
    demo: "https://tradingviewmc.onrender.com/"
  },
  // {
  //   img: "https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png",
  //   disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
  // },
  // {
  //   img: "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
  //   disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
  // },
  // {
  //   img: "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
  //   disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
  // }
];

// var settings = {
//   className: "center",
//   centerMode: true,
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   initialSlide: 0,
//   arrows: false,
//   responsive: [
//     {
//       breakpoint: 990,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//         centerMode: false
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//         centerMode: false
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: false
//       }
//     }
//   ]
// };
const SliderComp = () => {
  // const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      {/* <Slider ref={arrowRef} {...settings}> */}
      {sliderProject}
      {/* </Slider> */}
      {/* <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons> */}
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 840px) {
     flex-direction: column;
  }
`

  // const Buttons = styled.div`
  //   button{
  //     width: 2rem;
  //     height: 2rem;
  //     background-color: rgba(255, 255, 255, 0.100);
  //     cursor: pointer;
  //     color: #01be96;
  //     border: none;
  //     position: absolute;
  //     top: 45%;
  //     right: -1rem;
  //   }

  //   .back{
  //     left: -1rem;
  //   }
  // `