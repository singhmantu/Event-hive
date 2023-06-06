import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import {Toaster} from 'react-hot-toast';
import BrowseOrganiser from "./components/main/BrowseOrganiser";
import Organiserdetail from "./components/main/Organiserdetail";
import AdminAuth from "./auth/AdminAuth";
import Admin from "./components/admin";
import Addorganiser from "./components/admin/Addorganiser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          
          <Route path="main" element={<Main />}>
            <Route path="browseorganiser" element={<BrowseOrganiser />} />
            <Route path="organiserdetail/:id" element={<Organiserdetail />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route
            path="admin"
            element={
              <AdminAuth>
                <Admin />
              </AdminAuth>
            }
          >
            <Route path="addorganizer" element={<Addorganiser />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
