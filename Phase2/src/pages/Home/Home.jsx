import Navbar from "../Navbar/Navbar";
import Beginning from "./Beginning/Beginning";
import ComingSoon from "./ComingSoon";
import Stories from "./Stories/Stories";
import Challenge from "./Challenges/Challenge";
import {useEffect} from "react";

export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="position-relative overflow-hidden">
      <div className="home-earth-bg fadeIn"></div>
      <div className={"container fadeIn"}>
        <div className="row">
          <div className="col-12">
            <div>
              <Navbar />
            </div>
            <div className={'d-flex flex-column justify-content-center'} style={{ height: "90vh" }}>
              <div className="pt-5 pt-lg-0">
                <Beginning />
              </div>
            </div>
            <div>
              <Challenge/>
            </div>
            <div className="pt-lg-5">
              <Stories />
            </div>
            <div className="pt-5">
              <ComingSoon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
