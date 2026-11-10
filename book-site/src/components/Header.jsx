import { NavLink } from "react-router-dom";
import logo from '../assets/Logo_V1.png'
import './Header.css'
import { useEffect, useState } from "react";
import { useRef } from "react";

function Dropdown({ label, children }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);
    return (
        <div className="dropdown" ref={ref}>
            <button className="dropbtn" onClick={() => setOpen((o) => !o)}>
                {label}
                <i className="fa fa-caret-down"></i>
            </button>
            <div 
                className={`dropdown-content ${open ? "open" : ""}`}
                onClick={() => setOpen(false)}
            >
                {children}
            </div>
        </div>
    );
}

export function Header() {
  return (
    <header>
        <nav>
            <a id="top"></a>
            <div className="topnav" id="myTopnav">
                <div className="logo">
                    <img src={logo}/>
                </div>

                <div className="nav-items">
                        <NavLink to={"/"} className={"nav-item"}>Home</NavLink>
                        <NavLink to={"/podcast"} className={"nav-item"}>Podcast</NavLink>

                    <Dropdown
                        label={"Instructional Videos"}
                        children={
                            <>
                                <NavLink to={"/hebrew"} >Hebrew</NavLink>
                                <NavLink to={"/greek"} >Greek</NavLink>
                                <NavLink to={"/latin"} >Latin</NavLink>
                                <NavLink to={"/step_bible"} >Step Bible</NavLink>
                                <NavLink to={"/bible_hub"} >Bible Hub</NavLink>
                                <NavLink to={"/tlg"} >TLG</NavLink>
                                <NavLink to={"/perseus_digital_library"} >Perseus Digital Library</NavLink>
                            </>
                        }
                    />
                    <Dropdown
                        label={"About"}
                        children={
                            <>
                                <NavLink to={"/about_authors"} >Authors</NavLink>
                                <NavLink to={"/about_book"} >Book</NavLink>
                            </>
                        }
                    />
                </div>
            </div>
        </nav>
    </header>

  )
}



