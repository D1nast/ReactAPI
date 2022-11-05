import { Link } from "react-router-dom";

const Header=()=>{
    return(
    <div className="header">
     <div className="container">
        <h1 className="logo">GelaNavi</h1>
        <ul className="nav">
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <Link to="Prefecture">都道府県</Link>
        </li>
        <li>
            <Link to="test">テスト</Link>
        </li>
        <li>
             <Link to="API">API</Link>
        </li>
        </ul>
     </div>
    </div>
    );
}

export default Header;