import React from 'react'
import Container from '../src/common/Container'
import SectionHeading from '../src/common/SectionHeading'
import Card from '../src/common/Card' 
import Cardimg1 from '../src/assets/cardimg1.png'  
import Cardimg2 from '../src/assets/cardimg2.png'  
import Cardimg3 from '../src/assets/cardimg3.png'  
import Cardimg4 from '../src/assets/cardimg4.png'  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountDown from '../src/CountDown'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute -top-20 right-8 bg-gray-300 rounded-full p-4"
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute -top-20 right-23 bg-gray-300 rounded-full p-4"
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}



const Flash = () => {
   const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint:992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
<>
<Container>
<div className='mt-37.5 mb-10 flex gap-22'> 
    <SectionHeading 
    title="Today's" 
    heading="Flash Sales" />
    <CountDown  className='self-end'/>
    </div>
</Container>


<Container>
 <div className="slider-container">

<Slider {...settings}>
  <div>
    <Card
      photosrc={Cardimg1}
      title="HAVIT HV-G92 Gamepad"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
  </div>
  <div>
    <Card
      photosrc={Cardimg2}
      title="HAVIT HV-G92 Gamepad"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
  </div>
  <div>
    <Card
      photosrc={Cardimg3}
      title="HAVIT HV-G92 Gamepad"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
  </div>
    <div>
    <Card
      photosrc={Cardimg4}
      title="HAVIT HV-G92 Gamepad"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
  </div>
  <div>
    <Card
      photosrc={Cardimg1}
      title="HAVIT HV-G92 Gamepad"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
  </div>
  <div>
    <Card
      photosrc={Cardimg2}
      title="HAVIT HV-G92 Gamepad"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
  </div>
  <div>
    <Card
      photosrc={Cardimg3}
      title="HAVIT HV-G92 Gamepad"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
  </div>
    <div>
    <Card
      photosrc={Cardimg4}
      title="HAVIT HV-G92 Gamepad"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
  </div>


</Slider>
</div>
<div className='pl-112.5 mb-15'>
<button className='bg-primary py-4 px-12 cursor-pointer text-white mt-10'>View All Products</button>
</div>
  <div className="w-full mx-auto h-px bg-gray-300 mb-20"></div>
</Container>

</>
  )
}

export default Flash
