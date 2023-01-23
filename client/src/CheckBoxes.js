import React, { useState } from "react"
import CompHeader from "./CompHeader"
import CompFooter from "./CompFooter"

function CheckBoxes() {

    const [codeAlong, setCodeAlong] = useState(true)
    const [codeAlong2, setCodeAlong2] = useState(true)
    const [codeAlong3, setCodeAlong3] = useState(true)
    const [codeAlong4, setCodeAlong4] = useState(true)

    return (
        <div className="comp-button-container-div" >

            <CompHeader />

            <div className="landing-logo-text-div" >
                <h1 className="comp-landing-logo-text" >.Checkboxes</h1>
            </div>

            <div className="comp-text-body">

                <p>Checkboxes are a common element in design, they are used as a means of allowing users to make multiple selections from a list of options.<br/> They are often used in forms, settings, and other interfaces where users need to select one or more items from a list.</p>

                <p>Designing effective checkboxes can greatly improve the user experience and make it more intuitive and efficient. </p>

                <p>They should be consistent, clear, accessible, provide feedback, use the right size, grouped together with similar options and placed near the item they correspond to.</p>

            </div>

            <div className="line-between" ></div>

            <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Standard Checkboxes</h2>

                    <p>This checkbox is used to select a single item or multiple items, typically to choose elements to perform an action.</p>

                </div>
                <div className="checkbox-field-div" >

                    <h4 className="checkbox-field-h4" >Standard checkbox examples</h4>

                    <div className="button-example-div" >

                    <label class="container">One
                        <input type="checkbox" checked="checked"/>
                        <span class="checkmark"></span>
                    </label>

                    <label class="container">Two
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>

                    <label class="container">Three
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>

                    <label class="container">Four
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>
                    
                    </div>
                    
                </div>

                {codeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <label class="container">One

                         <input type="checkbox" />

                        <span class="checkmark"></span>

                    </label>
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    /* Customize the container */
                    .container {
                        display: block;
                        position: relative;
                        padding-left: 35px;
                        margin-bottom: 12px;
                        cursor: pointer;
                        font-size: 21px;
                        user-select: none;
                    }

                    /* Hide the browser's default styles */
                    .container input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                    }

                    /* Create a custom checkbox */
                    .checkmark {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 25px;
                        width: 25px;
                        background-color: #ededee;
                        border-radius: 2px;
                        border: 1px solid #272f36;
                        transition: all .15s ease-in-out;
                    }

                    /* hover, add background color */
                    .container:hover input ~ .checkmark {
                        background-color: #c5c7c9;
                        transition: all .15s ease-in-out;
                    }

                    /* add a blue background */
                    .container input:checked ~ .checkmark {
                        background-color: #4162ff;
                        border-radius: 2px;
                    }

                    /* Create the checkmark */
                    .checkmark:after {
                        content: "";
                        position: absolute;
                        display: none;
                    }

                    /* Show the checkmark when checked */
                    .container input:checked ~ .checkmark:after {
                        display: block;
                    }

                    /* Style the checkmark */
                    .container .checkmark:after {
                        left: 9px;
                        top: 5px;
                        width: 5px;
                        height: 10px;
                        border: solid #f0f1f1;
                        border-width: 0 3px 3px 0;
                        transform: rotate(45deg);
                    }                

                    `}</pre> 
                </div>
            </div>
                   ) }

            <div className="comp-text-body" >
                    <h2>Radio Checkboxes</h2>

                    <p>This checkbox is used to select a single item or multiple items, typically to choose elements to perform an action.</p>

                </div>

                <div className="checkbox-field-div" >
                    

                    <h4 className="checkbox-field-h4" >Radio checkbox examples</h4>

                    <p></p>
                    <div className="button-example-div" >

                    <label class="radio-container">One
                        <input type="checkbox" checked="checked"/>
                        <span class="radio-checkmark"></span>
                    </label>

                    <label class="radio-container">Two
                        <input type="checkbox"/>
                        <span class="radio-checkmark"></span>
                    </label>

                    <label class="radio-container">Three
                        <input type="checkbox"/>
                        <span class="radio-checkmark"></span>
                    </label>

                    <label class="radio-container">Four
                        <input type="checkbox"/>
                        <span class="radio-checkmark"></span>
                    </label>
                    
                    </div>
                </div>

                {codeAlong2 ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong2(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <label class="radio-container">One

                        <input type="checkbox" />

                        <span class="radio-checkmark"></span>

                    </label>
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong2(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    /* Customize the container */
                    .radio-container {
                        display: block;
                        position: relative;
                        padding-left: 35px;
                        margin-bottom: 12px;
                        cursor: pointer;
                        font-size: 22px;
                        user-select: none;
                    }

                    /* Hide the browser's default styles */
                    .radio-container input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                    }

                    /* Create a custom radio button */
                    .radio-checkmark {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 25px;
                        width: 25px;
                        background-color: #eee;
                        border-radius: 50%;
                        border: 1px solid #272f36;
                        transition: all .15s ease-in-out;
                    }

                    /* hover, add background color */
                    .radio-container:hover input ~ .radio-checkmark {
                        background-color: #c5c7c9;
                        transition: all .15s ease-in-out;
                    }

                    /* add a blue background */
                    .radio-container input:checked ~ .radio-checkmark {
                        background-color: #4162ff;
                    }

                    /* Create the the dot - hidden when not checked */
                    .radio-checkmark:after {
                        content: "";
                        position: absolute;
                        display: none;
                    }

                    /* Show dot when checked */
                    .radio-container input:checked ~ .radio-checkmark:after {
                        display: block;
                    }

                    /* Style the dot */
                    .radio-container .radio-checkmark:after {
                        top: 9px;
                        left: 9px;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: #272f36;
                    }

                    `}</pre> 
                </div>
            </div>
                   ) }


            <div className="comp-text-body" >
                    <h2>X-out Checkboxes</h2>

                    <p>This checkbox is used to select a single item or multiple items, typically to delete or exclude elements from performing an action.</p>

                </div>
            <div className="checkbox-field-div" >

                    <h4 className="checkbox-field-h4" >Standard checkbox examples</h4>

                    <p></p>
                    <div className="button-example-div" >

                    <label class="x-container">One
                        <input type="checkbox" checked="checked"/>
                        <span class="x-checkmark" id="x-color-1" ></span>
                    </label>

                    <label class="x-container">Two
                        <input type="checkbox"/>
                        <span class="x-checkmark" id="x-color-2" ></span>
                    </label>

                    <label class="x-container">Three
                        <input type="checkbox"/>
                        <span class="x-checkmark" id="x-color-3" ></span>
                    </label>

                    <label class="x-container">Four
                        <input type="checkbox"/>
                        <span class="x-checkmark" id="x-color-4" ></span>
                    </label>
                    
                    </div>
                    
                </div>

                {codeAlong3 ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong3(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <label class="x-container">One

                        <input type="checkbox" />

                        <span class="x-checkmark" ></span>

                    </label>
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong3(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    /* Customize the container */
                    .x-container {
                        display: block;
                        position: relative;
                        padding-left: 35px;
                        margin-bottom: 12px;
                        cursor: pointer;
                        font-size: 21px;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                    }
                    
                    /* Hide the default checkbox */
                    .x-container input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                    }
                    
                    /* Create a custom checkbox */
                    .x-checkmark {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 25px;
                        width: 25px;
                        background-color: #ededee;
                        border-radius: 2px;
                        border: 1px solid #272f36;
                        transition: all .15s ease-in-out;
                    }
                    
                    /* Hover, add background color */
                    .x-container:hover input ~ .x-checkmark {
                        background-color: #c5c7c9;
                        border-radius: 2px;
                        transition: all .15s ease-in-out;
                    }
                    
                    /* add a red background */
                    .x-container input:checked ~ .x-checkmark {
                        background-color: #ff2400;
                        border-radius: 2px;
                    }
                    
                    /* Create the X hidden when not checked */
                    .x-checkmark:after {
                        content: "";
                        position: absolute;
                        display: none;
                    }
                    
                    /* Show the X when checked */
                    .x-container input:checked ~ .x-checkmark:after {
                        display: block;
                        content: "X";
                    }
                    
                    /* Style the X */
                    .x-container .x-checkmark:after {
                        left: 6px;
                        top: 1px;
                        width: 5px;
                        height: 10px;
                        border-width: 0 3px 3px 0;
                    }

                    `}</pre> 
                </div>
            </div>
                   ) }


                <div className="comp-text-body" >
                    <h2>Disabled Checkboxes</h2>

                    <p>To indicate that an action is currently unavailable, all checkbox variations can be seen in thier Disabled state.</p>

                </div>
            <div className="checkbox-field-div" >

                    <h4 className="checkbox-field-h4" >Standard and Radio disabled checkbox examples</h4>

                    <div className="button-example-div" >

                    <label class="dis-container">One
                        <input type="checkbox" checked="checked"/>
                        <span class="dis-checkmark" ></span>
                    </label>

                    <label class="dis-container">Two
                        <input type="checkbox" checked="checked"/>
                        <span class="dis-checkmark" ></span>
                    </label>

                    <label class="dis-container-radio">Three
                        <input type="checkbox" checked="checked"/>
                        <span class="dis-checkmark-radio" ></span>
                    </label>

                    <label class="dis-container-radio">Four
                        <input type="checkbox" checked="checked"/>
                        <span class="dis-checkmark-radio" ></span>
                    </label>
                    
                    </div>
                    
                </div>

                {codeAlong4 ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong4(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <label class="disabled-container">One

                        <input type="checkbox" />

                        <span class="disabled-checkmark" ></span>

                    </label>
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong4(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`
                    /* Customize the container */
                    .disabled-container {
                        display: block;
                        position: relative;
                        padding-left: 35px;
                        margin-bottom: 12px;
                        cursor: not-allowed;
                        font-size: 21px;
                        user-select: none;
                    }
                    
                    /* Hide the default checkbox */
                    .disabled-container input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                    }
                    
                    /* Create a custom checkbox */
                    .disabled-checkmark {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 25px;
                        width: 25px;
                        background-color: #c5c7c9;
                        border-radius: 2px;
                        border: 1px solid #272f36;
                        transition: all .15s ease-in-out;
                    }
                    
                    
                    /* Create the X when not checked */
                    .disabled-checkmark:after {
                        content: "";
                        position: absolute;
                        display: none;
                    }
                    
                    /* Show the X when checked */
                    .disabled-container input:checked ~ .dis-checkmark:after {
                        display: block;
                        content: "X";
                    }
                    
                    /* Style the X */
                    .disabled-container .dis-checkmark:after {
                        left: 6px;
                        top: 1px;
                        width: 5px;
                        height: 10px;
                        border-width: 0 3px 3px 0;
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

export default CheckBoxes