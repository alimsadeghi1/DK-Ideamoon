import React from "react";
import image1 from '../../../assets/images/Rock 1 -Gray.png';
import image2 from '../../../assets/images/Rock 2 - Gray.png';
import image3 from '../../../assets/images/Rock 3 -Gray.png';
import image4 from '../../../assets/images/Rock 4 - Gray.png';



const BeginningStones = () => {

  return (
    <>
      <div className="d-lg-block d-none beginning-stones-1 stone-1-animation">
          <img src={image1} alt="Stone Image" />          
      </div>
      <div className="beginning-stones-2 stone-2-animation">
          <img src={image2} alt="Stone Image" />
      </div>
      <div className="d-lg-block d-none beginning-stones-3 stone-3-animation">
          <img src={image3} alt="Stone Image" />
      </div>
      <div className="d-lg-block d-none beginning-stones-4 stone-4-animation">
          <img src={image4} alt="Stone Image" />
      </div>
    </>
  );
};

export default BeginningStones;
