import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <div className="header bg-slate-950">
          <ul>
            <li className="p-3">
              <Link
                className="text-white uppercase transition duration-350 hover:text-red-500 pl-5 pr-5"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-white uppercase transition duration-350 hover:text-red-500 pl-5 pr-5 "
                to="/list"
              >
                List
              </Link>
              <Link
                className="text-white uppercase transition duration-350 hover:text-red-500 pl-5 pr-5 "
                to="/card"
              >
                Card
              </Link>
            </li>
          </ul>
        </div>
        </>
    )
}

export default Header;