import React from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import {Link} from 'react-router-dom'
const Sidebar = () => {
    return (
        <>
            <aside id="side-overlay">

                <div className="content-header border-bottom">

                    <Link className="img-link me-1" to="124">
                        <img className="img-avatar img-avatar32" src="assets/media/Linkvatars/Linkvatar10.jpg" alt="" />
                    </Link>



                    <div className="ms-2">
                        <Link className="text-dark fw-semibold fs-sm" to="124">Sabri Hassanyah</Link>
                    </div>




                    <Link className="ms-auto btn btn-sm btn-alt-danger" to="124" data-toggle="layout"
                        data-action="side_overlay_close">
                        <i className="fa fa-fw fa-times"></i>
                    </Link>

                </div>



                <div className="content-side">

                    <div className="block block-transparent pull-x pull-t">
                        <ul className="nav nav-tabs nav-tabs-block nav-justified" role="tablist">
                            <li className="nav-item">
                                <button type="button" className="nav-link Active" id="so-overview-tab" data-bs-toggle="tab"
                                    data-bs-target="so-overview" role="tab" aria-controls="so-overview" aria-selected="true">
                                    <i className="fa fa-fw fa-coffee text-gray opacity-75 me-1"></i> Overview
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="nav-link" id="so-sales-tab" data-bs-toggle="tab" data-bs-target="so-sales"
                                    role="tab" aria-controls="so-sales" aria-selected="false">
                                    <i className="fa fa-fw fa-chart-line text-gray opacity-75 me-1"></i> Sales
                                </button>
                            </li>
                        </ul>
                        <div className="block-content tab-content overflow-hidden">

                            <div className="tab-pane pull-x fade fade-left show Active" id="so-overview" role="tabpanel"
                                aria-labelledby="so-overview-tab">

                                <div className="block block-transparent">
                                    <div className="block-header block-header-default">
                                        <h3 className="block-title">Recent Activity</h3>
                                        <div className="block-options">
                                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle"
                                                data-action-mode="demo">
                                                <i className="si si-refresh"></i>
                                            </button>
                                            <button type="button" className="btn-block-option" data-toggle="block-option"
                                                data-action="content_toggle"></button>
                                        </div>
                                    </div>
                                    <div className="block-content">

                                        <ul className="nav-items mb-0">
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-plus text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">New sale ($15)</div>
                                                        <div>Admin Template</div>
                                                        <small className="text-muted">3 min ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-pencil-alt text-info"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">You edited the file</div>
                                                        <div>Documentation.doc</div>
                                                        <small className="text-muted">15 min ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-trash text-danger"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">Project deleted</div>
                                                        <div>Line Icon Set</div>
                                                        <small className="text-muted">4 hours ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>



                                <div className="block block-transparent">
                                    <div className="block-header block-header-default">
                                        <h3 className="block-title">Online Friends</h3>
                                        <div className="block-options">
                                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle"
                                                data-action-mode="demo">
                                                <i className="si si-refresh"></i>
                                            </button>
                                            <button type="button" className="btn-block-option" data-toggle="block-option"
                                                data-action="content_toggle"></button>
                                        </div>
                                    </div>
                                    <div className="block-content">

                                        <ul className="nav-items mb-0">
                                            <li>
                                                <Link className="d-flex py-2" to="124">
                                                    <div className="me-3 ms-2 overlay-container overlay-bottom">
                                                        <img  className="img-avatar img-avatar48" src="assets/media/Linkvatars/Linkvatar8.jpg" alt="" />
                                                        <span
                                                            className="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">Barbara Scott</div>
                                                        <div className="text-muted">Copywriter</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="d-flex py-2" to="124">
                                                    <div className="me-3 ms-2 overlay-container overlay-bottom">
                                                        <img className="img-avatar img-avatar48" src="assets/media/Linkvatars/Linkvatar9.jpg" alt="" />
                                                        <span
                                                            className="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">Ryan Flores</div>
                                                        <div className="text-muted">Web Developer</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="d-flex py-2" to="124">
                                                    <div className="me-3 ms-2 overlay-container overlay-bottom">
                                                        <img  className="img-avatar img-avatar48" src="assets/media/Linkvatars/Linkvatar6.jpg" alt="" />
                                                        <span
                                                            className="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">Carol White</div>
                                                        <div className="text-muted">Web Designer</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="d-flex py-2" to="124">
                                                    <div className="me-3 ms-2 overlay-container overlay-bottom">
                                                        <img  className="img-avatar img-avatar48" src="assets/media/Linkvatars/Linkvatar4.jpg" alt="" />
                                                        <span
                                                            className="overlay-item item item-tiny item-circle border border-2 border-white bg-warning"></span>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">Sara Fields</div>
                                                        <div className="text-muted">Photographer</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="d-flex py-2" to="124">
                                                    <div className="me-3 ms-2 overlay-container overlay-bottom">
                                                        <img  className="img-avatar img-avatar48" src="assets/media/Linkvatars/Linkvatar11.jpg" alt="" />
                                                        <span
                                                            className="overlay-item item item-tiny item-circle border border-2 border-white bg-warning"></span>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">Jesse Fisher</div>
                                                        <div className="text-muted">Graphic Designer</div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>



                                <div className="block block-transparent mb-0">
                                    <div className="block-header block-header-default">
                                        <h3 className="block-title">Quick Settings</h3>
                                        <div className="block-options">
                                            <button type="button" className="btn-block-option" data-toggle="block-option"
                                                data-action="content_toggle"></button>
                                        </div>
                                    </div>
                                    <div className="block-content">

                                        <form action="be_pages_dashboard.html" method="POST" onsubmit="return false;">
                                            <div className="mb-4">
                                                <p className="fs-sm fw-semibold mb-2">
                                                    Online Status
                                                </p>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" value="" id="so-settings-check1"
                                                        name="so-settings-check1" checked />
                                                    <label className="form-check-label fs-sm" for="so-settings-check1">Show your status to all</label>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="fs-sm fw-semibold mb-2">
                                                    Auto Updates
                                                </p>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" value="" id="so-settings-check2"
                                                        name="so-settings-check2" checked />
                                                    <label className="form-check-label fs-sm" for="so-settings-check2">Keep up to date</label>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="fs-sm fw-semibold mb-1">
                                                    Application Alerts
                                                </p>
                                                <div className="space-y-2">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" value="" id="so-settings-check3"
                                                            name="so-settings-check3" checked />
                                                        <label className="form-check-label fs-sm" for="so-settings-check3">Email Notifications</label>
                                                    </div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" value="" id="so-settings-check4"
                                                            name="so-settings-check4" checked />
                                                        <label className="form-check-label fs-sm" for="so-settings-check4">SMS Notifications</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="fs-sm fw-semibold mb-1">
                                                    API
                                                </p>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" value="" id="so-settings-check5"
                                                        name="so-settings-check5" checked />
                                                    <label className="form-check-label fs-sm" for="so-settings-check5">Enable access</label>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </div>



                            <div className="tab-pane pull-x fade fade-right" id="so-sales" role="tabpanel" aria-labelledby="so-sales-tab">
                                <div className="block block-transparent mb-0">

                                    <div className="block-content">
                                        <div className="row items-push pull-t">
                                            <div className="col-6">
                                                <div className="fs-sm fw-semibold text-uppercase">Sales</div>
                                                <Link className="fs-lg" to="124">22.030</Link>
                                            </div>
                                            <div className="col-6">
                                                <div className="fs-sm fw-semibold text-uppercase">Balance</div>
                                                <Link className="fs-lg" to="124">$4.589,00</Link>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="block-content block-content-full block-content-sm bg-body-light">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="fs-sm fw-semibold text-uppercase">Today</span>
                                            </div>
                                            <div className="col-6 text-end">
                                                <span className="ext-muted">$996</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-content">
                                        <ul className="nav-items push">
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-plus text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">New sale! + $249</div>
                                                        <small className="text-muted">3 min ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-plus text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">New sale! + $129</div>
                                                        <small className="text-muted">50 min ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-plus text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">New sale! + $119</div>
                                                        <small className="text-muted">2 hours ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-plus text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">New sale! + $499</div>
                                                        <small className="text-muted">3 hours ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>



                                    <div className="block-content block-content-full block-content-sm bg-body-light">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="fs-sm fw-semibold text-uppercase">Yesterday</span>
                                            </div>
                                            <div className="col-6 text-end">
                                                <span className="text-muted">$765</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-content">
                                        <ul className="nav-items push">
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-plus text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">New sale! + $249</div>
                                                        <small className="text-muted">26 hours ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-minus text-danger"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">Product Purchase - $50</div>
                                                        <small className="text-muted">28 hours ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-plus text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">New sale! + $119</div>
                                                        <small className="text-muted">29 hours ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-minus text-danger"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">Paypal Withdrawal - $300</div>
                                                        <small className="text-muted">37 hours ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-plus text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">New sale! + $129</div>
                                                        <small className="text-muted">39 hours ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-plus text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">New sale! + $119</div>
                                                        <small className="text-muted">45 hours ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="text-dark d-flex py-2" to="124">
                                                    <div className="flex-shrink-0 me-3 ms-2">
                                                        <i className="fa fa-fw fa-plus text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 fs-sm">
                                                        <div className="fw-semibold">New sale! + $499</div>
                                                        <small className="text-muted">46 hours ago</small>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>


                                        <div className="text-center">
                                            <Link className="btn btn-sm btn-alt-secondary" to="124">
                                                <i className="fa fa-arrow-down opacity-50 me-1"></i> Load More..
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </aside>

            <nav id="sidebar" aria-label="Main Navigation">
                <div className="content-header">

                    <Link className="fw-semibold text-dual" to="index.html">
                        <span className="smini-visible">
                            <img alt="" className="mini-logo" src="assets/IMAGES/logo@2x.png" />
                        </span>
                        <span className="smini-hide fs-5 tracking-wider">Wolf<span className="fw-normal">Pack</span></span>
                    </Link>



                    <div>

                        {/* <button type="button" className="btn btn-sm btn-alt-secondary" data-toggle="layout"
                            data-action="dark_mode_toggle">
                            <i className="far fa-moon"></i>
                        </button> */}

                        <Link className="d-lg-none btn btn-sm btn-alt-secondary ms-1" data-toggle="layout" data-action="sidebar_close"
                            to="javascript:voide(0)">
                            <i className="fa fa-fw fa-times"></i>
                        </Link>

                    </div>

                </div>

                <div className="js-sidebar-scroll">

                    <div className="content-side">

                        <div className="logo">
                        <img  src="assets/IMAGES/logo@2x.png" className="main-logo" alt="" />
                       {/* <div className="profile-detail">
                       <h5>John Doe</h5>
                        <p>johndoe@withinpixels.com</p>
                       </div>
                            <Link to="fd" className="logo-wrapper">
                              
                            </Link> */}
                        </div>
                        <ul class="nav-main">
              <li class="nav-main-item">
                <Link class="nav-main-link active" to="Dashboard.html">
                 <i class="fas fa-tachometer-alt nav-main-link-icon"></i> 
                  <span class="nav-main-link-name">Dashboard</span>
                </Link>
              </li>
              <li class="nav-main-item">
                <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" to="">
                  <i class="nav-main-link-icon fas fa-code"></i>
                  <span class="nav-main-link-name">C² Console</span>
                </Link>
                <ul class="nav-main-submenu">
                  <li class="nav-main-item">
                    <Link class="nav-main-link" aria-haspopup="true" aria-expanded="false" to="Ops-Console.html">
      
                   <i class="nav-main-link-icon fas fa-book"></i>
									<span class="nav-main-link-name">Ops Console</span>
									<span class="label label-success pull-right">5</span>

                    </Link>
                  
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" to=""> 
                      <i class=" nav-main-link-icon fas fa-network-wired"></i>
                        <span class="nav-main-link-name">Networking</span>
                  
                    </Link>
                    <ul class="nav-main-submenu">
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="Listener.html">
                          <span class="nav-main-link-name">Listeners</span>
                        </Link>
                      </li>
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="">
                          <span class="nav-main-link-name">Socks</span>
                        </Link>
                      </li>
                   </ul>
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" to="">
                  
                      <i class=" nav-main-link-icon fas fa-balance-scale-right"></i>
                      <span class="nav-main-link-name">Payloads</span>
                    </Link>

                    <ul class="nav-main-submenu">
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="Artifacts-Generator.html">
                          <span class="nav-main-link-name">artifacts Generator</span>
                        </Link>
                      </li>
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="Artifacts-templates.html">
                          <span class="nav-main-link-name">artifacts Templates</span>
                        </Link>
                      </li>
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="">
                          <span class="nav-main-link-name">Commands/Tasks/Modules</span>
                        </Link>
                      </li>
                      <li class="nav-main-item">
                        <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" to="">
                       <span class="nav-main-link-name">Menu Level 2.2</span>
                        </Link>

                        <ul class="nav-main-submenu">
                          <li class="nav-main-item">
                            <Link class="nav-main-link" to="">
                              <span class="nav-main-link-name">Menu Level 3.1</span>
                            </Link>
                          </li>
                          <li class="nav-main-item">
                            <Link class="nav-main-link" to="">
                              <span class="nav-main-link-name">Menu Level 3.2</span>
                            </Link>
                          </li>
                          </ul>

                      </li>
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="">
                          <span class="nav-main-link-name">Menu Level 2.3</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" to="">
                      <i class="nav-main-link-icon fas fa-gopuram "></i>
                      <span class="nav-main-link-name">Capabilities</span>
                    
                    </Link>

                    <ul class="nav-main-submenu">
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="">
                          <span class="nav-main-link-name">Extentions</span>
                        </Link>
                      </li>
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="">
                          <span class="nav-main-link-name">SSS</span>
                        </Link>
                      </li>
                    
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-main-item">
                <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="true" to="">
                  <i class="nav-main-link-icon fas fa-user"></i>
                  <span class="nav-main-link-name">Profiles</span>
                </Link>
              </li>
              
              <li class="nav-main-item">
                <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="true" to="">
                  <i class="nav-main-link-icon fas fa-database"></i>
                  <span class="nav-main-link-name">Data Store</span>
                </Link>
                <ul class="nav-main-submenu">
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="Targets.html">
                      <i class="nav-main-link-icon fas fa-bullseye"></i>
                      <span class="nav-main-link-name">Targets</span>
                    </Link>
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="Credentials.html">
                      <i class="nav-main-link-icon fas fa-sign-in-alt"></i>
                      <span class="nav-main-link-name">Credentials</span>
                    </Link>
                </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-mobile-alt"></i>
                      <span class="nav-main-link-name">Screenshots</span>
                    </Link>
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="Downloads.html">
                      <i class="nav-main-link-icon fa fa-cloud-download-alt"></i>
                      <span class="nav-main-link-name">Downloads</span>
                    </Link>
                   
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-sync-alt"></i>
                      <span class="nav-main-link-name">Pivots</span>
                    </Link>
                   
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-thumbtack"></i>
                      <span class="nav-main-link-name">Executed Tasks</span>
                    </Link>
                  
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-blog"></i>
                      <span class="nav-main-link-name">Logs</span>
                    </Link>
                  </li>
                 
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-align-left"></i>
                      <span class="nav-main-link-name">sssss</span>
                    </Link>
                 </li>
                </ul>
              </li>
              <li class="nav-main-item">
                <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="true" to="">
                  <i class="nav-main-link-icon fas fa-user-clock"></i>
                  <span class="nav-main-link-name">Reporting</span>
                </Link>
               <ul class="nav-main-submenu">
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-chart-bar"></i>
                      <span class="nav-main-link-name">Analytics</span>
                    </Link>
                    
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-user-clock"></i>
                      <span class="nav-main-link-name">MITRE ATT&amp;CK MAPPING</span>
                    </Link>
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-user-clock"></i>
                      <span class="nav-main-link-name">Generate Report</span>
                    </Link>
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-user-clock"></i>
                      <span class="nav-main-link-name">Screenshots</span>
                    </Link>
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-user-clock"></i>
                      <span class="nav-main-link-name">Pivots</span>
                    </Link>
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link" to="">
                      <i class="nav-main-link-icon fas fa-user-clock"></i>
                      <span class="nav-main-link-name">Logs</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-main-item">
                <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" to="">
                
                  <i class="nav-main-link-icon fas fa-border-all"></i>
                  <span class="nav-main-link-name"> Administration</span>
                </Link>
                
                <ul class="nav-main-submenu">
          
                  <li class="nav-main-item">
                    <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" to=""> 
                      <i class=" nav-main-link-icon fas fa-ticket-alt"></i>
                        <span class="nav-main-link-name">AuthN &amp; AuthZ</span>
                    </Link>
                    <ul class="nav-main-submenu">
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="">
                          <span class="nav-main-link-name">Add/Remove Users</span>
                        </Link>
                      </li>
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="">
                          <span class="nav-main-link-name">User Roles</span>
                        </Link>
                      </li>
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="Token.html">
                          <span class="nav-main-link-name">Token</span>
                        </Link>
                      </li>
                   </ul>
                  </li>
                  <li class="nav-main-item">
                    <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" to="">
                  
                      <i class=" nav-main-link-icon fas fa-user-shield"></i>
                      <span class="nav-main-link-name">Redirectors</span>
                    </Link>
                    <ul class="nav-main-submenu">
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="">
                          <span class="nav-main-link-name">Redirector administration</span>
                        </Link>
                      </li>
                      <li class="nav-main-item">
                        <Link class="nav-main-link" to="">
                          <span class="nav-main-link-name">Redirector Logs</span>
                        </Link>
                      </li>
                      <li class="nav-main-item">
                        <Link class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" to="">
                          <span class="nav-main-link-name">Menu Level 3.0</span>
                        </Link>
                        <ul class="nav-main-submenu">
                          <li class="nav-main-item">
                            <Link class="nav-main-link" to="">
                              <span class="nav-main-link-name">Menu Level 3.1</span>
                            </Link>
                          </li>
                          <li class="nav-main-item">
                            <Link class="nav-main-link" to="">
                              <span class="nav-main-link-name">Menu Level 3.2</span>
                            </Link>
                          </li>
                          <li class="nav-main-item">
                            <Link class="nav-main-link" to="">
                              <span class="nav-main-link-name">Menu Level 4.1</span>
                            </Link>
    
                            
                          </li>
                          
                        </ul>

                      </li>
                      
                    </ul>
                  </li>
                </ul>
              </li>
         
        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Sidebar
