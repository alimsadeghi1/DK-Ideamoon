import React, {useEffect, useState} from "react";
import stone3 from "../../assets/images/Frame (1).png";
import stone1 from "../../assets/images/Frame.png";
import {useNavigate} from "react-router-dom";


const Submitted = () => {

    // const [searchParams] = useSearchParams();
    // const code = searchParams.get("id");
    const navigate = useNavigate()
    const [render, setRender] = useState(true);
    useEffect(() => {
        // if (code > 4)
        //     window.location.href = '/'

        setRender(true);
        setTimeout(() => {
            setRender(false);
        }, 900);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={'position-relative overflow-hidden story-bg-1'}>
            <div className={
                render
                    ? "container fadeIn position-relative"
                    : "container position-relative"
            }
                 style={{animationDelay: ".3s"}}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <div className="story-box mb-lg-5 py-lg-4 px-3"
                             style={{marginTop: "20vh"}}>
                            <div className="d-none d-lg-block story-stone-1">
                                <img src={stone3} alt="" />
                            </div>
                            <div className="d-none d-lg-block story-stone-2">
                                <img src={stone1} alt="" />
                            </div>
                            <div>
                                <div className={'w-100 text-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.1833 6.54808C22.0092 5.65064 25.9908 5.65064 29.8168 6.54808C35.3419 7.84409 39.6559 12.1581 40.9519 17.6833C41.8494 21.5092 41.8494 25.4908 40.9519 29.3167C39.6559 34.8419 35.3419 39.1559 29.8167 40.4519C25.9908 41.3494 22.0092 41.3493 18.1833 40.4519C12.6582 39.1559 8.3441 34.8419 7.04808 29.3168C6.15064 25.4908 6.15064 21.5092 7.04808 17.6832C8.3441 12.1581 12.6581 7.84409 18.1833 6.54808ZM29.9776 20.5181C30.4015 20.0639 30.377 19.3521 29.9228 18.9283C29.4687 18.5044 28.7569 18.529 28.333 18.9831L22.566 25.162L19.6399 22.2359C19.2007 21.7966 18.4885 21.7966 18.0492 22.2359C17.6099 22.6752 17.6099 23.3874 18.0492 23.8266L21.7986 27.576C22.0143 27.7917 22.3083 27.9105 22.6133 27.9053C22.9183 27.9 23.2081 27.7711 23.4162 27.5481L29.9776 20.5181Z" fill="#24DD81"/>
                                    </svg>
                                </div>
                                <div className={'text-center mx-auto'} style={{
                                    fontFamily: 'Bakh',
                                    fontSize: '30px',
                                    fontStyle: 'normal',
                                    fontWeight: 1000,
                                    maxWidth: '200px'
                                }} dir={'rtl'}>
                                    ایده شما با موفقیت
                                    ثبت شد!
                                </div>
                            </div>
                            <div onClick={() => navigate('/')} style={{borderRadius: '16px', backgroundColor: '#820BFF', cursor: 'pointer'}} className={'mt-4 w-100 py-3 d-flex justify-content-center align-items-center'}>
                                <div className={'mx-2 pt-1'}>
                                   بازگشت به خانه
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 4.77519V19.2239C12.0001 19.7636 11.7552 20.2742 11.3343 20.6119C10.9133 20.9496 10.3618 21.0779 9.83501 20.9607L5.38916 19.9722C4.5755 19.7916 3.99658 19.07 3.99658 18.2365V5.7636C3.99658 4.92981 4.57607 4.20806 5.39016 4.02788L9.83601 3.03947C10.3625 2.92241 10.9137 3.05066 11.3344 3.38814C11.7552 3.72562 11.9999 4.23584 11.9999 4.77519Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.99874 13.0206V11.0198" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20.0035 7.99852V5.95567C20.0037 5.42497 19.7929 4.91596 19.4177 4.5407C19.0424 4.16544 18.5334 3.95469 18.0027 3.95483H15.0015" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20.0035 16.0017V18.0025C20.0037 18.5332 19.7929 19.0422 19.4177 19.4175C19.0424 19.7928 18.5334 20.0035 18.0027 20.0034H15.0015" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.0015 12.0002H20.0035" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M18.0024 14.0009L20.0033 12.0001L18.0024 9.99927" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Submitted;