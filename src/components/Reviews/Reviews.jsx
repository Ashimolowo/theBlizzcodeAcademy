import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css'
const Reviews = () => {
  const reviews = [
    { text: "The most impactful part of this learning experience was the supportive community...", name: "Kofi Mensah", course: "Data Analysis", bg: 'linear-gradient(175.18deg, #FCCFD3 -8.91%, #EB485E 116.1%)' },
    { text: "After taking the UI/UX Design course, I landed my dream job as a product designer...", name: "Ayo Adebayo", course: "UI/UX Design", bg: 'linear-gradient(156.3deg, #C1DFF6 -9.44%, #3498DB 106%)' },
    { text: "I came to Blizzcode with zero coding experience, and now I can confidently build websites...", name: "Amaka Okafor", course: "Frontend Development", bg: 'linear-gradient(174.15deg, #EEEC9A -13.32%, #CBB327 108.85%)' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className='carousel-main'>
      <div className='carousel-sub-main' >
        <button className = "carousel-button" >
          <Link className='carousel-link' to="./signup">
            Begin your Learning Journey <i className="bx bx-right-arrow-alt button-icon"></i>
          </Link>
        </button>
      </div>

      <div className='carousel-header' >
        <p>See what Learners are saying</p>
        <p>Don't just take our word for it! Here's what our students are achieving.</p>
      </div>

      <div className='carousel-left' >
        <i className="bx bx-left-arrow-alt button-icon-left"  onClick={goToPrev}></i>

        <div className='carousel-inner' style={{
          background: reviews[currentIndex].bg,
        }}>
          <p>{reviews[currentIndex].text}</p>
          <div className='carousel-inner-div'>
            <h3 className='h3-house' >-- {reviews[currentIndex].name}</h3>
            <h3>{reviews[currentIndex].course}</h3>
          </div>
        </div>

        <i className="bx bx-right-arrow-alt button-icon"  onClick={goToNext}></i>
      </div>

      <div className= "btn-btn-btn" >
        <Link className='enroll-link' to="./signup">
          Enroll now <i  className="bx bx-right-arrow-alt enroll-button-icon"></i>
        </Link>
      </div>
    </div>
  );
};

export default Reviews;


