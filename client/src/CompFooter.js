import { Link } from "react-router-dom";

function CompFooter() {

    return (
        <div className="footer-div" >
            
            <div className="comp-footer-container" >

            <Link to="/Alerts" ><button className="comp-footer-buttons" >Alerts</button></Link>

            <p>|</p>

            <Link to="/Buttons" ><button className="comp-footer-buttons" >Buttons</button></Link>

            <p>|</p>

            <Link to="/CheckBoxes" ><button className="comp-footer-buttons" >Checkboxes</button></Link>

            <p>|</p>

            <Link to="/ColorGrids" ><button className="comp-footer-buttons" >Color Grids</button></Link>

            <p>|</p>

            <Link to="/DropDowns" ><button className="comp-footer-buttons" >Drop-Downs</button></Link>

            <p>|</p>

            <Link to="/InputFields" ><button className="comp-footer-buttons" >Input Fields</button></Link>

            <p>|</p>

            <Link to="/RangeSliders" ><button className="comp-footer-buttons" >Range Sliders</button></Link>

            <p>|</p>

            <Link to="/SearchBars" ><button className="comp-footer-buttons" >Search Bars</button></Link>

            <p>|</p>

            <Link to="/Toggles" ><button className="comp-footer-buttons" >Toggles</button></Link>

       </div>
            
        </div>
    )
}

export default CompFooter;