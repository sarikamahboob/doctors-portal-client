import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Appointment from "./Components/Appointment/Appointment";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/Login/RequireAuth";
import SignUp from "./Components/Login/SignUp";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyAppointments from "./Components/Dashboard/MyAppointments";
import MyReview from "./Components/Dashboard/MyReview";
import MyHistory from "./Components/Dashboard/MyHistory";
import Users from "./Components/Dashboard/Users";
import RequireAdmin from "./Components/Login/RequireAdmin";
import AddDoctor from "./Components/Dashboard/AddDoctor";
import ManageDoctors from "./Components/Dashboard/ManageDoctors";
import Payment from "./Components/Dashboard/Payment";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
