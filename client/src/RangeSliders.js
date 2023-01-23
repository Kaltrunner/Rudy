import React, { useState } from 'react';
import RangeSliderExample from "./RangeSliderExample"
import CompHeader from "./CompHeader"
import CompFooter from "./CompFooter"

function RangeSliders() {

    const [codeAlong, setCodeAlong] = useState(true)
    const [codeAlong2, setCodeAlong2] = useState(true)
    const [codeAlong3, setCodeAlong3] = useState(true)

    return (
        <div className="comp-button-container-div" >

            <CompHeader />

            <div className="landing-logo-text-div" >
                <h1 className="comp-landing-logo-text" >.Range Sliders</h1>
            </div>

            <div className="comp-text-body">

                <p>Range sliders, also known as sliding scales, are a common element in design,<br/> they are used as a means of allowing users to adjust a value or setting within a specific range of values.<br/> They are often used in settings, forms, and other interfaces where users need to select a value from a range of options.</p>

                <p>Designing effective range sliders can greatly improve the user experience and make it more intuitive and efficient.</p>
                
            </div>

            <div className="line-between" ></div>

            {/* <div className="button-div" ></div>
            <div></div> */}

            <div className="range-layout-div" >
            <h2>Numeric Range Sliders</h2>
            <p>The sliders provides a quick and effective way for users to set and adjust a numeric value from a defined range of values.</p>
            <p>Range sliders are easy to use, as users can simply drag a handle or thumb along a track to select a value.<br/> This can be more user-friendly than inputting a value numerically, especially for users who are not comfortable with typing.</p>
            <p>Using range sliders can provide consistency in the user interface, allowing users to understand and use similar controls across different parts of the application or website.</p>

            <div className="range-container-div" >
                <h3 className="range-p-text" >Basic Numeric Slider</h3>
                <RangeSliderExample />
            </div>

            {codeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <div className="range-slider" ref={sliderRef}>

                        <input className="range-slider__range" id="myinput" type="range" />

                        <div className="range-slider__value" ></div>

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

                    #myinput {
                        -webkit-appearance: none;
                        border-radius: 2px;
                        height: 9px;
                        width: 376px;
                        margin: 22px;
                        background-color: #dbdcdd;
                        cursor:grab;
                    }
                    #myinput:active {
                        border-radius: 2px;
                        cursor: grabbing;
                    }

                    #input::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        background-color: #4162ff;
                        height: 1.5rem;
                        width: 1.5rem; 
                        border-radius: 50%;
                      }
                    #input:active::-webkit-slider-thumb {
                        background-color: #344ecc;
                        height: 2rem;
                        width: 2rem; 
                        border-radius: 50%;
                      }

                      .range-slider__value {
                        text-align: center;
                        font-size: 28px;
                        border-radius: 2px;
                        margin: 4px;
                        background-color: #ededee;
                      }

                    `}</pre> 
                </div>
            </div>
                   ) }

            <div className="line-between" ></div>

            <h2>Non Numeric Range Slidders</h2>

            <p>The implementation of non-numeric range sliders can vary depending on the framework or library being used,<br/> but it generally involves creating a custom component that can handle the logic for displaying the labeled options and updating the selected value.</p>
            
            <p>For example, a non-numeric range slider for adjusting the volume of a media player might have labeled steps for "mute", "low", "medium", and "high".<br/> Another example would be a non-numeric range slider for selecting a date range,<br/> where the options would be labeled as "past day", "past week", "past month", and "past year".</p>

            <div className="range-container-div" >
                <h3 className="range-p-text" >Plain without border</h3>
                <input id="myinput" min="0" max="100" type="range"  />
            </div>

            <div className="range-border-container-div" >
                <h3 className="range-p-text" >Plain with border</h3>
                <input id="myinput-border" min="0" max="100" type="range"  />
            </div>

            {codeAlong2 ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong2(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <input id="myinput" min="0" max="100" type="range" />
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong2(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    #myinput {
                        -webkit-appearance: none;
                        border-radius: 2px;
                        height: 9px;
                        width: 376px;
                        margin: 22px;
                        background-color: #dbdcdd;
                        cursor:grab;
                    }
                    #myinput:active {
                        border-radius: 2px;
                        cursor: grabbing;
                    }

                    input::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        background-color: #4162ff;
                        height: 1.5rem;
                        width: 1.5rem; 
                        border-radius: 50%;
                    }
                    input:active::-webkit-slider-thumb {
                        background-color: #344ecc;
                        height: 2rem;
                        width: 2rem; 
                        border-radius: 50%;
                    }


                    #myinput-border {
                        -webkit-appearance: none;
                        height: 9px;
                        width: 376px;
                        margin: 22px;
                        background-color: #dbdcdd;
                        border: 1px solid #101820;
                        border-radius: 2px;
                        cursor:grab;
                      }
                      #myinput-border:active {
                        border-radius: 2px;
                        cursor: grabbing;
                      }

                    `}</pre> 
                </div>
            </div>
                   ) }


            <div className="range-container-div" >
                <h3 className="range-p-text" >Plain disabled</h3>
                <input id="myinput-disabled" min="0" max="100" type="range" value="50"  />
            </div>

            {codeAlong3 ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong3(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <input id="myinput-disabled" min="0" max="100" type="range" value="50" />
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setCodeAlong3(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    #myinput-disabled {
                        -webkit-appearance: none;
                        border-radius: 2px;
                        height: 9px;
                        width: 376px;
                        margin: 22px;
                        background-color: #6f7479;
                        cursor: not-allowed;
                    }
                    #myinput-disabled::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        background-color: #cfd0d2;
                        height: 1.5rem;
                        width: 1.5rem; 
                        border-radius: 50%;
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

export default RangeSliders