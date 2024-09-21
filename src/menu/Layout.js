import { Link, Outlet } from 'react-router-dom';
import '../CSS/Layout.css';

const Layout = () => {
    return (
        <div className="layout-container">
            <nav className="navbar">
                <h3 className='topic'>Темы:</h3>
                <Link to="/">Home</Link>
                <Link to="/virtualDOM">VirtualDOM</Link>
                <Link to="/component">Component</Link>
                <Link to="/props">Props</Link>
                <Link to="/state">State</Link>
                <Link to="/lifecycle">LifeCycle</Link>
                <Link to="/events">Events</Link>
                <Link to="/memo">Memo</Link>
                <Link to="/refs">Refs</Link>
                <Link to="/key">Key, Fragment</Link>
                <Link to="/context">Context</Link>
                <Link to="/forms">Forms</Link>
                <Link to="/storage">Storage</Link>
                <Link to="/hoc">HOC</Link>
                <Link to="/reactrouter">React Router</Link>
            </nav>
            <div className="outlet-container">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;