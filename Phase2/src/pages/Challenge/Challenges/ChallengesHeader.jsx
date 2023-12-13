import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useSelector} from "react-redux";

const ChallengesHeader = () => {
    const navigate = useNavigate();
    const onClick = () => navigate(-1);
    const id1 = useParams().id;
    const id2 = useParams().challenge;
    const {data} = useSelector(state => state.challenge)
    const text = data[id1]?.challenges[id2]?.name;

    return (
        <div className="d-flex justify-content-between align-items-center mt-4">
            <div></div>
            <div className="me-5" style={{ fontSize: "40px", fontWeight: "bolder" }}>
                {
                    text?.length > 0 ? '' : ' چالش ها'
                }
            </div>
            <div>
                <div className="back-btn" onClick={onClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ChallengesHeader;
