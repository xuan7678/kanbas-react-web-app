import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades","Zoom meetings","Quizzes","Piazza","People","Credentials"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-navigation list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"} group_list`}
        >
          <div style={{marginLeft: 5}}>{link}</div>
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
