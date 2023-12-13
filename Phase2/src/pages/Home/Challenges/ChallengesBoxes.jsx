import {useNavigate} from 'react-router-dom'


const ChallengesBoxes = ({challenges = [], code}) => {

    const navigate = useNavigate();

    return (
        <div className={'container'} dir={'rtl'}>
            <div className={'row'}>
                {
                    challenges?.map((value, index) => {
                        return (
                            <div onClick={() => navigate(`/${code}/${value.id}`)} className={ challenges?.length === 1 || index > 1 ? 'col-12 mt-4' : 'col-12 col-lg-6 mt-4'} key={index.toString()}>
                                <div className={'challenge-box '}>
                                    <div className={'challenge-box-name'}>
                                        {challenges[index].name}
                                    </div>
                                    <div className={'stories-btn text-black w-100 mt-3'} style={{maxWidth: '100% !important'}}>
                                        مشاهده چالش
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChallengesBoxes;