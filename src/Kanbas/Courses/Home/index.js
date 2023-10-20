import ModuleList from "../Modules/ModuleList";
import './index.css'

function Home() {
  return (
    <div className="row p-3 mt-3 w-100">
        <div className="col-9">
            {/*<h2>Home</h2>*/}
            <div className="mb-3 d-flex justify-content-end">
                <button className="btn btn-light border me-1">Collapse All</button>
                <button className="btn btn-light border me-1">View Progress</button>
                <button className="btn btn-danger border">Module</button>
            </div>
            <ModuleList />
        </div>
        <div className="col-2">
            <h2>Status</h2>
        </div>
    </div>
  );
}
export default Home;
