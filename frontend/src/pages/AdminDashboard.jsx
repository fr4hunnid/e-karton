import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <div>
        <Link to="/patlist">
          <button className="button-74">Lista pacijenata</button>
        </Link>
      </div>

      <div>
        <Link to="/doclist">
          <div></div>

          <button className="button-74">Lista liječnika</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
