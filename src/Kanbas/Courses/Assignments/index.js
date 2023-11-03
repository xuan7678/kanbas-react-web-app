import React from "react";
import { Link, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteAssignment} from "./assignmentsReducer";

function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <div className="my-3">
              <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`} className="btn btn-danger">+ Assignment</Link>
            </div>
            <div className="list-group">
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                      <div className="d-flex justify-content-between">
                        <span>{assignment.title}</span>
                        <div>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              if (window.confirm("Sure to remove the assignment?")) {
                                dispatch(deleteAssignment(assignment._id))
                              }
                            }}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;
