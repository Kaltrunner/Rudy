import { Link } from "react-router-dom";
import CompHeader from "./CompHeader";
import CompFooter from "./CompFooter";

function About() {
    return (
        <div className="landing-container-div" >

        <CompHeader />

            <div className="landing-logo-text-div" >
                <h1 className="landing-logo-text" >.Hidden Page</h1>
            </div>

            <div className="line-between" ></div>

            <div className="button-div" ></div>

            <div className="fun-container" >
                <Link id="hidden-page-link" to="/" ><div className="fun-thing" ></div></Link>
            </div>

        <CompFooter />

        </div>
    )
}

export default About