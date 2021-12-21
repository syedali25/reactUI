import React,{ useState }  from 'react'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Header = () => {
  const [drawer, setDrawer] = React.useState(false)



  const Header = () => {
    const [drawer, setDrawer] = React.useState(false)
  
    const [inputField , setInputField] = useState({
      email: '',
      password: ''
  })
  const inputsHandler = (e) =>{
    const { name, value } = e.target;
   setInputField((prevState) => ({
     ...prevState,
     [name]: value,
   }));
  }
  const navigate  = useNavigate();
    const submitLogout = (e) =>{
      
     
      e.preventDefault();
      console.log(inputField.email)
      console.log(inputField.password)
      axios.post(`http://localhost:7000/logout`, JSON.stringify(inputField) ,{
        headers: {
        'Content-Type': 'application/json'
        }})
        .then(res => {
          localStorage.removeItem("itemName")
          console.log(res);
          const status = res.status;
          console.log("Hello world!",status);
          navigate('/');
          window.location.reload()
    
        })
  }

  return (
    <>
      <SwipeableDrawer open={drawer} style={{ right: 0, width: "250!important" }} width="50%" variant="temporary"
        anchor="right">
        <IconButton className='close-icon-drawer' onClick={(e) => setDrawer(!drawer)}><CancelIcon /></IconButton>
        <div className="notification-area">
          <h3>Notifications</h3>

          <div>
            <ul class="nav-items mb-0">
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-check-circle text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">You have a new follower</div>
                    <span class="fw-medium text-muted">15 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-plus-circle text-primary"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">1 new sale, keep it up</div>
                    <span class="fw-medium text-muted">22 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-times-circle text-danger"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">Update failed, restart server</div>
                    <span class="fw-medium text-muted">26 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-plus-circle text-primary"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">2 new sales, keep it up</div>
                    <span class="fw-medium text-muted">33 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-user-plus text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">You have a new subscriber</div>
                    <span class="fw-medium text-muted">41 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-check-circle text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">You have a new follower</div>
                    <span class="fw-medium text-muted">42 min ago</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </SwipeableDrawer>
      <header id="page-header">

        <div className="content-header">

          <div className="d-flex align-items-center">


            <IconButton style={{ background: "none" }} className="d-lg-none" data-toggle="layout"
              data-action="sidebar_toggle">
              <MenuOpenIcon />
            </IconButton>
            <IconButton style={{ background: "none" }} className="d-none d-lg-inline-block" data-toggle="layout"
              data-action="sidebar_mini_toggle">
              <MenuOpenIcon />
            </IconButton>







          </div>

          <div className="d-flex align-items-center">
            <div className="dropdown d-inline-block ms-2">
              <IconButton style={{ background: "none" }} onClick={(e) => setDrawer(!drawer)} id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <NotificationsNoneIcon />
                <span className="text-primary icon-indicator">•</span>
              </IconButton>



            </div>
            <div className="dropdown d-inline-block ms-2">
              <div className="d-flex align-items-center"
                id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="pname">
                  <span className="d-none d-sm-inline-block ms-2 profile-name" >Sabri Hassanyah</span>
                  <p className="authority">Guest</p>
                </div>
                {/* <i className ="fa fa-fw fa-angle-down d-none d-sm-inline-block ms-1 mt-1"></i> */}
                <img className="rounded-circle bg-dark" src="assets/IMAGES/user-4.png" alt="Header Avatar" height="30px" />

              </div>
              <div className="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
                aria-labelledby="page-header-user-dropdown">

                <div className="p-2">

                  <a className="dropdown-item d-flex align-items-center justify-content-between" href="Locked-screen.html">
                    <span onClick={submitLogout} className="fs-sm fw-medium"><LockOutlinedIcon /> Login</span>
                  </a>
                  <a className="dropdown-item d-flex align-items-center justify-content-between" href="Login.html">
                    <span className="fs-sm fw-medium"><PersonAddAltIcon /> Register</span>
                  </a>
                </div>
              </div>
            </div>




            {/* 
                        <button type="button" className="btn btn-sm btn-alt-secondary ms-2" data-toggle="layout"
                            data-action="side_overlay_toggle">
                            <i className="fa fa-fw fa-list-ul fa-flip-horizontal"></i>

                        </button> */}

          </div>

        </div>

        <div id="page-header-search" className="overlay-header bg-body-extra-light">
          <div className="content-header">
            <form className="w-100" action="be_pages_generic_search.html" method="POST">
              <div className="input-group">

                <button type="button" className="btn btn-alt-danger" data-toggle="layout" data-action="header_search_off">
                  <i className="fa fa-fw fa-times-circle"></i>
                </button>
                <input type="text" className="form-control" placeholder="Search or hit ESC.." id="page-header-search-input"
                  name="page-header-search-input" />
              </div>
            </form>
          </div>
        </div>



        <div id="page-header-loader" className="overlay-header bg-body-extra-light">
          <div className="content-header">
            <div className="w-100 text-center">
              <i className="fa fa-fw fa-circle-notch fa-spin"></i>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}
}
export default Header
