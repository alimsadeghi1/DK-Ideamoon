import React, { useEffect, useRef } from 'react';
import StoriesBoxes from './StoriesBoxes';
import {useDispatch} from 'react-redux';
import { SET_REF } from '../../../redux/slices/home';


const Stories = () => {




     return (
          <div id='stories' className='my-5'>
               <div  className='text-center home-titles'>
               داستان‌ها
               </div>
               <div>
                    <StoriesBoxes/>
               </div>
          </div>
     );
}

export default Stories;