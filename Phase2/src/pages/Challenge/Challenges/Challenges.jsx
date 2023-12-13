import StoryHeader from "../../Story/StoryHeader";
import React, {useEffect, useState} from "react";
import ChallengesHeader from "./ChallengesHeader";
import ChallengeMaker from "./ChallengeMaker";
import {useParams} from 'react-router-dom'
import { useSearchParams } from "react-router-dom/dist/umd/react-router-dom.development";
import image from "../../../assets/images/Frame 323.png";
import ChallengesBoxes from "../../Home/Challenges/ChallengesBoxes";
import stone3 from "../../../assets/images/Frame (1).png";
import stone1 from "../../../assets/images/Frame.png";
import {useSelector} from "react-redux";


const Challenges = () => {

    const [searchParams] = useSearchParams();
    const code = useParams().id;
    const [render, setRender] = useState(true);
    useEffect(() => {
        setRender(true);
        setTimeout(() => {
            setRender(false);
        }, 900);
    }, [code]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {data} = useSelector(state => state.challenge)

    const currentUser = data.find(item => item.id === code);

    return (
        <div className={'position-relative overflow-hidden story-bg-1'}>
            <div
                className={
                    render
                        ? "container fadeIn position-relative"
                        : "container position-relative"
                }
                style={{ animationDelay: ".3s" }}
            >
                <div className={'row'}>
                    <div className={'col-12'}>
                        <div>
                            <ChallengesHeader />
                        </div>
                        {/*box*/}
                        <div className={'story-box mb-lg-5 py-4 px-3'} style={{ marginTop: "5vh" }}>
                            <div className="d-none d-lg-block story-stone-1">
                                <img src={stone3} alt="" />
                            </div>
                            <div className="d-none d-lg-block story-stone-2">
                                <img src={stone1} alt="" />
                            </div>
                            <div>
                                <ChallengeMaker image={code ? currentUser.img : ''} name={code ? currentUser.name : ''} />
                            </div>
                            <>
                                <ChallengesBoxes code={currentUser.id} challenges={currentUser.challenges}/>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challenges;