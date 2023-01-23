import Header from "./Header"
import ScrollToTop from "./ScrollToTop"

function Rules() {
    return (
        <div className="rules-container-div" >
            <Header />
            <div className="rules-text-div" >
                <h1>.Rules</h1>
            </div>
            <div className="line-between" ></div>
            <div className="rules-text-body" >
                <h3>
                These are general guidelines in practice, it will depend on the specific project, type of media and target audience, so they are flexible.
                </h3>
                <br/>
                <p></p>
                <br/>
                <p>
                        <strong>User-centered design:</strong> Design with the end user in mind, considering their needs, goals, and preferences throughout the design process.<br/>
                </p>
                <br/>
                <p>
                        <strong>Simplicity:</strong> Keep designs simple, clean and easy to understand.<br/>
                    <p></p>
                        <strong>Alignment:</strong> Align elements to a grid to create a visually balanced composition.<br/>
                    <p></p>
                        <strong>Repetition:</strong> Repeat design elements throughout a project to create a cohesive visual language.<br/>
                    <p></p>
                        <strong>Contrast:</strong> Ensure that there is enough contrast between text and background colors to make text legible.<br/>
                    </p>
                        <br/>
                    <p>
                        <strong>White space:</strong> Use white space to create visual hierarchy and separate different sections of content.<br/>
                        <p></p>
                        <strong>Proximity:</strong> Group related elements together to indicate their relationship.<br/>
                        <p></p>
                        <strong>Accessibility:</strong> design for all the users with different abilities by providing alternative for non-textual content, keyboard navigation and enough color contrast.<br/>
                    </p>
                        <br/>
                    <p>
                        <strong>Typography:</strong> Use typography effectively to create hierarchy and legibility in text.<br/>
                        <p></p>
                        <br/>
                    </p>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Rules;