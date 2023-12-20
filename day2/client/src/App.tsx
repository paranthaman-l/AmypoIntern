import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";
import Users from "./pages/Users.jsx";
import Library from "./pages/Library.jsx";
import Login from "./pages/Login.jsx";
import EditBook from "./pages/EditBook.jsx";
import SignUp from "./pages/SignUp.jsx";
import ViewBook from "./pages/ViewBook.jsx";
import AddBook from "./pages/AddBook.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
function App() {
  return (
    <div className="min-h-screen text-white bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Sidebar /><Home /></> }/>
          <Route path="/library" element={   <><Navbar /><Sidebar /><Library /></> }/>
          <Route path="/login" element={<><Login /></>} />
          <Route path="/signup" element={<><SignUp /></>} />
          <Route path="/addBook" element={<><Navbar /><Sidebar /><AddBook /></>} />
          <Route path="/editBook/:id" element={<><Navbar /><Sidebar /><EditBook /></>} />
          <Route path="/viewBook/:id" element={<><Navbar /><Sidebar /><ViewBook /></>} />
          <Route path="/user" element={<><Navbar /><User /></>} />
          <Route path="/users" element={<><Navbar /><Sidebar /><Users /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
