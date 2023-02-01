import React, { useState } from "react"
import CompHeader from "./CompHeader"
import CompFooter from "./CompFooter"
import ScrollToTop from "./ScrollToTop"

function Buttons() {

    const [codeAlong, setCodeAlong] = useState(true)
    const [disCodeAlong, setDisCodeAlong] = useState(true)
    const [smallCodeAlong, setSmallCodeAlong] = useState(true)
    const [largeCodeAlong, setLargeCodeAlong] = useState(true)

    // function handleCodeClick() {

    // }

    return (
        <div className="comp-button-container-div" >

            <CompHeader />

            <div className="landing-logo-text-div" >
                <h1 className="comp-landing-logo-text" >.Buttons</h1>
            </div>

            <div className="comp-text-body">
                <p>Buttons are a common element in design, they are used as interactive elements in user interfaces, such as websites and mobile apps.<br/> They can be used to initiate an action, such as submitting a form, navigating to a new page, or triggering an event.</p>

            <p>Designing effective buttons can greatly improve the user experience and make it more intuitive and efficient.</p>

            <p>A well-designed button can greatly improve the user experience by making it more intuitive and efficient.<br/> They should be visually distinct, consistent, clear, accessible and provide feedback.</p>

            </div>


            <div className="line-between" ></div>

            <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Standard Button examples</h2>

                    <p>Here are several button styling variants to be used in different scenarios as needed.</p>

                    <p><strong>Primary</strong> buttons are the most visually prominent variant. Use for the most important call to action.</p>

                    <p><strong>Secondary / Rounded</strong> buttons are less visually prominant than primary buttons. Use for general actions on a page that require less emphasis than primary buttons.</p>

                    <p><strong>Warning</strong> buttons may be used for actions that change an important setting or behavior, but not in a destructive or irreversible way.</p>

                    <p><strong>Danger</strong> buttons may be used for actions that are potentially destructive or difficult/impossible to undo. </p>

                </div>
                <div className="button-field-div" >

                    <h4 className="button-field-h4" >Standard button examples</h4>

                    <p></p>
                    <div className="button-example-div" >
                        <button className="button-example" id="primary-button" >Primary</button>
                        <button className="button-example" id="secondary-button" >Secondary</button>
                    
                        <button className="button-example" id="other-button" >Rounded</button>
                    
                        <button className="button-example" id="warning-button" >Warning</button>
                        <button className="button-example" id="danger-button" >Danger</button>
                    </div>
                </div>
            {codeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <div class="button-container" >

                        <button class="primary" >
                            "Click me!"
                        </button>

                    </div>    
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`
                    // Primary button styles
                    .primary {
                        width: 140px;
                        height: 55px;
                        margin: 8px;
                        font-size: 19px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #101820;
                        transition: all 0.15s ease-in-out;
                            }
                    .primary:hover {
                        background-color: #d3d5d6; 
                        box-shadow: 3px 3px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                            }

                    // Secondary button styles
                    .primary {
                        width: 140px;
                        height: 55px;
                        margin: 8px;
                        font-size: 19px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: whitesmoke;
                        transition: all 0.15s ease-in-out;
                            }
                    .primary:hover {
                        box-shadow: 4px 4px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                            }

                    // Rounded button styles
                    .primary {
                        width: 140px;
                        height: 55px;
                        margin: 8px;
                        font-size: 19px;
                        border-radius: 8px;
                        border: 1px solid #101820;
                        background-color: whitesmoke;
                        transition: all 0.25s ease-in-out;
                            }
                    .primary:hover {
                        border: 25px solid #101820;
                        box-shadow: 4px 4px 0 0;
                        transition: all .25s ease-in-out;
                        cursor: pointer;
                            }

                    // Warning button styles
                    .primary {
                        width: 140px;
                        height: 55px;
                        margin: 8px;
                        font-size: 19px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #ffffb7;
                        transition: all 0.15s ease-in-out;
                            }
                    .primary:hover {
                        background-color: #ffff4d;
                        box-shadow: 3px 3px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                            }
                    
                    // Danger button styles
                    .primary {
                        width: 140px;
                        height: 55px;
                        margin: 8px;
                        font-size: 19px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #ffe9e5;
                        transition: all 0.15s ease-in-out;
                                }
                    .primary:hover {
                        background-color: #ff2400;
                        box-shadow: 3px 3px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                                }

                    `}</pre> 
                </div>
            </div>
                   ) }

            </div>

            <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Small</h2>

                    <p>To fit into tight spaces, primary, secondary, rounded, warning, and danger button variations can be made smaller.<br/>They all have the same attributes as the .Standard variants.
                    </p>

                </div>
                <div className="button-field-div" >

                    <h4 className="button-field-h4" >Small button examples</h4>

                    <p></p>
                    <div className="button-example-div" >
                        <button className="small-button-example" id="small-primary-button" >Primary</button>
                        <button className="small-button-example" id="small-secondary-button" >Secondary</button>
                    
                        <button className="small-button-example" id="small-other-button" >Rounded</button>
                    
                        <button className="small-button-example" id="small-warning-button" >Warning</button>
                        <button className="small-button-example" id="small-danger-button" >Danger</button>
                    </div>
                </div>

                {smallCodeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setSmallCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`
                    <div class="button-container" >

                    <button class="small" >
                        "Click!"
                    </button>

                    </div> 
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setSmallCodeAlong(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`
                        // Primary Small button styles
                    .small {
                        width: 85px;
                        height: 40px;
                        margin: 10px;
                        font-size: 12px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #101820;
                        transition: all 0.15s ease-in-out;
                            }
                    .small:hover {
                        background-color: #d3d5d6;
                        box-shadow: 3px 3px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                            }

                    // Secondary Small button styles
                    .small {
                        width: 85px;
                        height: 40px;
                        margin: 10px;
                        font-size: 12px;
                        border-radius: 2px;
                        border: 2px solid #101820;
                        background-color: whitesmoke;
                        transition: all 0.15s ease-in-out;
                            }
                    .primary:hover {
                        box-shadow: 4px 4px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                            }

                    // Rounded Small button styles
                    .small {
                        width: 85px;
                        height: 40px;
                        margin: 10px;
                        font-size: 12px;
                        border-radius: 8px;
                        border: 1px solid #101820;
                        background-color: whitesmoke;
                        transition: all 0.25s ease-in-out;
                            }
                    .small:hover {
                        border-radius: 25px;
                        border: 2px solid #101820;
                        box-shadow: 3px 3px 0 0;
                        transition: all .25s ease-in-out;
                        cursor: pointer;
                            }

                    // Warning Smanll button styles
                    .small {
                        width: 85px;
                        height: 40px;
                        margin: 10px;
                        font-size: 12px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #ffffb7;
                        transition: all 0.15s ease-in-out;
                            }
                    .small:hover {
                        background-color: #ffff4d;
                        box-shadow: 3px 3px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                            }
                    
                    // Danger Small button styles
                    .small {
                        width: 85px;
                        height: 40px;
                        margin: 10px;
                        font-size: 12px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #ffe9e5;
                        transition: all 0.15s ease-in-out;
                                }
                    .small:hover {
                        background-color: #ff2400;
                        box-shadow: 3px 3px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                                }
                    `}</pre> 
                </div>
            </div>
                   ) }

            </div>

            <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Large</h2>

                    <p>Large block level buttons span the full width of the parent element.<br/>They also take on all of the same attributes as thier .Standard counterparts.</p>

                </div>

                <div className="large-button-field-div" >

                    <h4 className="large-button-field-h4" >Large button examples</h4>

                    <div className="large-button-example-div" >
                        <button className="large-button-example" id="large-primary-button" >Primary</button>
                        <button className="large-button-example" id="large-secondary-button" >Secondary</button>
                    
                        <button className="large-button-example" id="large-other-button"  >Rounded</button>
                    
                        <button className="large-button-example" id="large-warning-button" >Warning</button>
                        <button className="large-button-example" id="large-danger-button" >Danger</button>
                    </div>
                </div>

                {largeCodeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setLargeCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`
                    <div class="button-container" >

                    <button class="large" >
                        "Click!"
                    </button>

                    </div> 
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setLargeCodeAlong(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`
                        // Primary Large button styles
                    .large {
                        width: 795px;
                        height: 55px;
                        margin: 10px;
                        font-size: 22px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #101820;
                        transition: all 0.15s ease-in-out;
                            }
                    .large:hover {
                        background-color: #d3d5d6;
                        box-shadow: 3px 4px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                            }

                    // Secondary Large button styles
                    .primary {
                        width: 795px;
                        height: 55px;
                        margin: 10px;
                        font-size: 19px;
                        border-radius: 2px;
                        border: 2px solid #101820;
                        background-color: whitesmoke;
                        transition: all 0.15s ease-in-out;
                            }
                    .primary:hover {
                        box-shadow: 4px 5px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                            }

                    // Rounded Large button styles
                    .large {
                        width: 795px;
                        height: 55px;
                        margin: 10px;
                        font-size: 22px;
                        border-radius: 8px;
                        border: 1px solid #101820;
                        background-color: whitesmoke;
                        transition: all 0.25s ease-in-out;
                            }
                    .large:hover {
                        border: 25px solid #101820;
                        box-shadow: 4px 4px 0 0;
                        transition: all .25s ease-in-out;
                        cursor: pointer;
                            }

                    // Warning Large button styles
                    .large {
                        width: 795px;
                        height: 55px;
                        margin: 10px;
                        font-size: 22px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #ffffb7;
                        transition: all 0.15s ease-in-out;
                            }
                    .large:hover {
                        background-color: #ffff4d;
                        box-shadow: 3px 4px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                            }
                    
                    // Danger button styles
                    .primary {
                        width: 795px;
                        height: 55px;
                        margin: 10px;
                        font-size: 22px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #ffe9e5;
                        transition: all 0.15s ease-in-out;
                                }
                    .primary:hover {
                        background-color: #ff2400;
                        box-shadow: 3px 4px 0 0;
                        transition: all .15s ease-in-out;
                        transform: translateY(-4px);
                        cursor: pointer;
                                }
                    `}</pre> 
                </div>
            </div>
                   ) }


            </div>

            <div className="input-field-container" >
                <div className="comp-text-body" >
                    <h2>Disabled</h2>

                    <p>To indicate that an action is currently unavailable, all button variations can be seen in thier Disabled state.<br/>The hover property is still enabled but the button does not have an active state.<br/> The Disabled button resorts back to the default font-size.</p>

                </div>
                <div className="button-field-div" >

                    <h4 className="button-field-h4" >Disabled button examples</h4>

                    <div className="button-example-div" >
                        <button className="button-disabled-example" >Button</button>
                        <button className="button-disabled-example" id="secondarty-button-disabled" >Button</button>
                    
                        <button className="button-disabled-example" id="other-button-disabled" >Button</button>
                    
                        <button className="button-disabled-example" >Button</button>
                        <button className="button-disabled-example" >Button</button>
                    </div>
                </div>

                {disCodeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setDisCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`
                    <div class="button-container" >

                    <button class="disabled" >
                        "Disabled!"
                    </button>

                    </div>    
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setDisCodeAlong(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`
                    // Disabled button styles
                    .disabled {
                        width: 140px;
                        height: 55px;
                        margin: 8px;
                        font-size: 19px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #cfd0d2;
                      }
                      .disabled:hover {
                        background-color: #6f7479;
                        box-shadow: 3px 3px 0 0;
                        cursor: not-allowed;
                      }

                      // Secondary Disabled button styles
                    .disabled {
                        width: 140px;
                        height: 55px;
                        margin: 8px;
                        font-size: 19px;
                        border-radius: 2px;
                        border: 1px solid #101820;
                        background-color: #cfd0d2;
                      }
                      .disabled:hover {
                        background-color: #6f7479;
                        box-shadow: 4px 4px 0 0;
                        cursor: not-allowed;
                      }

                      // Rounded Disabled button styles
                    .disabled {
                        width: 140px;
                        height: 55px;
                        margin: 8px;
                        font-size: 19px;
                        border-radius: 8px;
                        border: 1px solid #101820;
                        background-color: #cfd0d2;
                      }
                      .disabled:hover {
                        background-color: #6f7479;
                        box-shadow: 3px 3px 0 0;
                        cursor: not-allowed;
                      }
                    `}</pre> 
                </div>
            </div>
                   ) }
            </div>


            <CompFooter />
            <ScrollToTop />

        </div>
    )
}

export default Buttons