import { Outlet, Link } from "react-router-dom";
import styles from "../Styles/Layout.css";

const Layout = () => {
    return (
        <div className="Layout">
            <header className="Layout-header">
      
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Lessons">Lessons</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
            </header>
        </div>
)
};

export default Layout;