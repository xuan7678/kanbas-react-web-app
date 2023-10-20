import {Link, useLocation} from "react-router-dom";
import {BiUserCircle, BiHistory, BiLogoVisualStudio, BiLogoCreativeCommons, BiHelpCircle} from "react-icons/bi";
import {RiDashboard3Fill} from "react-icons/ri";
import {AiFillRead} from "react-icons/ai"
import {FaBook} from "react-icons/fa";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import "./index.css";
import logo from "../../logo.jpg"

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon"/>,
        Dashboard: <RiDashboard3Fill className="wd-icon"/>,
        Courses: <FaBook className="wd-icon"/>,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon"/>,
        Inbox: <AiFillRead className="wd-icon"/>,
        History: <BiHistory className="wd-icon"/>,
        Studio: <BiLogoVisualStudio className="wd-icon"/>,
        Commons: <BiLogoCreativeCommons className="wd-icon"/>,
        Help: <BiHelpCircle className="wd-icon"/>,

    };

    const {pathname} = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation">
            <Link to={`/Kanbas`}>
                <img src={logo} alt="" width='100%'/>
            </Link>
            {links.map((link, index) => (
                <Link

                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}
                >
                    {linkToIconMap[link]}
                    <br/>
                    {link}
                </Link>
            ))}
        </div>
    );
}

export default KanbasNavigation;
