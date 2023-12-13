import React from 'react';
import digiLogo from '../../assets/images/Digikala-logo.png';
import ideamoon from '../../assets/images/Ideamoon-logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    //const { ref } = useSelector((state) => state.homeSlider);
    const navigate = useNavigate();

    const onScroll = (index) => {
        // if (ref) ref?.scrollIntoView({ behavior: "smooth" });
        navigate(`/${index}`);
    };

    const navDetails = [
        {
            title: 'چالش‌ها',
            icon: <></>,
            scrollTo: '#challenges'
        },
        {
            title: 'داستان‌ها',
            icon: <></>,
            scrollTo: '#stories'
        },
        // {
        //   title: "داستان دوم",
        //   icon: <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       width="25"
        //       height="24"
        //       viewBox="0 0 25 24"
        //       fill="none"
        //   >
        //     <path
        //         d="M5.09517 17.0307L4.40057 17.3136H4.40057L5.09517 17.0307ZM4.74817 11.4076L5.47209 11.6037L4.74817 11.4076ZM20.136 11.4076L19.4121 11.6037L20.136 11.4076ZM19.789 17.0307L20.4836 17.3136V17.3136L19.789 17.0307ZM14.4785 20.842L14.3628 20.1009H14.3628L14.4785 20.842ZM10.4056 20.842L10.2898 21.583L10.4056 20.842ZM9.09827 7.61682L8.94896 6.88184V6.88184L9.09827 7.61682ZM15.7859 7.61682L15.6366 8.35181L15.7859 7.61682ZM9.65687 20.725L9.77263 19.984L9.65687 20.725ZM5.18806 17.2587L5.88266 16.9758H5.88266L5.18806 17.2587ZM15.2273 20.725L15.343 21.466L15.2273 20.725ZM19.6961 17.2587L19.0015 16.9758L19.6961 17.2587ZM16.062 7.67291L16.2113 6.93793L16.2113 6.93793L16.062 7.67291ZM8.82217 7.67291L8.97148 8.4079L8.82217 7.67291ZM7.33609 7.44547C7.33609 7.85968 7.67187 8.19547 8.08609 8.19547C8.5003 8.19547 8.83609 7.85968 8.83609 7.44547H7.33609ZM8.08609 7.20939H7.33609H8.08609ZM11.3609 3.14409L11.179 2.41646L11.179 2.41646L11.3609 3.14409ZM11.4292 3.12701L11.611 3.85464L11.611 3.85464L11.4292 3.12701ZM15.3629 4.15264L14.8436 4.69381V4.69381L15.3629 4.15264ZM15.0991 4.93894C15.3979 5.22572 15.8727 5.21592 16.1595 4.91704C16.4463 4.61816 16.4365 4.14339 16.1376 3.8566L15.0991 4.93894ZM13.4575 3.1175L13.6324 2.38819L13.4575 3.1175ZM8.97148 8.4079L9.24759 8.35181L8.94896 6.88184L8.67285 6.93793L8.97148 8.4079ZM15.6366 8.35181L15.9127 8.4079L16.2113 6.93793L15.9352 6.88184L15.6366 8.35181ZM15.1115 19.984L14.3628 20.1009L14.5943 21.583L15.343 21.466L15.1115 19.984ZM10.5214 20.1009L9.77263 19.984L9.5411 21.466L10.2898 21.583L10.5214 20.1009ZM19.0944 16.7478L19.0015 16.9758L20.3907 17.5416L20.4836 17.3136L19.0944 16.7478ZM5.88266 16.9758L5.78977 16.7478L4.40057 17.3136L4.49346 17.5416L5.88266 16.9758ZM5.78977 16.7478C5.1215 15.1069 5.01069 13.3073 5.47209 11.6037L4.02425 11.2116C3.47669 13.2333 3.60877 15.3694 4.40057 17.3136L5.78977 16.7478ZM19.4121 11.6037C19.8735 13.3073 19.7627 15.1069 19.0944 16.7478L20.4836 17.3136C21.2754 15.3694 21.4075 13.2333 20.8599 11.2116L19.4121 11.6037ZM14.3628 20.1009C13.0907 20.2997 11.7934 20.2997 10.5214 20.1009L10.2898 21.583C11.7153 21.8057 13.1688 21.8057 14.5943 21.583L14.3628 20.1009ZM9.24758 8.35181C11.3538 7.92392 13.5303 7.92392 15.6366 8.35181L15.9352 6.88184C13.6319 6.41392 11.2523 6.41392 8.94896 6.88184L9.24758 8.35181ZM9.77263 19.984C7.99789 19.7067 6.52545 18.5541 5.88266 16.9758L4.49346 17.5416C5.34313 19.6278 7.26887 21.111 9.5411 21.466L9.77263 19.984ZM15.343 21.466C17.6153 21.111 19.541 19.6278 20.3907 17.5416L19.0015 16.9758C18.3587 18.5541 16.8862 19.7067 15.1115 19.984L15.343 21.466ZM15.9127 8.4079C17.6338 8.75754 18.9791 10.0052 19.4121 11.6037L20.8599 11.2116C20.2717 9.03976 18.4621 7.39517 16.2113 6.93793L15.9127 8.4079ZM8.67285 6.93793C6.42211 7.39517 4.61248 9.03976 4.02425 11.2116L5.47209 11.6037C5.90503 10.0052 7.25039 8.75754 8.97148 8.4079L8.67285 6.93793ZM8.83609 7.44547V7.20939H7.33609V7.44547H8.83609ZM11.5427 3.87172L11.611 3.85464L11.2474 2.39938L11.179 2.41646L11.5427 3.87172ZM14.8436 4.69381L15.0991 4.93894L16.1376 3.8566L15.8821 3.61147L14.8436 4.69381ZM13.2825 3.84681C13.8767 3.98934 14.4158 4.28335 14.8436 4.69381L15.8821 3.61147C15.2586 3.01323 14.4806 2.59164 13.6324 2.38819L13.2825 3.84681ZM11.611 3.85464C12.1585 3.71783 12.7336 3.71512 13.2825 3.84681L13.6324 2.38819C12.8489 2.20023 12.0291 2.20406 11.2474 2.39938L11.611 3.85464ZM8.83609 7.20939C8.83609 5.66024 9.92908 4.27491 11.5427 3.87172L11.179 2.41646C8.93525 2.97712 7.33609 4.93383 7.33609 7.20939H8.83609Z"
        //         fill="white"
        //     />
        //     <path
        //         d="M12.4421 13.5L12.4421 15.5"
        //         stroke="white"
        //         stroke-width="1.5"
        //         stroke-linecap="round"
        //     />
        //   </svg>
        //<div className="nav-new py-1 px-2">جدید</div>
        // },
        // {
        //   title: "داستان سوم",
        //   icon: (
        //       <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           width="25"
        //           height="24"
        //           viewBox="0 0 25 24"
        //           fill="none"
        //       >
        //         <path
        //             d="M5.09517 17.0307L4.40057 17.3136H4.40057L5.09517 17.0307ZM4.74817 11.4076L5.47209 11.6037L4.74817 11.4076ZM20.136 11.4076L19.4121 11.6037L20.136 11.4076ZM19.789 17.0307L20.4836 17.3136V17.3136L19.789 17.0307ZM14.4785 20.842L14.3628 20.1009H14.3628L14.4785 20.842ZM10.4056 20.842L10.2898 21.583L10.4056 20.842ZM9.09827 7.61682L8.94896 6.88184V6.88184L9.09827 7.61682ZM15.7859 7.61682L15.6366 8.35181L15.7859 7.61682ZM9.65687 20.725L9.77263 19.984L9.65687 20.725ZM5.18806 17.2587L5.88266 16.9758H5.88266L5.18806 17.2587ZM15.2273 20.725L15.343 21.466L15.2273 20.725ZM19.6961 17.2587L19.0015 16.9758L19.6961 17.2587ZM16.062 7.67291L16.2113 6.93793L16.2113 6.93793L16.062 7.67291ZM8.82217 7.67291L8.97148 8.4079L8.82217 7.67291ZM7.33609 7.44547C7.33609 7.85968 7.67187 8.19547 8.08609 8.19547C8.5003 8.19547 8.83609 7.85968 8.83609 7.44547H7.33609ZM8.08609 7.20939H7.33609H8.08609ZM11.3609 3.14409L11.179 2.41646L11.179 2.41646L11.3609 3.14409ZM11.4292 3.12701L11.611 3.85464L11.611 3.85464L11.4292 3.12701ZM15.3629 4.15264L14.8436 4.69381V4.69381L15.3629 4.15264ZM15.0991 4.93894C15.3979 5.22572 15.8727 5.21592 16.1595 4.91704C16.4463 4.61816 16.4365 4.14339 16.1376 3.8566L15.0991 4.93894ZM13.4575 3.1175L13.6324 2.38819L13.4575 3.1175ZM8.97148 8.4079L9.24759 8.35181L8.94896 6.88184L8.67285 6.93793L8.97148 8.4079ZM15.6366 8.35181L15.9127 8.4079L16.2113 6.93793L15.9352 6.88184L15.6366 8.35181ZM15.1115 19.984L14.3628 20.1009L14.5943 21.583L15.343 21.466L15.1115 19.984ZM10.5214 20.1009L9.77263 19.984L9.5411 21.466L10.2898 21.583L10.5214 20.1009ZM19.0944 16.7478L19.0015 16.9758L20.3907 17.5416L20.4836 17.3136L19.0944 16.7478ZM5.88266 16.9758L5.78977 16.7478L4.40057 17.3136L4.49346 17.5416L5.88266 16.9758ZM5.78977 16.7478C5.1215 15.1069 5.01069 13.3073 5.47209 11.6037L4.02425 11.2116C3.47669 13.2333 3.60877 15.3694 4.40057 17.3136L5.78977 16.7478ZM19.4121 11.6037C19.8735 13.3073 19.7627 15.1069 19.0944 16.7478L20.4836 17.3136C21.2754 15.3694 21.4075 13.2333 20.8599 11.2116L19.4121 11.6037ZM14.3628 20.1009C13.0907 20.2997 11.7934 20.2997 10.5214 20.1009L10.2898 21.583C11.7153 21.8057 13.1688 21.8057 14.5943 21.583L14.3628 20.1009ZM9.24758 8.35181C11.3538 7.92392 13.5303 7.92392 15.6366 8.35181L15.9352 6.88184C13.6319 6.41392 11.2523 6.41392 8.94896 6.88184L9.24758 8.35181ZM9.77263 19.984C7.99789 19.7067 6.52545 18.5541 5.88266 16.9758L4.49346 17.5416C5.34313 19.6278 7.26887 21.111 9.5411 21.466L9.77263 19.984ZM15.343 21.466C17.6153 21.111 19.541 19.6278 20.3907 17.5416L19.0015 16.9758C18.3587 18.5541 16.8862 19.7067 15.1115 19.984L15.343 21.466ZM15.9127 8.4079C17.6338 8.75754 18.9791 10.0052 19.4121 11.6037L20.8599 11.2116C20.2717 9.03976 18.4621 7.39517 16.2113 6.93793L15.9127 8.4079ZM8.67285 6.93793C6.42211 7.39517 4.61248 9.03976 4.02425 11.2116L5.47209 11.6037C5.90503 10.0052 7.25039 8.75754 8.97148 8.4079L8.67285 6.93793ZM8.83609 7.44547V7.20939H7.33609V7.44547H8.83609ZM11.5427 3.87172L11.611 3.85464L11.2474 2.39938L11.179 2.41646L11.5427 3.87172ZM14.8436 4.69381L15.0991 4.93894L16.1376 3.8566L15.8821 3.61147L14.8436 4.69381ZM13.2825 3.84681C13.8767 3.98934 14.4158 4.28335 14.8436 4.69381L15.8821 3.61147C15.2586 3.01323 14.4806 2.59164 13.6324 2.38819L13.2825 3.84681ZM11.611 3.85464C12.1585 3.71783 12.7336 3.71512 13.2825 3.84681L13.6324 2.38819C12.8489 2.20023 12.0291 2.20406 11.2474 2.39938L11.611 3.85464ZM8.83609 7.20939C8.83609 5.66024 9.92908 4.27491 11.5427 3.87172L11.179 2.41646C8.93525 2.97712 7.33609 4.93383 7.33609 7.20939H8.83609Z"
        //             fill="white"
        //         />
        //         <path
        //             d="M12.4421 13.5L12.4421 15.5"
        //             stroke="white"
        //             stroke-width="1.5"
        //             stroke-linecap="round"
        //         />
        //       </svg>
        //   ),
        // },
        // {
        //   title: "داستان چهارم",
        //   icon: (
        //       <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           width="25"
        //           height="24"
        //           viewBox="0 0 25 24"
        //           fill="none"
        //       >
        //         <path
        //             d="M5.09517 17.0307L4.40057 17.3136H4.40057L5.09517 17.0307ZM4.74817 11.4076L5.47209 11.6037L4.74817 11.4076ZM20.136 11.4076L19.4121 11.6037L20.136 11.4076ZM19.789 17.0307L20.4836 17.3136V17.3136L19.789 17.0307ZM14.4785 20.842L14.3628 20.1009H14.3628L14.4785 20.842ZM10.4056 20.842L10.2898 21.583L10.4056 20.842ZM9.09827 7.61682L8.94896 6.88184V6.88184L9.09827 7.61682ZM15.7859 7.61682L15.6366 8.35181L15.7859 7.61682ZM9.65687 20.725L9.77263 19.984L9.65687 20.725ZM5.18806 17.2587L5.88266 16.9758H5.88266L5.18806 17.2587ZM15.2273 20.725L15.343 21.466L15.2273 20.725ZM19.6961 17.2587L19.0015 16.9758L19.6961 17.2587ZM16.062 7.67291L16.2113 6.93793L16.2113 6.93793L16.062 7.67291ZM8.82217 7.67291L8.97148 8.4079L8.82217 7.67291ZM7.33609 7.44547C7.33609 7.85968 7.67187 8.19547 8.08609 8.19547C8.5003 8.19547 8.83609 7.85968 8.83609 7.44547H7.33609ZM8.08609 7.20939H7.33609H8.08609ZM11.3609 3.14409L11.179 2.41646L11.179 2.41646L11.3609 3.14409ZM11.4292 3.12701L11.611 3.85464L11.611 3.85464L11.4292 3.12701ZM15.3629 4.15264L14.8436 4.69381V4.69381L15.3629 4.15264ZM15.0991 4.93894C15.3979 5.22572 15.8727 5.21592 16.1595 4.91704C16.4463 4.61816 16.4365 4.14339 16.1376 3.8566L15.0991 4.93894ZM13.4575 3.1175L13.6324 2.38819L13.4575 3.1175ZM8.97148 8.4079L9.24759 8.35181L8.94896 6.88184L8.67285 6.93793L8.97148 8.4079ZM15.6366 8.35181L15.9127 8.4079L16.2113 6.93793L15.9352 6.88184L15.6366 8.35181ZM15.1115 19.984L14.3628 20.1009L14.5943 21.583L15.343 21.466L15.1115 19.984ZM10.5214 20.1009L9.77263 19.984L9.5411 21.466L10.2898 21.583L10.5214 20.1009ZM19.0944 16.7478L19.0015 16.9758L20.3907 17.5416L20.4836 17.3136L19.0944 16.7478ZM5.88266 16.9758L5.78977 16.7478L4.40057 17.3136L4.49346 17.5416L5.88266 16.9758ZM5.78977 16.7478C5.1215 15.1069 5.01069 13.3073 5.47209 11.6037L4.02425 11.2116C3.47669 13.2333 3.60877 15.3694 4.40057 17.3136L5.78977 16.7478ZM19.4121 11.6037C19.8735 13.3073 19.7627 15.1069 19.0944 16.7478L20.4836 17.3136C21.2754 15.3694 21.4075 13.2333 20.8599 11.2116L19.4121 11.6037ZM14.3628 20.1009C13.0907 20.2997 11.7934 20.2997 10.5214 20.1009L10.2898 21.583C11.7153 21.8057 13.1688 21.8057 14.5943 21.583L14.3628 20.1009ZM9.24758 8.35181C11.3538 7.92392 13.5303 7.92392 15.6366 8.35181L15.9352 6.88184C13.6319 6.41392 11.2523 6.41392 8.94896 6.88184L9.24758 8.35181ZM9.77263 19.984C7.99789 19.7067 6.52545 18.5541 5.88266 16.9758L4.49346 17.5416C5.34313 19.6278 7.26887 21.111 9.5411 21.466L9.77263 19.984ZM15.343 21.466C17.6153 21.111 19.541 19.6278 20.3907 17.5416L19.0015 16.9758C18.3587 18.5541 16.8862 19.7067 15.1115 19.984L15.343 21.466ZM15.9127 8.4079C17.6338 8.75754 18.9791 10.0052 19.4121 11.6037L20.8599 11.2116C20.2717 9.03976 18.4621 7.39517 16.2113 6.93793L15.9127 8.4079ZM8.67285 6.93793C6.42211 7.39517 4.61248 9.03976 4.02425 11.2116L5.47209 11.6037C5.90503 10.0052 7.25039 8.75754 8.97148 8.4079L8.67285 6.93793ZM8.83609 7.44547V7.20939H7.33609V7.44547H8.83609ZM11.5427 3.87172L11.611 3.85464L11.2474 2.39938L11.179 2.41646L11.5427 3.87172ZM14.8436 4.69381L15.0991 4.93894L16.1376 3.8566L15.8821 3.61147L14.8436 4.69381ZM13.2825 3.84681C13.8767 3.98934 14.4158 4.28335 14.8436 4.69381L15.8821 3.61147C15.2586 3.01323 14.4806 2.59164 13.6324 2.38819L13.2825 3.84681ZM11.611 3.85464C12.1585 3.71783 12.7336 3.71512 13.2825 3.84681L13.6324 2.38819C12.8489 2.20023 12.0291 2.20406 11.2474 2.39938L11.611 3.85464ZM8.83609 7.20939C8.83609 5.66024 9.92908 4.27491 11.5427 3.87172L11.179 2.41646C8.93525 2.97712 7.33609 4.93383 7.33609 7.20939H8.83609Z"
        //             fill="white"
        //         />
        //         <path
        //             d="M12.4421 13.5L12.4421 15.5"
        //             stroke="white"
        //             stroke-width="1.5"
        //             stroke-linecap="round"
        //         />
        //       </svg>
        //   ),
        // },
        // {
        //   title: "داستان پنجم",
        //   icon: (
        //       <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           width="25"
        //           height="24"
        //           viewBox="0 0 25 24"
        //           fill="none"
        //       >
        //         <path
        //             d="M5.09517 17.0307L4.40057 17.3136H4.40057L5.09517 17.0307ZM4.74817 11.4076L5.47209 11.6037L4.74817 11.4076ZM20.136 11.4076L19.4121 11.6037L20.136 11.4076ZM19.789 17.0307L20.4836 17.3136V17.3136L19.789 17.0307ZM14.4785 20.842L14.3628 20.1009H14.3628L14.4785 20.842ZM10.4056 20.842L10.2898 21.583L10.4056 20.842ZM9.09827 7.61682L8.94896 6.88184V6.88184L9.09827 7.61682ZM15.7859 7.61682L15.6366 8.35181L15.7859 7.61682ZM9.65687 20.725L9.77263 19.984L9.65687 20.725ZM5.18806 17.2587L5.88266 16.9758H5.88266L5.18806 17.2587ZM15.2273 20.725L15.343 21.466L15.2273 20.725ZM19.6961 17.2587L19.0015 16.9758L19.6961 17.2587ZM16.062 7.67291L16.2113 6.93793L16.2113 6.93793L16.062 7.67291ZM8.82217 7.67291L8.97148 8.4079L8.82217 7.67291ZM7.33609 7.44547C7.33609 7.85968 7.67187 8.19547 8.08609 8.19547C8.5003 8.19547 8.83609 7.85968 8.83609 7.44547H7.33609ZM8.08609 7.20939H7.33609H8.08609ZM11.3609 3.14409L11.179 2.41646L11.179 2.41646L11.3609 3.14409ZM11.4292 3.12701L11.611 3.85464L11.611 3.85464L11.4292 3.12701ZM15.3629 4.15264L14.8436 4.69381V4.69381L15.3629 4.15264ZM15.0991 4.93894C15.3979 5.22572 15.8727 5.21592 16.1595 4.91704C16.4463 4.61816 16.4365 4.14339 16.1376 3.8566L15.0991 4.93894ZM13.4575 3.1175L13.6324 2.38819L13.4575 3.1175ZM8.97148 8.4079L9.24759 8.35181L8.94896 6.88184L8.67285 6.93793L8.97148 8.4079ZM15.6366 8.35181L15.9127 8.4079L16.2113 6.93793L15.9352 6.88184L15.6366 8.35181ZM15.1115 19.984L14.3628 20.1009L14.5943 21.583L15.343 21.466L15.1115 19.984ZM10.5214 20.1009L9.77263 19.984L9.5411 21.466L10.2898 21.583L10.5214 20.1009ZM19.0944 16.7478L19.0015 16.9758L20.3907 17.5416L20.4836 17.3136L19.0944 16.7478ZM5.88266 16.9758L5.78977 16.7478L4.40057 17.3136L4.49346 17.5416L5.88266 16.9758ZM5.78977 16.7478C5.1215 15.1069 5.01069 13.3073 5.47209 11.6037L4.02425 11.2116C3.47669 13.2333 3.60877 15.3694 4.40057 17.3136L5.78977 16.7478ZM19.4121 11.6037C19.8735 13.3073 19.7627 15.1069 19.0944 16.7478L20.4836 17.3136C21.2754 15.3694 21.4075 13.2333 20.8599 11.2116L19.4121 11.6037ZM14.3628 20.1009C13.0907 20.2997 11.7934 20.2997 10.5214 20.1009L10.2898 21.583C11.7153 21.8057 13.1688 21.8057 14.5943 21.583L14.3628 20.1009ZM9.24758 8.35181C11.3538 7.92392 13.5303 7.92392 15.6366 8.35181L15.9352 6.88184C13.6319 6.41392 11.2523 6.41392 8.94896 6.88184L9.24758 8.35181ZM9.77263 19.984C7.99789 19.7067 6.52545 18.5541 5.88266 16.9758L4.49346 17.5416C5.34313 19.6278 7.26887 21.111 9.5411 21.466L9.77263 19.984ZM15.343 21.466C17.6153 21.111 19.541 19.6278 20.3907 17.5416L19.0015 16.9758C18.3587 18.5541 16.8862 19.7067 15.1115 19.984L15.343 21.466ZM15.9127 8.4079C17.6338 8.75754 18.9791 10.0052 19.4121 11.6037L20.8599 11.2116C20.2717 9.03976 18.4621 7.39517 16.2113 6.93793L15.9127 8.4079ZM8.67285 6.93793C6.42211 7.39517 4.61248 9.03976 4.02425 11.2116L5.47209 11.6037C5.90503 10.0052 7.25039 8.75754 8.97148 8.4079L8.67285 6.93793ZM8.83609 7.44547V7.20939H7.33609V7.44547H8.83609ZM11.5427 3.87172L11.611 3.85464L11.2474 2.39938L11.179 2.41646L11.5427 3.87172ZM14.8436 4.69381L15.0991 4.93894L16.1376 3.8566L15.8821 3.61147L14.8436 4.69381ZM13.2825 3.84681C13.8767 3.98934 14.4158 4.28335 14.8436 4.69381L15.8821 3.61147C15.2586 3.01323 14.4806 2.59164 13.6324 2.38819L13.2825 3.84681ZM11.611 3.85464C12.1585 3.71783 12.7336 3.71512 13.2825 3.84681L13.6324 2.38819C12.8489 2.20023 12.0291 2.20406 11.2474 2.39938L11.611 3.85464ZM8.83609 7.20939C8.83609 5.66024 9.92908 4.27491 11.5427 3.87172L11.179 2.41646C8.93525 2.97712 7.33609 4.93383 7.33609 7.20939H8.83609Z"
        //             fill="white"
        //         />
        //         <path
        //             d="M12.4421 13.5L12.4421 15.5"
        //             stroke="white"
        //             stroke-width="1.5"
        //             stroke-linecap="round"
        //         />
        //       </svg>
        //   ),
        // },
    ];

    return (
        <div className='d-flex justify-content-lg-between align-items-center justify-content-center my-navbar mt-4 py-2 px-3'>
            <div className=''>
                <img src={digiLogo} className='digiLogo' alt='digikala' />
            </div>
            <div className='d-flex gap-4 align-items-center'>
                <div className='d-lg-flex d-none' dir='rtl'>
                    {navDetails?.map((value, index) => {
                        return (
                            <div
                                className={
                                    index !== 10
                                        ? 'd-lg-flex mx-2 align-items-center d-none'
                                        : 'd-lg-flex mx-2 align-items-center selected-nav p-2 d-none d-lg-block'
                                }
                                key={index.toString()}>
                                {/*
              change index for enabling buttons -> + 1
              */}
                                <a
                                    className='nav-text me-2 text-decoration-none text-white'
                                    href={value.scrollTo}
                                    // onClick={() => onScroll(index)}
                                >
                                    {value.title}
                                </a>
                                <div>{value.icon}</div>
                            </div>
                        );
                    })}
                </div>
                <div className='d-none d-lg-block'>
                    <div className=''>
                        <img
                            src={ideamoon}
                            style={{
                                width: '135px',
                                height: '45px',
                                objectFit: 'cover',
                            }}
                            alt='digikala'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;