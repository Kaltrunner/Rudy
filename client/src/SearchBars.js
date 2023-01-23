import React, { useState } from "react"
import CompHeader from "./CompHeader"
import CompFooter from "./CompFooter"

function SearchBars() {

    const [codeAlong, setCodeAlong] = useState(true)
    const [searchCodeAlong ,setSearchCodeAlong] = useState(true)

    return (
        <div className="comp-button-container-div" >

            <CompHeader />

            <div className="landing-logo-text-div" >
                <h1 className="comp-landing-logo-text" >.Search Bars</h1>
            </div>

            <div className="comp-text-body">

                <p>Search Bars are a common element in design, they are used as a means of allowing users to search for content or information within a website or app.<br/> They are often located in the header or navigation of a website or app and can be used to search for products, articles, or other types of content.</p>

                <p>Designing effective search bars can greatly improve the user experience and make it more intuitive and efficient.</p>

                <p>A well-designed search bar can greatly improve the user experience by making it more intuitive and efficient.<br/> They should be prominently placed, clear, accessible, provide feedback, use the right size,<br/> show search suggestions, allow for advanced search options, test and optimize and make it easy to clear.</p>
                
            </div>

            <div className="line-between" ></div>

            <div className="search-field-container" >
                <div className="comp-text-body" >
                    <h2>Search Input Field</h2>

                    <p>The search bars are designed to be simple and minimalistic in order to make them easy to use and understand.</p>

                    <p><strong>Text input field:</strong> This is where the user enters their search query.<br/><strong>Search button or icon:</strong> This initiates the search and sends the query to the search engine or database.
                    </p>

                </div>
                <div className="search-field-div" >
                    <h3 className="input-h3-text" >Search Field with search button</h3>
                    <form className="search-form" >
                    <span><input type="text" 
                    id="search-input" 
                    placeholder="Search..."
                    autoComplete="off" >
                    </input>
                    <button type="submit"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMS4xNzIgMjRsLTcuMzg3LTcuMzg3Yy0xLjM4OC44NzQtMy4wMjQgMS4zODctNC43ODUgMS4zODctNC45NzEgMC05LTQuMDI5LTktOXM0LjAyOS05IDktOSA5IDQuMDI5IDkgOWMwIDEuNzYxLS41MTQgMy4zOTgtMS4zODcgNC43ODVsNy4zODcgNy4zODctMi44MjggMi44Mjh6bS0xMi4xNzItOGMzLjg1OSAwIDctMy4xNCA3LTdzLTMuMTQxLTctNy03LTcgMy4xNC03IDcgMy4xNDEgNyA3IDd6bS0zLThjLjU1MiAwIDEgLjQ0OCAxIDFzLS40NDggMS0xIDEtMS0uNDQ4LTEtMSAuNDQ4LTEgMS0xem0zIDBjLjU1MiAwIDEgLjQ0OCAxIDFzLS40NDggMS0xIDEtMS0uNDQ4LTEtMSAuNDQ4LTEgMS0xem0zIDBjLjU1MiAwIDEgLjQ0OCAxIDFzLS40NDggMS0xIDEtMS0uNDQ4LTEtMSAuNDQ4LTEgMS0xeiIvPjwvc3ZnPg==" alt="search-button"/></button></span>
                    </form>

                </div>

                {codeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <div class="search-form-container" >

                        <form class="search-form" >

                            <span>
                        
                            <input type="text" 
                                id="search-input" 
                                placeholder="Search..."
                                autoComplete="off" >
                            </input>
                        
                            <button type="submit">
                                <img src="data:image"/>
                            </button>

                            </span>
                        </form>
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

                    #search-input {
                        height: 38px;
                        width: 420px;
                        border: 1px solid #101820;
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        font-size: 22px;
                        margin-left: -36px;
                        background-color: #ededee;
                    }
                    #search-input:focus {
                        background-color:  #dedfe0;
                        outline: none !important;
                    }

                    form.search-form button {
                        position:absolute;
                        width: 72px;
                        height: 41px;
                        padding: 8px;
                        background:  #4162ff;
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        border-radius: 2px;
                        cursor: pointer;
                    }                

                    `}</pre> 
                </div>
            </div>
                   ) }

                </div>

                <div className="search-field-container" >
                <div className="comp-text-body" >
                    <h2>Search Input Field</h2>
                    <p>This search bar is very minimalistic and without a button, when useing this search bar queries will automaticly populate a search field.</p>

                </div>
                <div className="search-field-div" >
                    <h3 className="input-h3-text" >Search Field without a button</h3>
                    <form className="search-form" >
                    <input type="text" 
                    id="search-input" 
                    placeholder="Search..."
                    autoComplete="off" >
                    </input>
                    </form>

                </div>

                {searchCodeAlong ? (
                <div className="code-along-div">

                    <button  className="css-button" >HTML</button>      
                    <button onClick={() => setSearchCodeAlong(false)} className="html-button" >CSS</button>
        
                <div className="code-along-text" >
                <pre>{`

                    <form className="search-form" >

                        <input type="text" 
                            id="search-input" 
                            placeholder="Search..."
                            autoComplete="off" >

                        </input>

                    </form>
  
                    `}</pre> 
                </div>
            </div>
            ) : (
                
            <div className="code-along-css-div">
            
                    <button onClick={() => setSearchCodeAlong(true)} className="css-button" >HTML</button>
                    <button  className="html-button" >CSS</button>
                <div className="code-along-text" >
                <pre>{`

                    #search-input {
                        height: 38px;
                        width: 420px;
                        border: 1px solid #101820;
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        font-size: 22px;
                        margin-left: -36px;
                        background-color: #ededee;
                    }
                    #search-input:focus {
                        background-color:  #dedfe0;
                        outline: none !important;
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

export default SearchBars
