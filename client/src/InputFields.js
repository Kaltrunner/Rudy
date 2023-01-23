import React, { useState } from 'react';
import CompHeader from "./CompHeader"
import CompFooter from "./CompFooter"

function InputFields() {

    const [codeAlong, setCodeAlong] = useState(true)
    const [codeAlong2, setCodeAlong2] = useState(true)
    const [codeAlong3, setCodeAlong3] = useState(true)

    return (
        <div className="comp-button-container-div" >

            <CompHeader />

            <div className="landing-logo-text-div" >
                <h1 className="comp-landing-logo-text" >.Input Fields</h1>
            </div>

            <div className="comp-text-body">

                <p>Input fields in design refer to the specific areas in a user interface where users can enter information,<br/> such as text, numbers, or dates. These can be found in forms, search bars, and other interactive elements.<br/> They are typically designed to be easily identifiable and accessible, with clear labels and instructions for the user.<br/> The design of input fields can greatly impact the user experience, so it's important to ensure that they are intuitive, user-friendly, and visually pleasing.</p>

                <p>Input fields are an essential part of any user interface, as they allow users to enter data and interact with the system.<br/> The design of these fields should be consistent with the overall design of the interface, and should be intuitive and easy to use.<br/> The placement, labeling, and error handling of input fields are important factors to consider when designing them.<br/> Additionally, it is also important to consider accessibility and making sure that the input fields are usable by people with disabilities.</p>
                
            </div>

            <div className="line-between" ></div>

            <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Text Input Field</h2>
                    <p>Input fields are used to collect information from users, such as their name, email address, or password.</p>

                    <p>Form submission handling: When the form is submitted, the input fields can be check for errors before the form is submitted.<br/> If errors are found, the form can be prevented from being submitted, and the user can be notified of the errors.</p>

                </div>
                <div className="input-field-div" >
                    <h3 className="input-h3-text" >Plain Text Input Field</h3>
                    <input type="text" 
                    id="plain-input" 
                    placeholder="Text"
                    autoComplete="off" >
                    </input>

                </div>

                {codeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <input type="text" 

                        id="text-input" 

                        placeholder="Text"

                        autoComplete="off" >

                    </input>
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    #text-input {
                        height: 38px;
                        width: 520px;
                        border: 1px solid #101820;
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        font-size: 22px;
                        background-color: #ededee;
                        text-align: center;
                        letter-spacing: 0.125em;
                    }
                    #text-input:focus {
                        background-color:  #dedfe0;
                        outline: none !important;
                        letter-spacing: 0.125em;
                    }

                    `}</pre> 
                </div>
            </div>
                   ) }

            </div>

            <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Password Input Field</h2>
                    <p>Password input fields are used to collect sensitive information, such as login credentials, from users in a secure manner.<br/> They typically hide the characters typed by the user, replacing them with dots or asterisks,<br/> to prevent others from seeing the password.<br/> They may also include features such as masking and validation to help ensure that strong and secure passwords are used.</p>
                </div>

                <div className="password-field-div" >
                    <h3 className="input-h3-text" >Plain Text Password Field</h3>

                    <input type="password" 
                    id="password-input" 
                    placeholder="Password" 
                    autoComplete="off" >
                    </input>
                    
                </div>
                {codeAlong2 ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong2(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <input type="password" 

                        id="password-input" 

                        placeholder="Password"

                        autoComplete="off" >

                    </input>

  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong2(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    #password-input {
                        height: 38px;
                        width: 520px;
                        border: 2px solid #101820;
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        font-size: 22px;
                        background-color: #ededee;
                        text-align: center;
                        letter-spacing: 0.125em;
                    }
                    #password-input:focus {
                        background-color:  #dedfe0;
                        outline: none !important;
                        letter-spacing: 0.125em;
                    }

                    `}</pre> 
                </div>
            </div>
                   ) }
            
            </div>

            <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Error Input Field</h2>
                    <p>Error input fields are input fields that have validation errors.<br/> They are typically used to indicate to the user that the input provided is not valid,<br/> and to provide guidance on how to correct the input.</p>

                    <p>One of the most common ways to indicate an error is to add a visual cue, such as a red border or background color, to the input field.<br/> This makes it clear to the user that the input is invalid.</p>
                </div>
                <div className="error-field-div" >
                    <h3 className="input-h3-text" >Error Input Field</h3>
                    <input type="text" 
                    id="error-input" 
                    placeholder="Error"
                    autoComplete="off" >
                    </input>

                </div>
                
                {codeAlong3 ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong3(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <input type="text" 

                        id="error-input" 

                        placeholder="Error"

                        autoComplete="off" >

                    </input>
                    
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong3(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    #error-input {
                        height: 38px;
                        width: 520px;
                        border: 2px solid #101820;
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        font-size: 22px;
                        background-color: #ededee;
                        text-align: center;
                        letter-spacing: 0.125em;
                    }
                    #error-input:focus {
                        background-color:  #ffe9e5;
                        border: 2px solid #ff2400;
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        outline: none !important;
                        letter-spacing: 0.125em;
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

export default InputFields