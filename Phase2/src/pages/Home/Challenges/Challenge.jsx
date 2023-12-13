import React, {useEffect, useRef} from "react";
import ChallengeBoxes from "./ChallengeBoxes";
import {SET_REF} from "../../../redux/slices/home";
import {useDispatch} from "react-redux";


const Challenge = () => {

    const storiesRef = useRef(null);
     const dispatcher = useDispatch()

     useEffect(() => {
          if (storiesRef)
          dispatcher(SET_REF(storiesRef.current))
     }, [storiesRef])

    return (
        <div id='challenges' className={'my-5'}>
            <div ref={storiesRef} className='text-center home-titles'>
                چالش‌ها
            </div>
            <>
                <ChallengeBoxes/>
            </>
        </div>
    )
}

export default Challenge;