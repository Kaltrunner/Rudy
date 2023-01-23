import { Link } from "react-router-dom";
import Header from "./Header"
import ComponentsFooter from "./ComponentsFooter"
import ScrollToTop from "./ScrollToTop"

function Components() {
    return (
        <div className="comp-container-div" >
            <Header />
            <div className="comp-text-div" >
                <h1>.Components</h1>
            </div>
            <div className="comp-text-body" >
                <p>This is a comprehensive list comprised of all of our design components. <br/>
                 All components feture an active and inactive state.<br/>
                Lastly, most all components will have HTML or React and CSS code that can be used in your own project.<br/>
                <br/>
                </p>
            </div>
            <div className="line-between" ></div>
            <div className="comp-link-list" >
                <ul>

                    <Link to="/Alerts" className="comp-link-list" ><li className="comp-link" >Alerts</li><br/></Link>

                    <Link to="/Buttons" className="comp-link-list" ><li className="comp-link" >Buttons</li><br/></Link>

                    <Link to="/CheckBoxes" className="comp-link-list" ><li className="comp-link" >Checkboxes</li><br/></Link>

                    <Link to="/ColorGrids" className="comp-link-list" ><li className="comp-link" >Color Grids</li><br/></Link>

                    <Link to="/DropDowns" className="comp-link-list" ><li className="comp-link" >Dropdowns</li><br/></Link>

                    <Link to="/InputFields" className="comp-link-list" ><li className="comp-link" >Input Fields</li><br/></Link>

                    <Link to="/RangeSliders" className="comp-link-list" ><li className="comp-link" >Range Sliders</li><br/></Link>

                    <Link to="/SearchBars" className="comp-link-list" ><li className="comp-link" >Search Bars</li><br/></Link>

                    <Link to="/Toggles" className="comp-link-list" ><li className="comp-link" >Toggles</li><br/></Link>

                </ul>
            </div>

        <ComponentsFooter />
        <ScrollToTop />

        </div>
    )
}

export default Components;