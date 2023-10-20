import db from "../../Database";
import './index.css'
import {useParams} from "react-router-dom";

function Grades() {
    const {courseId} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="p-3">
            <h2 className="mb-3 pb-2">Grades</h2>
            <div className="row mb-3">
                <div className="col-6">
                    <div className="h5">Students Names</div>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Search Students</option>
                    </select>
                </div>
                <div className="col-6">
                    <div className="h5">Assignment Names</div>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Search Assignment</option>
                    </select>
                </div>
            </div>
            <div className="btn btn-light border mb-3"><i className="fa fa-solid fa-filter"></i>Apply Filters</div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th className="text-center">{assignment.title}</th>))}
                    </tr>

                    </thead>
                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (<td className="text-center">{grade?.grade || ""}</td>);
                                })}
                            </tr>);
                    })}
                    </tbody>
                </table>
            </div>
        </div>);
}

export default Grades;
