import ReactPlayer from 'react-player';
// import vid from '../../../../video/Teaser.mp4';

const ChallengesVideoHome = () => {
    return (
        <div className={'container my-5'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'d-flex justify-content-center mt-5 pt-5'}>
                        {/* <video controls>
                            <source
                                src={
                                    'https://dhr.digikala.com/api/v1/stream/Teaser.mp4'
                                }
                                type='video/mp4'
                            />
                        </video> */}

                        {/* <video
                            loop
                            playsInline
                            autoPlay
                            className={'react-player'}
                            width={'100%'}
                            controls>
                            <source
                                src={
                                    'https://dhr.digikala.com/api/v1/stream/Teaser.mp4'
                                }
                                type='video/mp4'
                            />
                        </video> */}
                        <ReactPlayer
                            className={'react-player'}
                            play='true'
                            url={`https://dhr.digikala.com/api/v1/stream/Teaser.mp4`}
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

export default ChallengesVideoHome;
