import IdeaInput from "./IdeaInput";
import ChallengesHeader from "../Challenge/Challenges/ChallengesHeader";
import Solution from "./Solution";
import React, {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom/dist/umd/react-router-dom.development";
import stone3 from "../../assets/images/Frame (1).png";
import stone1 from "../../assets/images/Frame.png";
import ProSend from "./Pro&Send";
import {useSelector} from "react-redux";


const SendIdea = () => {

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const challengeId = searchParams.get("challenge");
    const {data} = useSelector(state => state.challenge)

    const [render, setRender] = useState(true);
    useEffect(() => {
        // if (code > 4)
        //     window.location.href = '/'

        setRender(true);
        setTimeout(() => {
            setRender(false);
        }, 900);
    }, [id]);
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
                 style={{ animationDelay: ".3s" }}>
                <div className={'row'}>
                    <div className={'col-12'}>

                        <>
                            <ChallengesHeader/>

                        </>
                        <div className="story-box mb-lg-5 py-lg-4 px-3"
                             style={{marginTop: "3vh"}}>
                            <div className="d-none d-lg-block story-stone-1">
                                <img src={stone3} alt="" />
                            </div>
                            <div className="d-none d-lg-block story-stone-2">
                                <img src={stone1} alt="" />
                            </div>
                            <>
                                <div className={'w-100 text-center overflow-hidden'} style={{fontSize: '18px'}}>
                                    {data[id]?.challenges[challengeId]?.question}
                                </div>
                            </>
                            <>
                                <IdeaInput/>
                            </>
                            <>
                                <Solution/>
                            </>
                            <>
                                <ProSend/>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendIdea;