import { NavLink } from "react-router-dom";
import logo from '../assets/Logo_V1.png'


export function Header() {
  return (
    <header>
        <nav>
            <a id="top"></a>
            <div className="topnav" id="myTopnav">
                <div className="logo">
                    <img src={logo}/>
                </div>

                <NavLink to={"/"} src={logo}>Home</NavLink>
                <NavLink to={"/podcast"} >Podcast</NavLink>
                <div className="dropdown">
                    <button className="dropbtn">
                        Instructional Videos
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <NavLink to={"/hebrew"} >Hebrew</NavLink>
                        <NavLink to={"/greek"} >Greek</NavLink>
                        <NavLink to={"/latin"} >Latin</NavLink>
                        <NavLink to={"/step_bible"} >Step Bible</NavLink>
                        <NavLink to={"/bible_hub"} >Bible Hub</NavLink>
                        <NavLink to={"/tlg"} >TLG</NavLink>
                        <NavLink to={"/perseus_digital_library"} >Perseus Digital Library</NavLink>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">About
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <NavLink to={"/about_authors"} >Authors</NavLink>
                        <NavLink to={"/about_book"} >Book</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>

  )
}



