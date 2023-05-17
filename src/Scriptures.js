import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import fetch from 'cross-fetch';

function BibleVerseSlider() {
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    async function fetchVerses() {
      const response = await fetch(`https://api.bible/v1/bibles/055923e84a3802d4-01/verses?start=John.1.1&end=John.3.16`);
      const data = await response.json();
      setVerses(data.data);
    }
    fetchVerses();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {verses.map((verse, index) => (
        <div key={index}>
          <p>{verse.reference}</p>
          <p>{verse.content}</p>
        </div>
      ))}
    </Slider>
  );
}

export default BibleVerseSlider;
