import React from "react";
import { useSearchParams } from "react-router-dom/dist/umd/react-router-dom.development";
import { useNavigate } from "react-router-dom";

const StoryNavigation = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("id");
  const navigate = useNavigate();

  const onNext = () => {
   code < 4 ? navigate(`/story?id=${parseInt(code) + 1}`) : void null
  };
  const onPrev = () => {
    code > 0 ? navigate(`/story?id=${parseInt(code) - 1}`) : void null
  }

  return (
    <div className="container">
      <div className="row" dir="rtl">
        <div className={"col-12 col-lg-6"}>
          <div className={code > 3 ? "story-navigation off my-3" : "story-navigation my-3"} onClick={onNext} dir="ltr">
            <div style={ code > 3 ? { color: "rgba(255, 255, 255, 0.50)" } : { color: "rgba(255, 255, 255, 1)" }}>
              داستان بعدی
            </div>
            <div style={{transform: 'rotate(180deg)'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.8437 9.52975C3.38543 11.4834 3.38543 13.5166 3.8437 15.4703C4.50549 18.2916 6.70841 20.4945 9.52975 21.1563C11.4834 21.6146 13.5166 21.6146 15.4703 21.1563C18.2916 20.4945 20.4945 18.2916 21.1563 15.4703C21.6146 13.5166 21.6146 11.4834 21.1563 9.52975C20.4945 6.70842 18.2916 4.50549 15.4703 3.8437C13.5166 3.38543 11.4834 3.38544 9.52975 3.8437C6.70842 4.50549 4.50549 6.70841 3.8437 9.52975ZM11.967 15.3175C11.7327 15.5518 11.3528 15.5518 11.1184 15.3175L8.72523 12.9243C8.61271 12.8117 8.5495 12.6591 8.5495 12.5C8.5495 12.3409 8.61271 12.1883 8.72523 12.0757L11.1184 9.68252C11.3528 9.44821 11.7327 9.44821 11.967 9.68252C12.2013 9.91684 12.2013 10.2967 11.967 10.531L10.598 11.9H15.8505C16.1819 11.9 16.4505 12.1686 16.4505 12.5C16.4505 12.8314 16.1819 13.1 15.8505 13.1L10.598 13.1L11.967 14.469C12.2013 14.7033 12.2013 15.0832 11.967 15.3175Z"
                  fill="white"
                  fillOpacity={code > 3 ? "0.5" : "1"}
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={"col-12 col-lg-6"}>
          <div className={code < 1 ? "story-navigation off my-3" : "story-navigation my-3"} onClick={onPrev}>
            <div className={''} style={code < 1 ? { color: "rgba(255, 255, 255, 0.50)" } : { color: "rgba(255, 255, 255, 1)" }}>داستان قبلی</div>
            <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.8437 9.52975C3.38543 11.4834 3.38543 13.5166 3.8437 15.4703C4.50549 18.2916 6.70841 20.4945 9.52975 21.1563C11.4834 21.6146 13.5166 21.6146 15.4703 21.1563C18.2916 20.4945 20.4945 18.2916 21.1563 15.4703C21.6146 13.5166 21.6146 11.4834 21.1563 9.52975C20.4945 6.70842 18.2916 4.50549 15.4703 3.8437C13.5166 3.38543 11.4834 3.38544 9.52975 3.8437C6.70842 4.50549 4.50549 6.70841 3.8437 9.52975ZM11.967 15.3175C11.7327 15.5518 11.3528 15.5518 11.1184 15.3175L8.72523 12.9243C8.61271 12.8117 8.5495 12.6591 8.5495 12.5C8.5495 12.3409 8.61271 12.1883 8.72523 12.0757L11.1184 9.68252C11.3528 9.44821 11.7327 9.44821 11.967 9.68252C12.2013 9.91684 12.2013 10.2967 11.967 10.531L10.598 11.9H15.8505C16.1819 11.9 16.4505 12.1686 16.4505 12.5C16.4505 12.8314 16.1819 13.1 15.8505 13.1L10.598 13.1L11.967 14.469C12.2013 14.7033 12.2013 15.0832 11.967 15.3175Z"
                  fill="white"
                  fillOpacity={code < 1 ? "0.5" : "1"}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryNavigation;
