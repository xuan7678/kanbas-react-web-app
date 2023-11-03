import { Link } from "react-router-dom";

function Dashboard({ courses, course, setCourse, addNewCourse,
                     deleteCourse, updateCourse }) {
    return (
        <div>
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <div className="mb-4">
                <div>
                    <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                    <input value={course.number} className="form-control mb-2" onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                    <input value={course.startDate} className="form-control mb-2" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
                    <input value={course.endDate} className="form-control mb-2" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                </div>
                <div className="my-3">
                    <button className="btn btn-success me-2" onClick={addNewCourse} >
                        Add
                    </button>
                    <button className="btn btn-primary" onClick={updateCourse} >
                        Update
                    </button>
                </div>
            </div>
            <div className="list-group">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="d-flex justify-content-between list-group-item">
                        {course.name}
                        <div>
                          <button
                            className="btn btn-warning btn-sm ms-4"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}>
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm ms-2"
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}>
                            Delete
                          </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;
