import { Link } from "react-router-dom";

function Header() {

    function handleHomeClick() {

    }

    return (
        <div className="header-container" >
           
            <Link to="/" ><button onClick={handleHomeClick} className="header-home-button" > 
            <img className="back-img" src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTMuNzg5IDcuMTU1Yy4xNDEtLjEwOC4zLS4xNTcuNDU2LS4xNTcuMzg5IDAgLjc1NS4zMDYuNzU1Ljc0OXY4LjUwMWMwIC40NDUtLjM2Ny43NS0uNzU1Ljc1LS4xNTcgMC0uMzE2LS4wNS0uNDU3LS4xNTktMS41NTQtMS4yMDMtNC4xOTktMy4yNTItNS40OTgtNC4yNTgtLjE4NC0uMTQyLS4yOS0uMzYtLjI5LS41OTIgMC0uMjMuMTA3LS40NDkuMjkxLS41OTEgMS4yOTktMS4wMDIgMy45NDUtMy4wNDQgNS40OTgtNC4yNDN6Ii8+PC9zdmc+" alt="back button" />
             </button></Link>

             <Link to="/Introduction" ><button className="header-buttons" >.Introduction</button></Link>
             <Link to="/Values" ><button className="header-buttons" >.Values</button></Link>
             <Link to="/Rules" ><button className="header-buttons" >.Rules</button></Link>
             <Link to="/Components" ><button className="header-buttons" >.Components</button></Link>

        </div>
    )
}

export default Header;