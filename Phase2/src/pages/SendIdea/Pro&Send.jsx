import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { SET_FNAME, SET_DESC, SET_PERSONAL } from '../../redux/slices/sendIdea';

const ProSend = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const { personnelCode, fullName, description } = useSelector(
        (state) => state.sendIdea
    );
    const id = useParams();
    const [searchParams, setSearchParams]  = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get('challenge');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(SET_DESC(''));
        dispatch(SET_FNAME(''));
        dispatch(SET_PERSONAL(''));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            personnelCode?.length > 0 &&
            fullName?.length > 0 &&
            description?.length > 0
        ) {
            const formData = new FormData();
            formData.append('attachment', selectedFile);
            formData.append('personnelCode', personnelCode);
            formData.append('fullName', fullName);
            formData.append('description', description);
            formData.append('challengeId', query);
            try {
                await axios({
                    method: 'post',
                    url: 'https://dhr.digikala.com/api/v1/form/add',
                    data: formData,
                    headers: { 
                        'Content-Type': 'multipart/form-data'
                    },
                });
                navigate('/ideaSubmitted');
            } catch (error) {
                console.log(error);
                toast.error('مشکلی پیش آمده، لطفا لحظاتی دیگر امتحان کنید');
            }
        } else {
            alert('تمامی فیلد ها الزامی هستند ');
        }
    };

    return (
        <div className={'container mt-4'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'idea-btn-label'}>
                        <div className={'pt-1'} style={{ fontSize: '14px' }}>
                            پروپوزال
                        </div>
                        <div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='25'
                                viewBox='0 0 24 25'
                                fill='none'>
                                <path
                                    d='M18.0024 10.4993V8.32635C18.0024 7.79613 17.7913 7.28692 17.4162 6.91176L14.587 4.08258C14.2118 3.70743 13.7026 3.49634 13.1724 3.49634H5.99742C4.89195 3.49634 3.99658 4.39171 3.99658 5.49717V19.503C3.99658 20.6085 4.89195 21.5038 5.99742 21.5038H9.99908'
                                    stroke='white'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M18.0026 8.49842H14.0009C13.4487 8.49842 13.0005 8.05023 13.0005 7.498V3.49634'
                                    stroke='white'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M16.5019 22.5042C14.0158 22.5042 12 20.4884 12 18.0024C12 15.5163 14.0158 13.5005 16.5019 13.5005C18.9889 13.5005 21.0037 15.5163 21.0037 18.0024C21.0037 20.4884 18.9889 22.5042 16.5019 22.5042'
                                    stroke='white'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M16.5017 16.2065V19.797'
                                    stroke='white'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M18.2975 18.0024H14.707'
                                    stroke='white'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={'idea-file'}>
                            <div
                                style={{
                                    color: '#9A9A9A',
                                    textAlign: 'right',
                                    fontFamily: 'Bakh',
                                    fontSize: '14px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                }}
                                dir={'rtl'}>
                                فقط فایل pdf تا حداکثر ۵ مگابایت
                            </div>
                            <label
                                style={{
                                    borderRadius: '8px',
                                    border: '1px solid #820BFF',
                                    cursor: 'pointer',
                                }}
                                className={'w-100 py-2'}>
                                <input
                                    onChange={(e) =>
                                        setSelectedFile(e.target.files[0])
                                    }
                                    type={'file'}
                                    className={'w-100'}
                                    style={{ display: 'none' }}
                                />
                                انتخاب فایل
                            </label>
                        </div>
                        <label
                            style={{
                                borderRadius: '16px',
                                backgroundColor: '#820BFF',
                                cursor: 'pointer',
                            }}
                            className={
                                'my-4 w-100 py-3 d-flex justify-content-center align-items-center'
                            }>
                            <input type='submit' className={'w-100 d-none'} />
                            <div className={'mx-2 pt-1'}>ارسال ایده</div>
                            <div>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='25'
                                    height='25'
                                    viewBox='0 0 25 25'
                                    fill='none'>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M15.1438 20.4079L20.5998 5.6879C20.8968 4.8859 20.1158 4.1059 19.3148 4.4029L4.5898 9.8629C3.6688 10.2049 3.7408 11.5309 4.6938 11.7699L11.5278 13.4869L13.2348 20.3029C13.4748 21.2569 14.8018 21.3299 15.1438 20.4079V20.4079Z'
                                        stroke='white'
                                        stroke-width='1.5'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    />
                                    <path
                                        d='M20.3698 4.62988L11.5298 13.4899'
                                        stroke='white'
                                        strokeWidth='1.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProSend;
