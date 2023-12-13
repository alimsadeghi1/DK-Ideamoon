import ChallengeVideo from "./ChallengeVideo";
import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import ChallengesHeader from "../Challenges/ChallengesHeader";
import stone3 from "../../../assets/images/Frame (1).png";
import stone1 from "../../../assets/images/Frame.png";
import ChallengeReferee from "./ChallengeReferee";
import image from "../../../assets/images/Frame 323.png";
import ChallengeDescription from "./ChallengeDescription";
import ChallengeBtn from "./ChallengeBtn";
import {useSelector} from "react-redux";


const ChallengeDetail = () => {

    const challengeId = useParams().challenge;
    const id = useParams().id;
    const id2 = useParams().challenge;
    const {data} = useSelector(state => state.challenge)
    const [render, setRender] = useState(true);
    useEffect(() => {
        setRender(true);
        setTimeout(() => {
            setRender(false);
        }, 900);
    }, [challengeId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const challenges = data.map(item => item.challenges);
    const findChallenge = challenges.map(item => item.find(it => it.id === id2));
    const challenge = findChallenge.find(item => item !== undefined);


    return (
        <div className={'position-relative overflow-hidden story-bg-1'}>
            <div className={
                render
                    ? "container fadeIn position-relative"
                    : "container position-relative"
            }
                 style={{ animationDelay: ".3s" }}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <>
                            <ChallengesHeader/>
                        </>
                        <div className="story-box mb-lg-5 py-lg-4 px-3"
                             style={{ marginTop: "3vh" }}>
                            <div className="d-none d-lg-block story-stone-1">
                                <img src={stone3} alt="" />
                            </div>
                            <div className="d-none d-lg-block story-stone-2">
                                <img src={stone1} alt="" />
                            </div>
                            <div className={'w-50 mx-auto overflow-hidden'} style={{fontSize: '40px', fontWeight: "900", fontFamily: 'Bahman'}}>
                                {challenge.name}
                            </div>
                            <div className='mt-5'>
                                <ChallengeVideo/>
                            </div>
                            <>
                                <ChallengeReferee referee={challenge.referee}/>
                            </>
                            <>
                                <ChallengeDescription desc={challenge.desc}/>
                            </>
                            <>
                                <ChallengeBtn id1={challengeId} id2={challengeId}/>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChallengeDetail;