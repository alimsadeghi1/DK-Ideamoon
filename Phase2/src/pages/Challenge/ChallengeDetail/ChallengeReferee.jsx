import React from 'react';
import {useNavigate} from 'react-router-dom';


function ChallengeReferee({referee}) {
    return (
        <></>
        // <div className={'container mt-5'}>
        //     <div className={'row'}>
        //         <div className={'col-12 text-start text-lg-center pt-3'} style={{
        //             fontFamily: 'Bakh',
        //             fontSize: '24px',
        //             fontStyle: 'normal',
        //             fontWeight: 900,
        //         }} dir={'rtl'}>
        //             هیئت داوران:
        //         </div>
        //         {
        //             referee?.map((value, index) => {

        //                 return (
        //                     <div className={'col-6 col-lg-3 mt-3'}  key={index.toString()}>
        //                         <div className={'challenge-box'} style={{cursor: 'default !important', borderRadius: '14px'}}>
        //                             <div className={'my-2'}>
        //                                 <img className={'challenge-box-img'} src={value.img} alt=""/>
        //                             </div>
        //                             <div className={'mt-2'} style={{fontSize: '18px', fontWeight: '900'}}>
        //                                 {value.name}
        //                             </div>
        //                             <div className={'mb-2'} style={{fontSize: '14px'}}>
        //                                 {value.desc}
        //                             </div>
        //                         </div>
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>
        // </div>
    );
}

export default ChallengeReferee;