import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(5);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const totalPages = Math.ceil(students.length / rows);

  const start = (page - 1) * rows;
  const end = start + rows;

  const visibleStudents = students.slice(start, end);

  const changeRows = (e) => {
    setRows(Number(e.target.value));
    setPage(1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-logo">SP</div>

          <div>
            <h4>StudentPro</h4>
            <small>Management</small>
          </div>
        </div>

        <div className="menu">

          <div className="menu-item active">
            <span>▣</span>
            Dashboard
          </div>

          <div className="menu-item">
            <span>♙</span>
            Students
          </div>

          <div className="menu-item">
            <span>▤</span>
            Reports
          </div>

        </div>

        <div className="sidebar-bottom">
          <p>Academic Year</p>
          <strong>2026 - 2027</strong>
        </div>

      </aside>

      {/* Main Area */}
      <main className="main-area">

        {/* Top Bar */}
        <div className="topbar">

          <div>
            <h1>Dashboard</h1>
            <p>Student academic performance overview</p>
          </div>

          <div className="profile">
            <div className="profile-circle">A</div>

            <div>
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>
          </div>

        </div>

        {/* Statistics */}
        <div className="row g-4 mb-4">

          <div className="col-lg-4 col-md-6">

            <div className="info-card purple">
              <div className="info-icon">👨‍🎓</div>

              <div>
                <small>Total Students</small>
                <h2>{students.length}</h2>
              </div>
            </div>

          </div>

          <div className="col-lg-4 col-md-6">

            <div className="info-card orange">
              <div className="info-icon">📚</div>

              <div>
                <small>Total Subjects</small>
                <h2>04</h2>
              </div>
            </div>

          </div>

          <div className="col-lg-4 col-md-6">

            <div className="info-card blue">
              <div className="info-icon">📄</div>

              <div>
                <small>Current Page</small>
                <h2>{page}</h2>
              </div>
            </div>

          </div>

        </div>

        {/* Student Table */}
        <div className="student-panel">

          <div className="panel-header">

            <div>
              <h3>Student Records</h3>
              <p>View student subject-wise performance</p>
            </div>

            <span className="record-count">
              {students.length} Records
            </span>

          </div>

          <div className="table-responsive">

            <table className="table custom-table align-middle">

              <thead>
                <tr>
                  <th>#</th>
                  <th>Student</th>
                  <th>DSA</th>
                  <th>Maths</th>
                  <th>DBMA</th>
                  <th>Networking</th>
                </tr>
              </thead>

              <tbody>

                {visibleStudents.length > 0 ? (

                  visibleStudents.map((student) => (

                    <tr key={student.id}>

                      <td>
                        <span className="number">
                          {student.id}
                        </span>
                      </td>

                      <td>

                        <div className="student-name">

                          <div className="student-avatar">
                            {student.name.charAt(0)}
                          </div>

                          <div>
                            <strong>{student.name}</strong>
                            <small>Student</small>
                          </div>

                        </div>

                      </td>

                      <td>
                        <span className="subject dsa">
                          {student.dsa}
                        </span>
                      </td>

                      <td>
                        <span className="subject maths">
                          {student.maths}
                        </span>
                      </td>

                      <td>
                        <span className="subject dbma">
                          {student.dbma}
                        </span>
                      </td>

                      <td>
                        <span className="subject network">
                          {student.networking}
                        </span>
                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>
                    <td colSpan="6" className="text-center py-5">
                      Loading students...
                    </td>
                  </tr>

                )}

              </tbody>

            </table>

          </div>

          {/* Pagination */}
          <div className="panel-footer">

            <div className="showing">

              <span>Show</span>

              <select
                value={rows}
                onChange={changeRows}
                className="form-select"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>

              <span>entries</span>

            </div>

            <div className="pagination-area">

              <span className="result-text">
                {students.length === 0
                  ? "0 - 0"
                  : `${start + 1} - ${Math.min(
                      end,
                      students.length
                    )}`}
              </span>

              <button
                className="pagination-button"
                onClick={previousPage}
                disabled={page === 1}
              >
                Previous
              </button>

              <span className="current-page">
                {page}
              </span>

              <button
                className="pagination-button primary"
                onClick={nextPage}
                disabled={page === totalPages}
              >
                Next
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default App;