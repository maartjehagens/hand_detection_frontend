import {Outlet} from "react-router-dom";
import "../Styles/Layout.css";

const Layout = () => {
    return (
        <div className="Layout">
            <header className="Layout-header">
                <a href="/Lessons">
                    <button>Lessons</button>
                </a>
                <a href="/Practice">
                    <button>Practice</button>
                </a>
                <a href="/Challenge">
                    <button>Challenge</button>
                </a>
                <a href="/Glossary">
                    <button>Glossary</button>
                </a>
                <a href="/Settings">
                    <button>Settings</button>
                </a>
                <Outlet/>
            </header>
        </div>
    )
};

export default Layout;

