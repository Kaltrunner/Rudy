import { Link } from "react-router-dom";
import CompHeader from "./CompHeader";
import CompFooter from "./CompFooter";
import ScrollToTop from "./ScrollToTop";

function About() {
  return (
    <div className="landing-container-div">
      <CompHeader />

      <div className="landing-logo-text-div">
        <h1 className="landing-logo-text">.Hidden Page</h1>
      </div>

      <div className="line-between"></div>

      <div className="button-div"></div>

      <div className="under-line-div" >
        <h2 className="under-line">
          CONGRATULATIONS YOU HAVE REACHED A HIDDEN PAGE!
        </h2>
      </div>

      <div className="fun-container">
        <Link id="hidden-page-link" to="/">
          <div className="fun-thing"></div>
        </Link>
      </div>

      <div className="stacked-box-div" >
        <div className="stacked-box-1" ></div>
        <div className="stacked-box-2" ></div>
        <div className="stacked-box-3" ></div>
        <div className="stacked-box-4" ></div>
      </div>

      <CompFooter />
      <ScrollToTop />
    </div>
  );
}

export default About;
