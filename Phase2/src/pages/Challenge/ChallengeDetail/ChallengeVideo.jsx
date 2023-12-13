import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ChallengeVideo = ({ id }) => {
    const { data } = useSelector((state) => state.challenge);
    const id1 = useParams().id;
    const id2 = useParams().challenge;

    const challenges = data.map((item) => item.challenges);
    const currentVideo = challenges.map((item) =>
        item.find((it) => it.id === id2)
    );
    const challenge = currentVideo.find((item) => item !== undefined);

    return (
        <div className={'container mb-10'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'d-flex justify-content-center'}>
                        
                    {/* <div
                            dangerouslySetInnerHTML={{
                                __html: `<video width='100%' controls className="react-player2" autoplay loop muted playsinline>
      <source src='${challenge.videoUrl}' type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
                            }}
                        /> */}


                        {/* <video
                            loop
                            autoPlay
                            muted
                            playsInline
                            className={'react-player2'}
                            controls>
                            <source src={challenge.videoUrl} type='video/mp4' />
                        </video> */}

                        <ReactPlayer
                            className={'react-player2'}
                            play
                            url={`${challenge.videoUrl}`}
                            controls={true}
                            muted={false}
                            progressInterval={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeVideo;
