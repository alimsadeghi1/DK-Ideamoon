import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const challenges = [
    {
        title: 'چالش اول',
    },
    {
        title: 'چالش دوم',
    },
    {
        title: 'چالش سوم',
    },
    {
        title: 'چالش چهارم',
    },
    {
        title: 'چالش پنجم',
    },
    {
        title: 'چالش ششم',
    },
];

const ChallengeBoxes = () => {
    const navigate = useNavigate();
    const [person, setPerson] = useState(true);
    const onNavigate = (index) => navigate(`/${index}`);

    const { data } = useSelector((state) => state.challenge);

    return (
        <div dir='rtl' className={'container mt-5'}>
            <div className='d-flex justify-content-start gap-2 mb-4'>
                <button
                    onClick={() => setPerson(true)}
                    style={{ fontWeight: 600 }}
                    className={`btn ${
                        person ? 'btn-light' : 'btn-outline-light'
                    } px-5`}>
                    اشخاص
                </button>
                <button
                    onClick={() => setPerson(false)}
                    style={{ fontWeight: 600 }}
                    className={`btn ${
                        person ? 'btn-outline-light' : 'btn-light'
                    } px-5`}>
                    چالش‌ها
                </button>
            </div>
            <div className={'row justify-content-end'}>
                {person
                    ? data?.map((value, index) => {
                          return (
                              <div
                                  className={'col-12 col-lg-4 mt-4'}
                                  key={index.toString()}>
                                  <div
                                      className={'challenge-box '}
                                      onClick={() => onNavigate(value.id)}>
                                      <div className={'my-2'}>
                                          <img
                                              className={'challenge-box-img'}
                                              src={value.img}
                                              alt=''
                                          />
                                      </div>
                                      <div
                                          className={'my-2 challenge-box-name'}>
                                          {value.name}
                                      </div>
                                      <div className={'mb-2'}>{value.desc}</div>
                                      <div
                                          className={
                                              'mt-3 stories-btn text-black mx-auto text-center'
                                          }
                                          style={{ fontWeight: '500' }}>
                                          مشاهده {value.story}
                                      </div>
                                  </div>
                              </div>
                          );
                      })
                    : data.map((item) =>
                          item.challenges.map((challenge, challengeIndex) => (
                              <div onClick={() => navigate(`/${item.id}/${challenge.id}`)} key={challengeIndex} class='col-12 col-lg-4 mt-4'>
                                  <div class='challenge-box '>
                                      <div class='challenge-box-name'>
                                          {challenge.name}
                                      </div>
                                      <p>{item.name}</p>
                                      <div class='stories-btn text-black w-100 mt-3 text-center'>
                                          مشاهده چالش
                                      </div>
                                  </div>
                              </div>
                          ))
                      )}
            </div>
        </div>
    );
};

export default ChallengeBoxes;
