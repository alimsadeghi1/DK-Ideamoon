import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {SET_FNAME, SET_PERSONAL} from "../../redux/slices/sendIdea";


function IdeaInput({}) {

    const [focus1, setFocus1] = useState(false)
    const [focus2, setFocus2] = useState(false)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const dispatch = useDispatch();

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 col-lg-6 mt-4'}>

                    <div className={focus1 ? 'idea-btn-label-focus' : 'idea-btn-label'}>
                        <div className={'pt-1'} style={{fontSize: '14px'}}>
                            نام و نام خانوادگی
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M20 20.5V19.75C20 17.4028 18.0972 15.5 15.75 15.5H8.25C5.90279 15.5 4 17.4028 4 19.75V20.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="12" cy="7.5" r="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <input onChange={(e) => dispatch(SET_FNAME(e.target.value))} ref={ref1} type="text" onFocus={() => setFocus1(true)} onBlur={() => setFocus1(false)} className={'idea-btn-input text-start w-100'}/>
                </div>
                <div className={'col-12 col-lg-6 mt-4'}>

                    <div className={focus2 ? 'idea-btn-label-focus' : 'idea-btn-label'}>
                        <div className={'pt-1'} style={{fontSize: '14px'}}>
                            کد پرسنلی
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.91422 10.1788C10.6953 10.9599 10.6953 12.2262 9.91422 13.0072C9.13317 13.7883 7.86684 13.7883 7.08579 13.0072C6.30474 12.2262 6.30474 10.9599 7.08579 10.1788C7.86684 9.39776 9.13317 9.39776 9.91422 10.1788" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 11H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18 14.5H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 18.041C11.83 17.614 11.567 17.23 11.229 16.917V16.917C10.658 16.388 9.908 16.093 9.129 16.093H7.871C7.092 16.093 6.342 16.387 5.771 16.917V16.917C5.433 17.229 5.17 17.613 5 18.041" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 7H11C10.448 7 10 6.552 10 6V3C10 2.448 10.448 2 11 2H13C13.552 2 14 2.448 14 3V6C14 6.552 13.552 7 13 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 5H4.041C2.914 5 2 5.914 2 7.041V19C2 20.105 2.895 21 4 21H20C21.105 21 22 20.105 22 19V7C22 5.895 21.105 5 20 5H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <input onChange={(e) => dispatch(SET_PERSONAL(e.target.value))} ref={ref2} placeholder={'------'} onFocus={() => setFocus2(true)} onBlur={() => setFocus2(false)} type="text" className={'idea-btn-input w-100'}/>
                </div>
            </div>
        </div>
    );
}

export default IdeaInput;