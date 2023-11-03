import React, {useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addAssignment, selectAssignment, updateAssignment} from "../assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      const matchedAssignment = assignments.find(assignment => assignment._id === assignmentId);
      if (matchedAssignment) {
        dispatch(selectAssignment({...matchedAssignment}));
      }
    }, [assignmentId])

    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        const matchedAssignment = assignments.find(assignment => assignment._id === assignmentId);
        if (matchedAssignment) {
          dispatch(updateAssignment({...assignment, course: courseId}));
        } else {
          dispatch(addAssignment({...assignment, course: courseId}));
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div>
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                   onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
                   className="form-control mb-2" />
            <textarea className="form-control my-2" value={assignment.description}
                      onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
            />
            <div className="mb-3">
              <label htmlFor="points" className="form-label">Points</label>
              <input type="text" className="form-control" id="points" value={assignment.points} onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))} />
            </div>
            <label htmlFor="due" className="form-label">Assign Due</label>
            <div className="mb-3">
              <input type="date" className="form-control" id="due" value={assignment.dueDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))} />
            </div>
            <div className="d-flex mb-3">
              <div className="flex-grow-1 me-3">
                <label htmlFor="from" className="form-label">Available From</label>
                <input type="date" className="form-control" id="from" value={assignment.availableFromDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))} />
              </div>
              <div className="flex-grow-1">
                <label htmlFor="until" className="form-label">Until</label>
                <input type="date" className="form-control" id="until" value={assignment.availableUntilDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))} />
              </div>
            </div>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-danger">
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success mx-2">
                Save
            </button>
        </div>
    );
}

export default AssignmentEditor;
