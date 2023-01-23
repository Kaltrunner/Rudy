import React, { useState } from 'react';
import CompHeader from "./CompHeader"
import CompFooter from "./CompFooter"

function Toggles() {

    const [codeAlong, setCodeAlong] = useState(true)
    const [codeAlong2, setCodeAlong2] = useState(true)
    const [codeAlong3, setCodeAlong3] = useState(true)
    const [codeAlong4, setCodeAlong4] = useState(true)

    return (
        <div className="comp-button-container-div" >

            <CompHeader />

            <div className="landing-logo-text-div" >
                <h1 className="comp-landing-logo-text" >.Toggles</h1>
            </div>

            <div className="comp-text-body">

                <p>Toggles, also known as toggle buttons or switch controls, are a common element in design.<br/> They are used as a means of allowing users to switch between two or more states, such as on and off, true and false, or multiple options.<br/> They are often used in forms, settings, and other interfaces where users need to enable or disable certain features or options.</p>

                <p>Designing effective toggles can greatly improve the user experience and make it more intuitive and efficient.</p>

                <p></p>
                
            </div>

            <div className="line-between" ></div>

            <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Toggle Variants</h2>
                    
                    <p>Toggles can be useful in situations where the user needs to quickly enable<br/> or disable a feature or setting and it is important to give the user a clear and simple way of doing that.</p>

                    <p>Toggles can be implemented in a variety of ways, they can be represented visually as on/off buttons, or as a sliding control. <br/>They allow users to switch between two or more states. They are often used to enable or disable specific features or settings within an interface.</p>

                </div>

                <div className="toggle-field-div" >
                    <h3 className="toggle-h3-text" >Primary</h3>
                    
                    <div className="toggle-example-div" >

                    <input className="toggle-1" type="checkbox" />
                    <input className="toggle-2" type="checkbox" />
                    <input className="toggle-3" type="checkbox" />
                    <input className="toggle-4" type="checkbox" />

                    </div>

                </div>

                {codeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <input className="toggle" type="checkbox" />              
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    .toggle {
                        appearance: none;
                        width: 62px;
                        height: 32px;
                        display: inline-block;
                        position: relative;
                        border-radius: 2px;
                        overflow: hidden;
                        border: 1px solid #121c26;
                        cursor: pointer;
                        color: #121c26;
                        background-color:  #7d8186;
                        transition: background-color ease .25s;
                    }
                    
                    .toggle:before {
                        content: "on off";
                        display: block;
                        position: absolute;
                        z-index: 2;
                        width: 26px;
                        height: 26px;
                        background: #121c26;
                        left: 2px;
                        top: 2px;
                        border-radius: 2px;
                        font: 10px/28px Helvetica;
                        text-transform: uppercase;
                        font-weight: bold;
                        text-indent: -22px;
                        word-spacing: 37px;
                        color: whitesmoke;
                        text-shadow: -1px -1px rgba(0,0,0,0.15);
                        white-space: nowrap;
                        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
                        transition: all 0.25s;
                    }
                    
                    .toggle:checked {
                        background-color: whitesmoke;;
                        color: #121c26;
                    }
                    
                    .toggle:checked:before {
                        left: 32px;
                        color: #121c26;
                    }

                    `}</pre> 
                </div>
            </div>
                   ) }
        </div>

        <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Rounded Toggles</h2>
                    
                    <p>This toggle variant acts the same at the primary, the only difference is that the border and switch have a border-radius of 25px.</p>

                </div>

                <div className="toggle-field-div" >
                    <h3 className="toggle-h3-text" >Rounded</h3>

                    <div className="toggle-example-div" >

                    <input className="toggle-1" id="round-toggle" type="checkbox" />
                    <input className="toggle-2" id="round-toggle" type="checkbox" />
                    <input className="toggle-3" id="round-toggle" type="checkbox" />
                    <input className="toggle-4" id="round-toggle" type="checkbox" />

                    </div>
                    

                </div>

                {codeAlong2 ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong2(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <input className="toggle" id="round-toggle" type="checkbox" />
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong2(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    .toggle {
                        appearance: none;
                        width: 62px;
                        height: 32px;
                        display: inline-block;
                        position: relative;
                        border-radius: 25px;
                        overflow: hidden;
                        border: 1px solid #121c26;
                        cursor: pointer;
                        color: #121c26;
                        background-color:  #7d8186;
                        transition: background-color ease .25s;
                    }
                    
                    .toggle:before {
                        content: "on off";
                        display: block;
                        position: absolute;
                        z-index: 2;
                        width: 26px;
                        height: 26px;
                        background: #121c26;
                        left: 2px;
                        top: 2px;
                        border-radius: 25px;
                        font: 10px/28px Helvetica;
                        text-transform: uppercase;
                        font-weight: bold;
                        text-indent: -22px;
                        word-spacing: 37px;
                        color: whitesmoke;
                        text-shadow: -1px -1px rgba(0,0,0,0.15);
                        white-space: nowrap;
                        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
                        transition: all 0.25s;
                    }
                    
                    .toggle:checked:before {
                        left: 32px;
                        color: #121c26;
                    }
                    .toggle:checked {
                        background-color: whitesmoke;;
                        color: #121c26;
                    }

                    #round-toggle:before {
                        border-radius: 25px;
                    }
                    #round-toggle {
                        border-radius: 25px;
                    }

                    `}</pre> 
                </div>
            </div>
                   ) }
        </div>

        <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Reversed Toggles</h2>
                    
                    <p>This toggle variant has a right side resting state, or "OFF" possition.<br/> These toggles have the same attributes as the primary & rounded.</p>

                </div>

                <div className="toggle-field-div" >
                    <h3 className="toggle-h3-text" >Reversed</h3>
                    
                    <div className="toggle-example-div" >

                    <input className="reverse-toggle-1" id="reverse-toggle" type="checkbox" />
                    <input className="reverse-toggle-2" id="reverse-toggle" type="checkbox" />
                    <input className="reverse-toggle-3" id="reverse-round-toggle" type="checkbox" />
                    <input className="reverse-toggle-4" id="reverse-round-toggle" type="checkbox" />

                    </div>

                </div>

                {codeAlong3 ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong3(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <input className="toggle" id="reverse-toggle" type="checkbox" />
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong3(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    .toggle {
                        appearance: none;
                        width: 62px;
                        height: 32px;
                        display: inline-block;
                        position: relative;
                        border-radius: 2px;
                        overflow: hidden;
                        border: 1px solid #121c26;
                        cursor: pointer;
                        color: #121c26;
                        background-color:  whitesmoke;
                        transition: background-color ease .25s;
                    }
                    
                    .toggle:before {
                        content: "off on";
                        display: block;
                        position: absolute;
                        z-index: 2;
                        width: 26px;
                        height: 26px;
                        background: #121c26;
                        left: 2px;
                        top: 2px;
                        border-radius: 2px;
                        font: 10px/28px Helvetica;
                        text-transform: uppercase;
                        font-weight: bold;
                        text-indent: -25px;
                        word-spacing: 35px;
                        color: #121c26;
                        text-shadow: -1px -1px rgba(0,0,0,0.15);
                        white-space: nowrap;
                        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
                        transition: all 0.25s;
                    }
                    
                    .toggle:checked:before {
                        left: 32px;
                        color: #121c26;
                    }
                    .toggle:checked {
                        background-color: whitesmoke;;
                        color: #121c26;
                    }

                    `}</pre> 
                </div>
            </div>
                   ) }
        </div>

        <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Disabled Toggles</h2>
                    
                    <p>To indicate that an action is currently unavailable, all toggles variations can be seen in thier Disabled state.</p>

                </div>

                <div className="toggle-field-div" >
                    <h3 className="toggle-h3-text" >Disabled</h3>

                    <div className="toggle-example-div" >

                    <input className="toggle-1" id="disabled-toggle" type="checkbox" />
                    <input className="toggle-2" id="disabled-toggle" type="checkbox" />
                    <input className="toggle-3" id="disabled-round-toggle" type="checkbox" />
                    <input className="toggle-4" id="disabled-round-toggle" type="checkbox" />

                    </div>

                </div>

                {codeAlong4 ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong4(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <input className="toggle" id="disabled-toggle" type="checkbox" />
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong4(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    #disabled-toggle {
                        appearance: none;
                        width: 62px;
                        height: 32px;
                        display: inline-block;
                        position: relative;
                        border-radius: 2px;
                        overflow: hidden;
                        border: 1px solid #121c26;
                        cursor:not-allowed;
                        color: #121c26;
                        background-color:  #7d8186;
                        transition: background-color ease .25s;
                    }
                    
                    #disabled-toggle:before {
                        content: "on off";
                        display: block;
                        position: absolute;
                        z-index: 2;
                        width: 26px;
                        height: 26px;
                        background: #121c26;
                        left: 2px;
                        top: 2px;
                        border-radius: 2px;
                        font: 10px/28px Helvetica;
                        text-transform: uppercase;
                        font-weight: bold;
                        text-indent: -22px;
                        word-spacing: 37px;
                        color: whitesmoke;
                        text-shadow: -1px -1px rgba(0,0,0,0.15);
                        white-space: nowrap;
                        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
                        transition: all 0.25s;
                    }

                    `}</pre> 
                </div>
            </div>
                   ) }
        </div>

            <CompFooter />

        </div>
    )
}

export default Toggles