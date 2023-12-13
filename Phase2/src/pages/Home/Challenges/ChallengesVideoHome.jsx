import ReactPlayer from 'react-player';
// import vid from '../../../../video/Teaser.mp4';
// import ReactHlsPlayer from 'react-hls-player';

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
                            play='true'
                            controls={true}
                            muted={false}
                            progressInterval={100}
                            className={'react-player'}
                            url={`https://www.apiacademy.tritapp.net/v1/stream/education/introMovie/1578902495000.mp4`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengesVideoHome;
