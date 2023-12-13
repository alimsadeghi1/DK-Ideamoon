import React, { useEffect } from 'react';

const StoryDetails = ({story, index}) => {

     useEffect(() => {
          // console.log(index);
     }, [index])

     return (
          <div className='text-center '>
               <div className='text-center d-lg-none story-detail-title' style={{fontFamily: 'Bahman'}}>
                    {story[index]?.title}
               </div>
               <p className='mt-3 mx-2' dir='rtl' style={{fontWeight: '500', lineHeight: '30px', whiteSpace: 'pre-wrap', textAlign: 'justify'}}>
               {story[index]?.desc}
               </p>
          </div>
     );
}

export default StoryDetails;