


const ChallengeDescription = ({desc}) => {

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div style={{
                        textAlign: 'justify',
                        fontFamily: 'Bakh',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',

                    }} dir={'rtl'} className={'my-5'}>
                        {desc ? desc : null}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChallengeDescription;