import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import Nav from './components/Nav';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateStudent />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/student-list" element={<StudentList />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
