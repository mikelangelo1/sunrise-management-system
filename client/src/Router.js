import React, { useContext } from 'react'
import AuthContext from './context/AuthContext'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from "./pages/Home"
import Register from './components/auth/Register'
import EventManagement from "./pages/EventManagement";

import AllStaffs from "./pages/Staff/AllStaffs";
import AddStaff from "./pages/Staff/AddStaff";
import EditStaff from "./pages/Staff/EditStaff";

import AllStudents from "./pages/Student/AllStudents"
import AddStudent from "./pages/Student/AddStudent";
import EditStudent from "./pages/Student/EditStudent"

import AddNewResult from "./pages/Examination/AddNewResult";
import AllResult from "./pages/Examination/AllResult";
import EditResult from "./pages/Examination/EditResult";


import AddNewExpense from "./pages/Accounts/AddNewExpense";
import AllExpenses from "./pages/Accounts/AllExpenses";
import AddFees from "./pages/Fees/AddFees";
import Footer from "./components/Footer"
import UploadAssignment from "./pages/Assignment/UploadAssignment";
import ForTeachers from "./pages/ForTeachers/ForTeachers";
import ForParents from "./pages/ForParents/ForParents";
// import TeachersHome from "./pages/ForTeachers/TeachersHome";
import Login from "./components/auth/Login"



function Router() {
    const { loggedIn } = useContext(AuthContext);
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {
                        loggedIn === false && (
                            <>
                                <Route path="/register" component={Register} />
                                <Route path="/login" component={Login} />
                            </>
                        )
                    }

                    {
                        loggedIn === true && (
                            <>
                                <Route path="/event-management" component={EventManagement} />

                                {/* Staff Frontend Routes */}
                                <Route path="/all-staffs" component={AllStaffs} />
                                <Route path="/add-staff" component={AddStaff} />
                                <Route path="/edit-staff/:id" component={EditStaff} />

                                {/* Student Frontend Route */}
                                <Route path="/all-students" component={AllStudents} />
                                <Route path="/add-student" component={AddStudent} />
                                <Route path="/edit-student/:id" component={EditStudent} />

                                {/* Result Frontend Route */}
                                <Route path="/all-results" component={AllResult} />
                                <Route path="/add-new-result" component={AddNewResult} />
                                <Route path="/edit-result/:id" component={EditResult} />


                                <Route path="/add-new-expense" component={AddNewExpense} />
                                <Route path="/all-expenses" component={AllExpenses} />

                                <Route path="/add-fees" component={AddFees} />
                                <Route path="/upload-assignment" component={UploadAssignment} />

                                <Route path="/teachers" component={ForTeachers} />

                                {/* <Route path="/teachers/:home/" component={TeachersHome} /> */}

                                <Route path="/parents" component={ForParents} />

                            </>
                        )
                    }

                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default Router