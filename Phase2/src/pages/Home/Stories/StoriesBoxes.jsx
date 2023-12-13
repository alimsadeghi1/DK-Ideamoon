import React from "react";
import {useNavigate} from 'react-router-dom'
import cake from "../../../assets/images/Large-Cake.png";
import fan from "../../../assets/images/Panke.png";
import toilet from "../../../assets/images/toilet.png";
import coffee from "../../../assets/images/Coffee.png";
import cash from "../../../assets/images/Dastan3.png";
import stone1 from "../../../assets/images/Emoji/Fan.png";
import stone2 from "../../../assets/images/Emoji/Cack.png";
import stone3 from "../../../assets/images/Frame (1).png";
import stone4 from "../../../assets/images/Emoji/Fling cash.png";
import stone5 from "../../../assets/images/Emoji/Toielt.png";
import stone6 from "../../../assets/images/Emoji/Note.png";
import {useDispatch} from 'react-redux';
import { SET_REF } from "../../../redux/slices/home";
import TimeCounter from "../../../helpers/TimeCounter";


const StoriesBoxes = () => {
  const firstDec =
    "داستان کارخونه مینو و پنکه کارخونه مینو تو گذشته به دست علی خسروشاهی (تاجر و کارآفرین بزرگ ایرانی) اداره می‌شد. یه روزی براش یه گزارش آوردن که ظاهرا یه سری از بسته‌های مواد غذایی ...";
  const secDec =
    "همه چیز نباید ساده باشد در اواخر دهه ۱۹۴۰، محصولی به‌نام «کیک‌های فوری» محبوبیت زیادی بین محصولات غذایی پیدا کرد؛ ترکیبی که در آن، تنها با اضافه کردن مقداری آب...";
  const thirdDec =
    "داستان کارخونه مینو و پنکه کارخونه مینو تو گذشته به دست علی خسروشاهی (تاجر و کارآفرین بزرگ ایرانی) اداره می‌شد. یه روزی براش یه گزارش آوردن که ظاهرا یه سری از بسته‌های مواد غذایی ...";
  const fourthDec = "داستان بعدی به زودی منتشر می‌شه!";
  const fifthDec = "داستان بعدی به زودی منتشر می‌شه!";

  /*
  * change story details here
  * */

  const stories = [
    {
      title: "داستان اول",
      description: `علی خسروشاهی زمانی کارخونه مینو رو مدیریت می‌کرد، چالش بزرگی داشت: یک‌سری از بسته‌بندی‌های محصولات، خالیِ خالی از دستگاه بیرون میومدن و به دست فروشگاه‌ها می‌رسیدن. به‌نظر شما اون چطوری تونست این مشکل رو حل کنه؟`,
      stone1: stone1,
      background: fan,
    },
    {
      title: "داستان دوم",
      description: `گاهی اوقات ایده‌ مشکلاتی که داریم با یک نگاه به جزئیات کوچیک، حل می‌شن اما خب ما به این جزئیات دقت نمی‌کنیم. General Mills شرکتی بود که با این رویکرد تونست به موفقیت خیلی زیادی برسه. اما چطوری؟`,
      stone1: stone2,
      background: cake,
    },
    {
      title: "داستان سوم",
      description: `شاید به‌نظرتون غیرمنطقی بیاد، اما یک ایده کاری کرد تا یک کارخونه کبریت‌سازی میلیون‌ها دلار توی هزینه‌های خودش صرفه‌جویی کنه و سرمایه زیادی به‌دست بیاره. اما چه ایده‌ای می‌تونه همچین پتانسیلی داشته باشه؟`,
      stone1: stone4,
      background: cash,
    },
    {
      title: "داستان چهارم",
      description: `اپل موقع طراحی اولین نسخه‌های iOS هیچ ایده‌ای برای پیاده‌سازی Lock Screen نداشت و خودشون هم فکر نمی‌کرد که جوابِ این مشکل، توی دست‌شویی یه هواپیما منتظرِ پیدا شدن بود.`,
      stone1: stone5,
      background: toilet,
    },
    {
      title: "داستان پنجم",
      description: `گاهی اوقات ایده‌ها برای مشکلات نیستن و می‌تونن باعث بهبود بشن؛ توی این داستان قراره درباره ایده یک کارمند ساده تو Starbucks بگیم که چهارچوب فروشگاه‌های استارباکس رو به‌طور کلی عوض کرد`,
      stone1: stone6,
      background: coffee,
    },
  ];

const navigate = useNavigate();
const dispatcher = useDispatch()
const onClick = (index) => {
  dispatcher(SET_REF(null))
  navigate(`/story?id=${index}`)
}


  return (
    <div className="container mt-5 stories-boxes-bg">
      <div className="row" style={{}} dir="rtl">
        {stories?.map((value, index) => {
          return (
            <div
              style={{ height: "auto" }}
              className={
                index === 0
                  ? "col-12 col-lg-6 col-xl-8 mt-4 position-relative"
                  : "col-12 col-lg-6 col-xl-4 mt-4 position-relative"
              }
              key={index.toString()}
            >
              {/*
              change index for putting counter
              */}
              {/*{
                index === 1 ?
                <TimeCounter hour={11}/>
                : null
              }*/}
              <div className={`stories-stones-${index + 1}`} style={{zIndex: '222'}}>
                <img src={value.stone1} style={{ objectFit: "cover", zIndex: '222' }} alt="" />
              </div>
              {value.stone2 ? (
                <div className={`stories-stones-${index + 1}-${index + 1}`} style={{zIndex: '222'}}>
                  <img
                    src={value.stone2}
                    style={{ objectFit: "cover", zIndex: '222' }}
                    alt=""
                  />
                </div>
              ) : null}
              {/*
               for applying onClick -> index + 1
              */}
              <div
                className="text-center stories-boxes p-5 h-100 position-relative overflow-hidden"
                style={{ height: "100%" }}
                onClick={index < 5 ? () => onClick(index) : null}
              >
                <div
                  className={`position-absolute mx-auto stories-bg${index + 1}`}
                  style={{ backgroundImage: `url(${value.background})` }}
                ></div>

                <div className="stories-title ">{value.title}</div>
                <div className="stories-description mt-3">
                  {value.description}
                </div>
                {/*
                 for showing more story remove indexes
                */}
                {index < 5 ? (
                  <div
                    className="stories-btn mx-auto mt-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => onClick(index)}
                  >
                    مشاهده {value.title}
                  </div>
                ) : (
                  <div className="stories-disabled-btn mx-auto justify-content-center mt-3">
                    <div className="mx-2">به زودی...</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1374 4.51386C11.703 4.37049 12.2969 4.37049 12.8625 4.51386C14.1819 4.84832 15.1258 5.96028 15.2306 7.26587L15.1915 7.25782C13.0872 6.82413 10.9128 6.82413 8.8085 7.25782L8.76936 7.26589C8.87413 5.96028 9.81803 4.84832 11.1374 4.51386ZM16.685 7.50839V7.7184C18.1592 8.40029 19.2768 9.68843 19.6983 11.2674C20.1955 13.1297 20.0758 15.0973 19.3563 16.8896L19.2718 17.1C18.5 19.0225 16.7426 20.4054 14.6498 20.7371L13.9687 20.845C12.6648 21.0517 11.3352 21.0517 10.0313 20.845L9.35019 20.7371C7.25734 20.4054 5.49999 19.0225 4.72818 17.1L4.64368 16.8895C3.92417 15.0973 3.80447 13.1297 4.30168 11.2674C4.72321 9.68846 5.84078 8.40033 7.31494 7.71843V7.50838C7.31494 5.45953 8.7365 3.66924 10.7734 3.15292C11.5777 2.94903 12.4223 2.94903 13.2266 3.15292C15.2634 3.66924 16.685 5.45954 16.685 7.50839ZM12 12.8504C12.3192 12.8504 12.5779 13.1022 12.5779 13.4129V15.288C12.5779 15.5987 12.3192 15.8506 12 15.8506C11.6809 15.8506 11.4221 15.5987 11.4221 15.288V13.4129C11.4221 13.1022 11.6809 12.8504 12 12.8504Z"
                          fill="#BEBEBE"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoriesBoxes;
