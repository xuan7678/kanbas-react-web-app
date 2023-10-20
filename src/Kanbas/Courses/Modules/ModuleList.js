import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './moduleList.css'
function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item p-0">
             <h3><i className="fa fa-solid fa-list"></i>{module.name}</h3>
             <p className="describe">{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4><i className="fa fa-solid fa-list"></i>{lesson.name}</h4>
                                    <p className="con_text">{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;
