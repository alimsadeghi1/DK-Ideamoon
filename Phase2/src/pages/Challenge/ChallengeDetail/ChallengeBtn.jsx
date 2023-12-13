import { useNavigate } from 'react-router-dom';

export default function ChallengeBtn({ id1, id2 }) {
    const navigate = useNavigate();
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div
                        onClick={() =>
                            navigate(`/idea?id=${id1}&challenge=${id2}`)
                        }
                        style={{
                            borderRadius: '16px',
                            backgroundColor: '#820BFF',
                            cursor: 'pointer',
                        }}
                        className={'w-100 py-3 mb-4 text-center'}>
                        ثبت ایده
                    </div>
                </div>
            </div>
        </div>
    );
}
