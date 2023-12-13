import React, { useEffect, useState } from "react";
import StoryHeader from "./StoryHeader";
import image1 from "../../assets/images/Rectangle 1049.png";
import image2 from "../../assets/images/Rectangle 1049 (1).png";
import image3 from "../../assets/images/Rectangle 1049 (2).png";
import image4 from "../../assets/images/Rectangle 1049 (3).png";
import image5 from "../../assets/images/Rectangle 1049 (4).png";
import StoryDetails from "./StoryDetails";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom/dist/umd/react-router-dom.development";
import StoryNavigation from "./StoryNavigation";
import stone3 from "../../assets/images/Frame (1).png";
import stone1 from "../../assets/images/Frame.png";

import logo1 from "../../assets/images/Vector (5).png";
import logo2 from "../../assets/images/emoji 2.png";
import logo3 from "../../assets/images/image 2.png";
import logo4 from "../../assets/images/image 2 (1).png";
import logo5 from "../../assets/images/image 2 (2).png";

const Story = () => {

  const desc1 = `زمان مدیریت کارخانه مینو توسط علی خسروشاهی، دستگاه‌های شرکت مشکلی داشتن که هر چند بسته، یک بسته رو خالی از دستگاه بیرون می‌فرستادن؛ راه‌حل این چالش اضافه شدن یک ماژول توسط کارخانه سوئیسی تولید کننده دستگاه بود که علاوه‌بر زمان‌بر بودن، هزینه یک و نیم میلیون دلاری داشت.
علی خسروشاهی، مدیرعامل وقت مینو، مشغول پیدا کردن یک راه‌حل برای این موضوع و جلوگیری از هزینه‌ی هنگفت و آسیب به اعتبار مینو بود که متوجه حضور یه پنکه روی میزِ کنار خط تولید شد؛ یکی از کارگران خط تولید، پنکه‌ای رو از انبار به کنار مسیر خروجی بسته‌بندی‌ها آورده بود تا با استفاده از باد پنکه، بسته‌های خالی رو از خط تولید خارج کنه! گاهی اوقات ایده‌های ساده می‌تونن راه‌حلی برای انتخاب‌های پیچیده باشن. 
`
  const desc2 = 'تو اواخر دهه ۱۹۴۰، محصولی به اسم «کیک فوری» که قبلاً محبوبیت زیادی داشت، با شکست مواجه شده بود و خریدارها دیگه سراغ این پودرها نمی‌رفتن. ارنست دیچتر که اون زمان توی General Mills فعالیت می‌کرد، تصمیم گرفت تا رویکرد جدیدی رو برای این مشکل پیدا کنه. اون که تخصص کافی توی حوزه روان‌شناسی مصرف‌کننده داشت، سراغ مشتری‌ها رفت تا بتونه درباره ریشه اصلی این موضوع اطلاعاتی به‌دست بیاره. \n' +
      '\n' +
      'توی مصاحبه‌هایی که با صدها زن خانه‌دار انجام داد، دیچتر متوجه شد که کیک‌های فوری تعامل و فعالیتی برای مصرف‌کننده ندارن و ساده‌ بودن و راحت بودن‌شون، حسِ مشارکت‌ رو از خانم‌ها می‌گرفت. \n' +
      '\n' +
      'ارنست این موضوع رو به هیئت مدیره General Mills منتقل کرد و ایده این که بعضی مواد اولیه مثل تخم مرغ رو از ترکیبات پودر فوری حذف کنن رو داد. در نهایت، این شرکت تونست توی یه بازه زمانی خیلی کوتاه بدون صرف هزینه، فروش خیلی خوبی از این محصول داشته باشه و تو زمینه کیک‌های فوری، از رقیب‌های دیگه هم جلو بیفته. \n';
  const desc3 = 'همیشه فکر می‌کنیم که ایده‌های ما جدا از خلاقیت زیاد، باید عجیب‌ترین المان‌ها رو داشته باشن تا قبول بشن. اما داستان شرکت سوان وستا (Swan Vesta) نقطه مقابلِ این تفکره. \n' +
      '\n' +
      'اوایل دهه ۱۹۰۰، یه کارگر ساده از کارخانه کبریت‌سازی سوان وستا، ایده‌ای توی ذهنش داشت که ادعا می‌کرد می‌تونه میلیون‌ها دلار توی خط تولید کسب‌وکار، صرفه‌جویی کنه. \n' +
      '\n' +
      'اون توی جلسه‌ای که با مدیرعامل‌ها داشت، ایده این رو داد که قسمت سنباده که کبریت روی اون کشیده و روشن می‌شه، فقط روی یه طرف جعبه کبریت باشه و طرف دیگه رو خالی بذاریم. مدیران سوان هم این ایده رو توی خط تولید اجرا کردن و میلیون‌ها دلار پول صرفه‌جویی کردن. سوان وستا و ایده میلیون دلاریش، نشون داد که گاهی اوقات، بهترین ایده‌ها از ساده‌ترین فکر‌ها میاد. \n';
  const desc4 = 'سال‌ها قبل، زمانی که اپل می‌خواست با اولین گوشی هوشمند و لمسیش، بازار گوشی‌های هوشمند رو دگرگون کنه، با چالش بزرگی مواجه شده بود: چطوری می‌تونستن صفحه قفل یا همون Lock Screen رو طوری طراحی کنن که جدا از خلاقیت، کارکرد بهتری داشته باشه؟ \n' +
      '\n' +
      'فردی آنزورز و عمران چودری اون زمان روی حل مشکل تماس‌های تلفنی تصادفی که به‌عنوان The Butt Dial می‌شناختن، کار می‌کردن. حین یه سفر کاری با هواپیما، فردی دست‌شویی می‌ره و بعد از بستن در، ایده‌ای به ذهنش رسید؛ مکانیزم باز و بسته شدن در، ساده‌تر از چیزی بود که انتظارش رو داشت. \n' +
      '\n' +
      'بعد از برگشتن به دفتر مرکزی اپل، فردی و عمران این ایده رو با مدیرهای ارشد در میون گذاشتن و در نهایت، اولین گوشی آیفون که هنوز هم رویداد معرفیش با حضور استیو جابز تو یاد خیلی‌هامون مونده، با ویژگی Swipe To Unlock شروع شد. گاهی اوقات ایده‌هایی که به‌دنبال‌شونیم، جلوی چشم ما هستن، صرفاً باید توجه بیش‌تری داشته باشیم. \n';
  const desc5 = 'گاهی اوقات، ایده‌ها فقط برای حل مشکل نیستن و اثرگذاری‌شون به حدی زیاده که می‌تونه به بخشی از فرهنگ سازمان تبدیل بشه، همون‌طور که داستان استارباکس نویدش رو به‌ما می‌ده. توی یه روز نامعلوم، یکی از باریستاهایی که تو استارباکس کار می‌کرد، تصمیم گرفت روی فنجان یکی از مشتری‌ها، اسمش رو بنویسه تا تجربه‌ای منحصربه‌فرد‌تر ارائه بده. \n' +
      '\n' +
      'این ایده کوچیک به‌شکل ناگهانی مورد توجه قرار گرفت، تا اون‌جایی که چند ماه بعد به قوانین فروشگاه‌های استارباکس با اسم First Name Basis اضافه شد و تبلیغات تلوزیونی‌ای با همین مفهوم هم پخش شد. نام‌گذاری روی لیوان قهوه‌ها حدود چهار میلیارد بار تو ۳۰ شعبه این شرکت به‌طور مستمر اتفاق میفته و به بخشی از فرهنگ استارباکس تبدیل شده؛ فرهنگی که از ذهن یک باریستای خلاق بیرون اومد. \n';

  /*
  * add story here
  * */
  const story = [
    {
      title: "پنکه‌ای که به‌ داد علی خسروشاهی رسید",
      desc: desc1,
      img: image1,
      logo: logo1
    },
    {
      title: "همه چیز نباید ساده باشد",
      desc: desc2,
      img: image2,
      logo: logo2
    },
    {
      title: "کارگر ساده با ایده‌ای میلیون دلاری",
      desc: desc3,
      img: image3,
      logo: logo3
    },
    {
      title: "داستانِ دست‌شویی و اپل",
      desc: desc4,
      img: image4,
      logo: logo4
    },
    {
      title: "اسمت را می‌نویسیم و پول بیش‌تری در میاوریم",
      desc: desc5,
      img: image5,
      logo: logo5
    },
  ];

  const [searchParams] = useSearchParams();
  const code = searchParams.get("id");

  const [render, setRender] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!code || code > 4)
      window.location.href = '/'

    setRender(true);
    setTimeout(() => {
      setRender(false);
    }, 900);
  }, [code]);

  return (
    <div className="position-relative overflow-hidden story-bg-1">
      <div
        className={
          render
            ? "container fadeIn position-relative"
            : "container position-relative"
        }
        style={{ animationDelay: ".3s" }}
      >
        <div className="row">
          <div className="col-12">
            <div>
              <StoryHeader />
            </div>
            <div
              className="story-box mb-5 py-4 px-3"
              style={{ marginTop: "7vh" }}
            >
              <div className="d-none d-lg-block story-stone-1">
                <img src={stone3} alt="" />
              </div>
              <div className="d-none d-lg-block story-stone-2">
                <img src={stone1} alt="" />
              </div>
              <div className={'text-center mb-3'}>
                <img src={story[code]?.logo} style={{
                  width: "100%",
                  maxHeight: '80px',
                  objectFit: "contain",
                }} alt=""/>
              </div>
              <div className="mx-auto text-center my-3">
                <img
                  src={story[code]?.img}
                  style={{
                    width: "100%",
                    minHeight: "164px",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                  className="mx-auto story-detail-img"
                  alt=""
                />
              </div>
              <div
                  className="story-detail-title mt-4 d-none d-lg-block mt-lg-0"
                  style={{ fontSize: "" }} dir={'rtl'}
              >
                {story[code]?.title}
              </div>
              <div className="mt-4">
                <StoryDetails story={story} index={code} />
              </div>
              <div>
                <StoryNavigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
