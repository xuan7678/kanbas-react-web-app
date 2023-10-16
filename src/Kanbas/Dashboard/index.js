import { Link } from "react-router-dom";
import db from "../Database";

import React from 'react';
import "./index.css";


function Dashboard() {
    return (
        <div>
        <table width="100%" border={0}>
            <tr>
                <td className="label-con" valign="top">
                    <ul>
                        <li><a href="#"><img src="/log.png" width="100%" /></a></li>
                        <li><a href="/Kanbas/Account/Profile/screen.html">
                            <i className="fa fa-solid fa-user text-secondary"></i><br />Account</a></li>
                        <li className="label_active"><a href="/Kanbas/Dashboard/index.html"><i className="fa fa-tachometer" aria-hidden="true"></i><br />Dashboard</a>
                        </li>
                        <li><a href="/Kanbas/Courses/Home/screen.html"><i className="fa fa-book"></i><br />Courses</a></li>
                        <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> <br />Calendar</a></li>
                        <li><a href="#"><i className="fa fa-inbox" aria-hidden="true"></i> <br />Inbox</a></li>
                        <li><a href="#"><i className="fa fa-history" aria-hidden="true"></i> <br />History</a></li>
                        <li><a href="#"><i className="fa fa-paint-brush red-icon"></i> <br />Studio</a></li>
                        <li><a href="#"><i className="fa fa-share-alt red-icon"></i> <br />Commons</a></li>
                        <li><a href="#"><i className="fa fa-question-circle red-icon"></i> <br />Help</a></li>
                    </ul>
                </td>
                <td valign="top" className="p-3">
                    <div className="justify-content-between align-items-center p-3 menu2 mb-3">
                        <div><i className="fa fa-solid fa-bars" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ color: '#fff', fontSize: '26px', cursor: 'pointer' }}></i></div>
                        <div style={{ textAlign: 'center' }}>
                            <div>CS4550.12631.202410</div>
                            <div>Modules</div>
                        </div>
                        <div><i className="fa fa-solid fa-chevron-down" data-bs-toggle="modal" data-bs-target="#staticBackdropRight" style={{ cursor: 'pointer' }}></i></div>
                    </div>
                    <h1 className="fw-light">Dashboard</h1>
                    <hr />
                    <div className="p-3">
                        <h2>Published Courses(24)</h2>
                        <hr className="mb-3" />
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                            {/* Add your card components here */}
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-0">
                        <ul>
                            <li className="label_active"><a href="../Profile/screen.html"><i className="fa fa-solid fa-user text-secondary"></i>Account</a></li>
                            <li><a href="#"><i className="fa fa-tachometer" aria-hidden="true"></i>Dashboard</a></li>
                            <li className="lab_active"><a href="../CourseNavigation/index.html"><i className="fa fa-book"></i>Courses</a></li>
                            <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> Calendar</a></li>
                            <li><a href="#"><i className="fa fa-inbox" aria-hidden="true"></i> Inbox</a></li>
                            <li><a href="#"><i className="fa fa-history" aria-hidden="true"></i> History</a></li>
                            <li><a href="#"><i className="fa fa-solid fa-desktop"></i> Studio</a></li>
                            <li><a href="#"><i className="fa fa-solid fa-arrow-right"></i> Commons</a></li>
                            <li><a href="#"><i className="fa fa-solid fa-question"></i> Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="staticBackdropRight" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen" style={{ width: '100%' }}>
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-0">
                        <ul>
                            <li><a href="/Kanbas/Courses/Home/screen.html">Home</a></li>
                            <li><a href="/Kanbas/Courses/Modules/screen.html">Modules</a></li>
                            <li><a href="#">Piazza</a></li>
                            <li><a href="#">Zoom Meetings</a></li>
                            <li><a href="/Kanbas/Courses/Assignments/screen.html">Assignments</a></li>
                            <li><a href="#">Quizzes</a></li>
                            <li><a href="/Kanbas/Courses/Grades/screen.html">Grades</a></li>
                            <li><a href="#">People</a></li>
                            <li><a href="#">Panopto Video</a></li>
                            <li><a href="#">Discussion</a></li>
                            <li><a href="#">Announcement</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Files</a></li>
                            <li><a href="#">Rubrics</a></li>
                            <li><a href="#">Outcomes</a></li>
                            <li><a href="#">Collaborations</a></li>
                            <li><a href="#">Syllabus</a></li>
                            <li><a href="/Kanbas/Courses/Settings/screen.html">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Dashboard;



// function Dashboard() {
//     const courses = db.courses;
//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <div className="list-group">
//                 {courses.map((course) => (
//                     <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
//                         {course.name}
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }
// export default Dashboard;
