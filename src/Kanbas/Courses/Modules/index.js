import ModuleList from "./ModuleList";
function Modules() {
  return (
    <div className="col-12 p-3">
        <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-light border me-1">Collapse All</button>
            <button className="btn btn-light border me-1">View Progress</button>
            <button className="btn btn-danger border">Module</button>
        </div>
      <ModuleList />
    </div>
  );
}
export default Modules;
