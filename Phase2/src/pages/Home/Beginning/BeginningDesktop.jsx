import React, { useEffect, useState } from 'react';
import image from '../../../assets/images/rocket-site.png';
import toPersianNum from '../../../helpers/toPersianNum';
import image2 from '../../../assets/images/Frame 327.png';
import { useSelector } from 'react-redux';
import BeginningStones from './BeginningStones';
import { dayCounter } from '../../../helpers/dayCounter';
import ChallengesVideoHome from '../Challenges/ChallengesVideoHome';

const BeginningDesktop = () => {
    const { ref } = useSelector((state) => state.homeSlider);

    const onScroll = () => {
        if (ref) ref?.scrollIntoView({ behavior: 'smooth' });
    };

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='position-relative d-none d-lg-block'>
            <BeginningStones />
            <div className='text-center'>
                <>
                    <ChallengesVideoHome />
                </>
            </div>
            <div style={{ fontSize: 65 }} className='text-center home-titles' dir='rtl'>
                ایده‌هامون سوخت این موشکه!
            </div>
            {/* <div className='text-center mx-auto' style={{ maxWidth: '400px' }}>
                داستان از این قراره که با ایده‌های هم سوخت موشکون رو جمع کنیم و
                به ماه برسیم و گنج با ارزش ماه رو به دست آوریم
            </div> */}
            <div
                onClick={onScroll}
                className='beginning-btn justify-content-center align-items-center mx-auto mt-3'>
                <div className='mx-2'>شروع</div>
                <div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'>
                        <path
                            d='M11.7223 8.40038C12.1785 8.2103 12.6918 8.2103 13.1479 8.40038'
                            stroke='white'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                        <path
                            d='M16.2019 19.392H20.948C21.5312 19.392 22.004 18.9192 22.004 18.336V17.0514C22.004 16.6956 21.8248 16.3638 21.5273 16.1686L16.3016 12.7392'
                            stroke='white'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                        <path
                            d='M8.79807 19.392H4.05209C3.77201 19.392 3.5034 19.2807 3.30536 19.0827C3.10731 18.8847 2.99604 18.616 2.99604 18.336V17.0514C2.99604 16.6956 3.17521 16.3638 3.47266 16.1686L8.69842 12.7392'
                            stroke='white'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                        <path
                            d='M12.5 15.4122V18.6198'
                            stroke='white'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M10.0132 20.9179L9.28445 20.1892C8.90922 19.814 8.69842 19.305 8.69842 18.7744V8.429C8.69842 6.45577 9.48229 4.56335 10.8776 3.16806V3.16806C11.3079 2.73777 11.8915 2.49603 12.5 2.49603V2.49603C13.1085 2.49603 13.6921 2.73777 14.1224 3.16806V3.16806C15.5177 4.56335 16.3016 6.45577 16.3016 8.42901V18.7744C16.3016 19.305 16.0908 19.814 15.7156 20.1892L14.9868 20.9179C14.6116 21.2931 14.1027 21.504 13.572 21.504H11.428C10.8973 21.504 10.3884 21.2931 10.0132 20.9179Z'
                            stroke='white'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                        <path
                            d='M16.3016 13.9008V12C16.3016 10.7662 16.7018 9.56564 17.4421 8.57858V8.57858C17.6215 8.33927 17.9032 8.19843 18.2024 8.19843V8.19843C18.5015 8.19843 18.7832 8.33927 18.9627 8.57858V8.57858C19.703 9.56564 20.1032 10.7662 20.1032 12V15.168'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M8.69842 13.9008V12C8.69842 10.7662 8.29824 9.56564 7.55794 8.57858V8.57858C7.37846 8.33927 7.09677 8.19843 6.79763 8.19843V8.19843C6.49848 8.19843 6.2168 8.33927 6.03731 8.57858V8.57858C5.29702 9.56564 4.89684 10.7662 4.89684 12V15.168'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default BeginningDesktop;
