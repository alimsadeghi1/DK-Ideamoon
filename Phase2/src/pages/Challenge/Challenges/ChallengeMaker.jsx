

const ChallengeMaker = ({image = '', name = ''}) => {


    return (
        <div className={'d-flex mb-3 flex-column justify-content-center align-items-center'}>
            <div>
                <img className={'challenge-box-img mt-lg-4 mt-3'} src={image} alt=""/>
            </div>
            <div className={'challenges-name mt-3'}>
                چالش های {name}
            </div>
        </div>
    )
}

export default ChallengeMaker;