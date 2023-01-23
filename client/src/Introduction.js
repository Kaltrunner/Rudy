import Header from "./Header"
import ScrollToTop from "./ScrollToTop"

function Introduction() {
    return (
        <div className="intro-container-div" >
            <Header />
            <div className="intro-text-div" >
                <h1>.Introduction</h1>
            </div>
            <div className="line-between" ></div>
            <div className="intro-text-body" >
                <p>.Rudy, a design system is a collection of design standards, guidelines, and components that a team can use to create a consistent<br/> and cohesive user experience across all of the products, platforms, and services that a company offers.
                </p>
                
                <p>This design system can be implemented at different scales, from a single website to a single company, to a whole industry.<br/> With the help of .Rudy it makes the design and development process more efficient and scalable.<br/>  Ensuring a consistent user experience across different touch points.
                </p>
                
                <p>.Rudy will help to ensure that all of the different pieces of a company's digital presence fit together in a way that is easy for users to understand and navigate.
                </p>
                
                <br/>
                <h5>Thank you for using .Rudy</h5>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Introduction;