import React from 'react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../common/Card';
import Sell1 from '../assets/Sell.png1'
import Sell2 from '../assets/Sell.png2'
import Sell3 from '../assets/Sell.png3'
import Sell4 from '../assets/Sell.png4'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
     
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
     
      onClick={onClick}
    />
  );
}
const SellingProducts = () => {
    const settings = {
    dots: true,
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
    <div className='mt-37.5 mb-10 flex gap-22 justify-between'> 
    <SectionHeading 
    title="Today's" 
    heading="Browse By Category" />
       <div className='self-end '><button className='bg-primary py-4 px-12 text-white items-center '>View All</button></div>
    </div>
</Container>

<Container >
 <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Card
      photosrc={Sell1}
      title="The north coat"
      discount="260"
      price="360"
      review="65"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Sell2}
      title="Gucci duffle bag"
      discount="960"
      price="1160"
      review="65"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Sell3}
      title="RGB liquid CPU Cooler"
      discount="160"
      price="170"
      review="65"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Sell4}
      title="Small BookSelf"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>

      </Slider>
    </div>

</Container>

</>
  )
}

export default SellingProducts
