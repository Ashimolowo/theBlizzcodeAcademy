import React, { useState } from 'react';
import './connect.css'


const faqs = [
    {
      question: 'What is Blizzcode Academy?',
      answer: 'Blizzcode Academy is a free online community that empowers you with the skills and guidance to thrive in the tech industry.'
    },
    {
      question: 'Is Blizzcode Academy free?',
      answer: 'No, Blizzcode Academy is NOT free to use. But you can access our courses, learning materials, and community features at a token.'
    },
    {
      question: 'Do I need any prior experience to enroll in your courses?',
      answer: 'We offer courses for all experience levels, from beginner to advanced. Browse our course catalog to find the right fit for your current skills and goals.'
    },
    {
      question: 'What are the benefits attached to completing these courses?',
      answer: 'After completing a course, you will gain valuable tech skills, and also receive a certificate of completion to showcase your knowledge.'
    }
  ];

const Connect = () => {

    const [selected, setSelected] = useState(null);
  
    const toggleDropdown = (index) => {
      setSelected(selected === index ? null : index); 
    };
    return ( 
        <div className="connect">
            <div className="connect-1">
        <div className='divs'>
        <div class="circle sub-connect-1-0-4"></div>
            {/* <div class="circle sub-connect-1-0-3"></div>
            <div class="circle sub-connect-1-0-4"></div>*/}
            <div class="circle sub-connect-1-0-2"></div> 
            <div class="circle sub-connect-1-0-1"></div>
            <div className="circle sub-connect-1-0"></div>
            <div className="circle sub-connect-1-1"></div>
            <div className="circle sub-connect-1-2"></div>
            <div className="circle sub-connect-1-3"></div>
            <div className="circle sub-connect-1-4"></div>
            <div className="circle sub-connect-1-5"></div>
            <div className="circle sub-connect-1-6"></div>
            <div className="circle sub-connect-1-7"></div>
            <div className="circle sub-connect-1-8"></div>
            <div className="circle sub-connect-1-9"></div>
            <div className="circle sub-connect-1-10"></div> 
           <div className="circle sub-connect-1-11"></div>
            <div className="circle sub-connect-1-12"></div>
             <div className="circle sub-connect-1-13"></div> 
        </div>
                <div className="connect-collaborate">
                    <div className="connect-collaborate-1">
                        <h1>Connect, Collaborate and Thrive</h1>
                        <h5>Network, learn from mentors, and stay</h5>
                        <h5>motivated with our thriving community</h5>
                    </div>
                        
                        <button> Join now <i className="bx bx-right-arrow-alt button-icon"></i>
                        </button>
                 
            </div>

            </div>
            <div className="connect-2">
                <div className="connect-2-1">
                   <div className="connect-2-1-1">
                   <h3>Blizzcode Academy FAQs</h3>
                    <p>Here are some frequently asked questions  (FAQs) <br />
                    and answers for Blizzcode Academy
                    </p>
                   </div>
                   <div className="connect-2-1-2 connect-2-1-2-1">
                        <button>Have other Questions?</button>
                   </div>
                </div>
                
                <div className="connect-2-2">
                    <div className="div-buttons">
                        <button>General</button>  <button>Registration/Learning</button>   <button>Courses</button>
                        <button>Community/Support</button>
                    </div>
          <div className="faqs">
                    <div className="faqs">
                            {faqs.map((faq, index) => (
                                <div className="faq-item" key={index}>
                                <h4 onClick={() => toggleDropdown(index)}>
                                    {faq.question}
                                    <i
                                    className={`bx ${selected === index ? 'bx-chevron-up' : 'bx-chevron-down'} ddown`}
                                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                                    />
                                </h4>
                                {selected === index && (
                                    <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                    </div>
                                )}
                                </div>
                            ))}
          </div>


                    </div>
                </div>
                 <div className="connect-2-1-2 connect-2-1-2-2">
                        <button>Have other Questions?</button>
                   </div>
            </div>
        </div>
     );
}
 
export default Connect;