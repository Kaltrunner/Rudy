import { Link } from "react-router-dom";
import React, { useState } from 'react';
import CompHeader from "./CompHeader";
import CompFooter from "./CompFooter";

function DropDowns() {

    const [showDropdown, setShowDropdown] = useState("");
    const [codeAlong, setCodeAlong] = useState(true);
    // const [showDropdownTwo, setShowDropdownTwo] = useState("");

    return (
        <div className="comp-button-container-div" >

            <CompHeader />

            <div className="landing-logo-text-div" >
                <h1 className="comp-landing-logo-text" >.Drop-Downs</h1>
            </div>

            <div className="comp-text-body">

                <p>Drop-down menus, also known as drop-down lists or select menus, are a common element in design,<br/> they are used as a means of allowing users to select an option from a list of choices.<br/> They are often used in forms, settings, and other interfaces where users need to select one item from a list of options.</p>

                <p>Designing effective drop-down menus can greatly improve the user experience and make it more intuitive and efficient.</p>

                <p>They should be consistent, clear, accessible, provide feedback,<br/> use the right size, grouped together with similar options, placed near the item they correspond to,<br/> and show the default or selected option.</p>
                
            </div>
    
            <div>

            </div>

            <div className="line-between" ></div>

            <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Standard Drop-Downs</h2>
                    
                    <p>A dropdown presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location.<br/>Standard dropdowns present users with a menu of items upon clicking a dropdown toggle or button. </p>

                </div>

                <div className="dropdown-field-div" >
                    <h3 className="toggle-h3-text" >Standard example</h3>
                    
                    <div className="toggle-example-div" >

                    <div>
            <button className="drop-button-1" onClick={() => setShowDropdown(!showDropdown)}>
               - Dropdown - <img className="dropdown-img" src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTYuODQzIDEwLjIxMWMuMTA4LS4xNDEuMTU3LS4zLjE1Ny0uNDU2IDAtLjM4OS0uMzA2LS43NTUtLjc0OS0uNzU1aC04LjUwMWMtLjQ0NSAwLS43NS4zNjctLjc1Ljc1NSAwIC4xNTcuMDUuMzE2LjE1OS40NTcgMS4yMDMgMS41NTQgMy4yNTIgNC4xOTkgNC4yNTggNS40OTguMTQyLjE4NC4zNi4yOS41OTIuMjkuMjMgMCAuNDQ5LS4xMDcuNTkxLS4yOTEgMS4wMDItMS4yOTkgMy4wNDQtMy45NDUgNC4yNDMtNS40OTh6Ii8+PC9zdmc+" alt="back button" />
            </button>
                        {showDropdown ? (
                    <div className="dropdownOne">
                    <header>
                        <p className="drop-links" >Option 1</p>
                        <p className="drop-links" >Option 2</p>
                        <p className="drop-links" >Option 3</p>
                        <Link id="about-link" to="/About"><p className="drop-links" >Option 4</p></Link>
                    </header>
        </div>
      ) : null}
    </div>

                    </div>

                </div>

                {codeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >REACT</button>      
                    <button onClick={() => setCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    import React, { useState } from 'react';

                    const [showDropdown, setShowDropdown] = useState("");


                    <div>

                        <button className="drop-button" onClick={() => 
                            setShowDropdown(!showDropdown)>

                       - Dropdown - <img src="" alt="" />

                    </button>
                                {showDropdown ? (

                            <div className="dropdown">

                            <header>
                                <p className="drop-links" >Option 1</p>
                                <p className="drop-links" >Option 2</p>
                                <p className="drop-links" >Option 3</p>
                                <p className="drop-links" >Option 4</p>
                            </header>

                </div>

              ) : null}

            </div>
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong(true)} className="css-button" >REACT</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    // Dropdown Styles
                    .drop-button {
                        width: 240px;
                        padding: 2px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #f0f1f1;
                        border: 1px solid #101820;
                        border-radius: 2px;
                        font-size: 18px;
                        cursor: pointer;
                    }
                    .drop-button:hover {
                        background-color: #dedfe0;
                    }

                    .dropdown-content {
                        display: none;
                        text-align: center;
                        min-width: 160px;
                        padding: 2px;
                    }

                    .drop-links {
                        cursor: pointer;
                        text-align: center;
                    }

                    `}</pre> 
                </div>
            </div>
                   ) }
        </div>

        {/* <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>.Standard hover Drop-Down</h2>
                    
                    <p>A dropdown presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location.<br/>Standard dropdowns present users with a menu of items upon clicking a dropdown toggle or button. </p>

                </div>

                <div className="dropdown-field-div" >
                    <h3 className="toggle-h3-text" >Hover example</h3>
                    
                    <div className="toggle-example-div" >

                    <header className="header-drop" >
  <div className="header-content">
    
    <a className="drop-logo">- Drop-Down -</a>
    
    <input type="checkbox" id="drop-hamburger" aria-label="menu button"/>
    <label className="drop-hamburger" for="hamburger"><span></span></label>
    
    <nav aria-label="main navigation">
      <ul className="menus">
        <li>
          <button 
            type="button" 
            aria-haspopup="true" 
            aria-expanded="true" 
            aria-controls="dropdown1"  
          >
             <img className="dropdown-img" src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTYuODQzIDEwLjIxMWMuMTA4LS4xNDEuMTU3LS4zLjE1Ny0uNDU2IDAtLjM4OS0uMzA2LS43NTUtLjc0OS0uNzU1aC04LjUwMWMtLjQ0NSAwLS43NS4zNjctLjc1Ljc1NSAwIC4xNTcuMDUuMzE2LjE1OS40NTcgMS4yMDMgMS41NTQgMy4yNTIgNC4xOTkgNC4yNTggNS40OTguMTQyLjE4NC4zNi4yOS41OTIuMjkuMjMgMCAuNDQ5LS4xMDcuNTkxLS4yOTEgMS4wMDItMS4yOTkgMy4wNDQtMy45NDUgNC4yNDMtNS40OTh6Ii8+PC9zdmc+" alt="back button" /><span className="arrow"></span>   
          </button>
          <ul className="dropdown" id="dropdown1">
            <li><a href="#">Option-5</a></li> 
            <li><a href="#">Option-6</a></li>
            <li><a href="#">Option-7</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</header>

                    </div>

                </div>

                <div className="code-along-div">
                <div className="code-along-text" >
                    <p>code...</p> 
                </div>
            </div>
        </div> */}

            <CompFooter />

        </div>
    )
}

export default DropDowns;