import React, { useContext } from 'react'
import pic1 from '../images/profile/education/pic1.jpg'
import AuthContext from "../context/AuthContext";
import { Link } from 'react-router-dom';
import LogoutBtn from './auth/LogoutBtn';



export default function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <div className="nav-header">
        <Link to="/" className="brand-logo">
          <img className="logo-abbr" src="images/logo-white-3.png" alt="" />
          <img className="logo-compact" src="images/logo-text-white.png" alt="" />
        </Link>

        {/* <div className="nav-control">
          <div className="hamburger">
            <span className="line"></span><span className="line"></span><span className="line"></span>
          </div>
        </div> */}
      </div>

      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">

              </div>
              {
                !loggedIn && (
                  <>
                    <div>
                      <li><Link style={{ color: 'white' }} className="has-arrow" to="/register" aria-expanded="false">
                        <i className="la la-register"></i>
                        <span className="nav-text">Register</span>
                      </Link>
                      </li>
                    </div>

                    <div>
                      <li><Link style={{ color: 'white' }} className="has-arrow" to="/login" aria-expanded="false">
                        <i className="la la-login"></i>
                        <span className="nav-text">Login</span>
                      </Link>
                      </li>
                    </div>
                  </>
                )
              }
              {
                loggedIn === true && (
                  <>
                    <li className="nav-label first">Main Menu</li>
                    <li><Link className="has-arrow" to="/" aria-expanded="false">
                      <i className="la la-home"></i>
                      <span className="nav-text">Dashboard</span>
                    </Link>
                      {/* <ul aria-expanded="false">
                       <li><a href="index.html">Dashboard 1</a></li>
                       <li><a href="index-2.html">Dashboard 2</a></li>
                       <li><a href="index-3.html">Dashboard 3</a></li>
                   </ul> */}
                    </li>
                    <li><Link className="ai-icon" to="/event-management" aria-expanded="false">
                      <i className="la la-calendar"></i>
                      <span className="nav-text">Event Management</span>
                    </Link>
                    </li>
                    <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">
                      <i className="la la-user"></i>
                      <span className="nav-text">Staff</span>
                    </a>
                      <ul aria-expanded="false">
                        <li><Link to="/all-staffs">All Staffs</Link></li>
                        <li><Link to="/add-staff">Add Staff</Link></li>
                        {/* <li><Link to="/edit-staff">Edit Staff</Link></li> */}
                        {/* <li><a href="professor-profile.html">Staff Profile</a></li> */}
                      </ul>
                    </li>
                    <li><Link className="has-arrow" to="/all-students" aria-expanded="false">
                      <i className="la la-users"></i>
                      <span className="nav-text">Students</span>
                    </Link>
                      <ul aria-expanded="false">
                        <li><Link to="/all-students">All Students</Link></li>
                        <li><Link to="/add-student">Add Students</Link></li>
                        {/* <li><Link to="/edit-student">Edit Students</Link></li> */}
                        {/* <li><Link to="about-student.html">About Students</Link></li> */}
                      </ul>
                    </li>
                    <li><Link className="has-arrow" to="/all-students" aria-expanded="false">
                      <i className="la la-users"></i>
                      <span className="nav-text">Exams Grades</span>
                    </Link>
                      <ul aria-expanded="false">
                        <li><Link to="/all-results">Result List</Link></li>
                        <li><Link to="/add-new-result">Add New Result</Link></li>
                        {/* <li><Link to="/edit-grade">Edit Grade List</Link></li> */}
                        {/* <li><Link to="about-student.html">About Students</Link></li> */}
                      </ul>
                    </li>
                    <li><Link className="has-arrow" to="/all-students" aria-expanded="false">
                      <i className="la la-users"></i>
                      <span className="nav-text">Homework</span>
                    </Link>
                      <ul aria-expanded="false">
                        <li><Link to="/grade-5">Grade 5</Link></li>
                        <li><Link to="/grade-4">Grade 4</Link></li>
                        <li><Link to="/grade-3">Grade 3</Link></li>
                        <li><Link to="/grade-2">Grade 2</Link></li>
                        <li><Link to="/grade-1">Grade 1</Link></li>
                        <li><Link to="/nursery-1">Nursery 1</Link></li>
                        <li><Link to="/nursery-2">Nursery 2</Link></li>
                        <li><Link to="/nursery-3">Nursery 3</Link></li>

                        {/* <li><Link to="/edit-grade">Edit Grade List</Link></li> */}
                        {/* <li><Link to="about-student.html">About Students</Link></li> */}
                      </ul>
                    </li>
                    <li><Link className="has-arrow" to="/upload-assignment" aria-expanded="false">
                      <i className="la la-users"></i>
                      <span className="nav-text">Assignment Upload</span>
                    </Link>
                      <ul aria-expanded="false">
                        {/* <li><Link to="/upload-assignment">Upload Assignment</Link></li> */}
                        {/* <li><Link to="/edit-grade">Edit Grade List</Link></li> */}
                        {/* <li><Link to="about-student.html">About Students</Link></li> */}
                      </ul>
                    </li>

                    <LogoutBtn />
                    {/* <li><Link className="has-arrow" to="/all-students" aria-expanded="false">
 <i className="la la-users"></i>
 <span className="nav-text">Accounts</span>
</Link>
 <ul aria-expanded="false">
  <li><Link to="/all-expenses">Expenses</Link></li>
  <li><Link to="/add-new-expense">Add New Expense</Link></li>
  <li><Link to="/edit-expense">Edit Expense List</Link></li>
  <li><Link to="about-student.html">About Students</Link></li>
 </ul>
</li> */}
                    {/* <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">
 <i className="la la-graduation-cap"></i>
 <span className="nav-text">Courses</span>
</a>
 <ul aria-expanded="false">
  <li><a href="all-courses.html">All Courses</a></li>
  <li><a href="add-courses.html">Add Courses</a></li>
  <li><a href="edit-courses.html">Edit Courses</a></li>
  <li><a href="about-courses.html">About Courses</a></li>
 </ul>
</li> */}
                    {/* <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">
 <i className="la la-book"></i>
 <span className="nav-text">Library</span>
</a>
 <ul aria-expanded="false">
  <li><a href="all-library.html">All Library</a></li>
  <li><a href="add-library.html">Add Library</a></li>
  <li><a href="edit-library.html">Edit Library</a></li>
 </ul>
</li> */}
                    {/* <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">
 <i className="la la-dollar"></i>
 <span className="nav-text">Fees</span>
</a>
 <ul aria-expanded="false">
  <li><Link to="/add-fees">Fees Collection</Link></li>
  <li><Link to="/add-fees">Add Fees</Link></li>
  <li><Link to="fees-receipt.html">Fees Receipt</Link></li>
 </ul>
</li> */}
                  </>
                )
              }

              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown notification_dropdown">
                  {/* <a className="nav-link bell ai-icon" href="#" role="button" data-toggle="dropdown">
                          <svg id="icon-user" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                          </svg>
                          <div className="pulse-css"></div>
                        </a> */}
                  <div className="dropdown-menu dropdown-menu-right">
                    <ul className="list-unstyled">
                      <li className="media dropdown-item">
                        <span className="success"><i className="ti-user"></i></span>
                        <div className="media-body">
                          <a href="#">
                            <p><strong>Martin</strong> has added a <strong>customer</strong> Successfully </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="primary"><i className="ti-shopping-cart"></i></span>
                        <div className="media-body">
                          <a href="#">
                            <p><strong>Jennifer</strong> purchased Light Dashboard 2.0.</p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="danger"><i className="ti-bookmark"></i></span>
                        <div className="media-body">
                          <a href="#">
                            <p><strong>Robin</strong> marked a <strong>ticket</strong> as unsolved.
                                                        </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="primary"><i className="ti-heart"></i></span>
                        <div className="media-body">
                          <a href="#">
                            <p><strong>David</strong> purchased Light Dashboard 1.0.</p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="success"><i className="ti-image"></i></span>
                        <div className="media-body">
                          <a href="#">
                            <p><strong> James.</strong> has added a<strong>customer</strong> Successfully
                                                        </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                    </ul>
                    <a className="all-notification" href="#">See all notifications <i
                      className="ti-arrow-right"></i></a>
                  </div>
                </li>
                {/* <li className="nav-item dropdown header-profile">
                        <a className="nav-link" href="#" role="button" data-toggle="dropdown">
                          <img src={pic1} width="20" alt="" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="./app-profile.html" className="dropdown-item ai-icon">
                            <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <span className="ml-2">Profile </span>
                          </a>
                          <a href="./email-inbox.html" className="dropdown-item ai-icon">
                            <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <span className="ml-2">Inbox </span>
                          </a>
                          <a href="./page-login.html" className="dropdown-item ai-icon">
                            <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                            <span className="ml-2">Logout </span>
                          </a>
                        </div>
                      </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )

}