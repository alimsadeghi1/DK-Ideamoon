import React, {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {SET_DESC} from "../../redux/slices/sendIdea";


const Solution = () => {

    const [focus1, setFocus1] = useState(false)
    const ref1 = useRef(null)
    const dispatch = useDispatch();

    return (
        <div className={'container mt-4'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={focus1 ? 'idea-btn-label-focus' : 'idea-btn-label'}>
                        <div className={'pt-1'} style={{fontSize: '14px'}}>
                            راه حل
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M20.2176 13.7147C21.6224 11.0075 21.1114 7.70224 18.9548 5.54558C16.7981 3.38893 13.4928 2.87799 10.7856 4.28279" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.99923 17.3689C9.97161 17.3689 9.94921 17.3913 9.94921 17.4189C9.94921 17.4465 9.97161 17.4689 9.99923 17.4689C10.0269 17.4689 10.0493 17.4465 10.0493 17.4189C10.0493 17.3913 10.0269 17.3689 9.99923 17.3689" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.19873 12.7005C8.38259 11.9057 9.10638 11.3545 9.92145 11.3886C10.8335 11.3381 11.6154 12.0331 11.6722 12.9448C11.6722 14.1119 9.99925 14.501 9.99925 15.2791" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <rect x="2.99658" y="7.49805" width="14.0058" height="14.0058" rx="6.99999" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                    </div>
                    <textarea onChange={(e) => dispatch(SET_DESC(e.target.value))} onFocus={() => setFocus1(true)} onBlur={() => setFocus1(false)} className={'idea-textarea w-100'}/>
                </div>
            </div>
        </div>
    )
}
export default Solution;