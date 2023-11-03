import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <input className="form-control" value={module.name}
                       onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <textarea className="form-control my-2" value={module.description}
                          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
                <button className="btn btn-success me-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>
            </li>
            {
                modules
                    .filter((module) => module.course === courseId)
                        .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <div className="d-flex justify-content-between">
                                <h3>{module.name}</h3>
                                <div>
                                    <button
                                      className="btn btn-warning me-2"
                                      onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => dispatch(deleteModule(module._id))}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <p>{module.description}</p>
                            <p>{module._id}</p>
                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;
