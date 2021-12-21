import React from 'react'
import Layout from '../components/layout/Layout'
import { Button, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Console = () => {
    return (
        <>
            <Layout page={
                <>
                    <div className="bg-body-light" style={{ color: "#e9ecef", background: "#1F2937", width: "100%", paddingBottom: "6.875rem" }}>
                        <div className="content content-full start-box">
                            <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                                <div class="">
                                    <h1 class="h3 fw-bold mb-2">
                                        Ops Console
                                    </h1>
                                    <h2 class=" h4 fs-base lh-base fw-medium text-muted mb-0">
                                        Beacons command and control console
                                    </h2>
                                </div>

                                <div className="d-flex" style={{
                                    justifyContent: "center", alignItems: "center"

                                }}>
                                    <div className="">
                                    </div>
                                    <div className="serachbar-content" style={{ width: { xxl: '500px' } }}>
                                        <div class="input-group input-group-sm p-2 bg-white" style={{ borderRadius: 34, padding: '10px 20px' }}>
                                            <span class="input-group-text bg-white border-0"><i class="fa fa-fw fa-search"></i></span>
                                            <input type="text" class="form-control border-0 bg-white form-control-alt" placeholder="Search.." id="searchbar" name="page-header-search-input2" />

                                        </div>
                                    </div>
                                    {/* <div className="">
                                    <button className="btn btn-primary">Add new product</button>
                                </div> */}
                                </div>
                                <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
                                    <ol class="breadcrumb breadcrumb-alt">
                                        <li class="breadcrumb-item">
                                            <a class="link-fx text-dark" href="javascript:void(0)">
                                                <i class="fa fa-home"></i> &nbsp; Home</a>
                                        </li>

                                        <li class="breadcrumb-item" aria-current="page">
                                            <a class="link-fx text-dark" href="javascript:void(0)">
                                                C2 Console
                                            </a>
                                        </li>
                                        <li class="breadcrumb-item text-primary">

                                            Ops Console

                                        </li>
                                    </ol>

                                </nav>

                            </div>



                        </div>
                    </div>
                    <div className="block block-rounded mt-5 mx-4 page-absolute">

                        <div className="panel panel-default bg-white">


                            <div className="panel-body">
                                <div className="block-content block-content-full">
                                    <ul class="nav nav-tabs justify-content-end">
                                        <li class="active">
                                            <a href="#table-view" data-toggle="tab">Table View</a>
                                        </li>
                                        <li class="">
                                            <a href="#pivot-view" data-toggle="tab">Pivot View</a>
                                        </li>
                                        <li class="">
                                            <a href="#list-view" data-toggle="tab">Removed</a>
                                        </li>

                                        <a href="#">
                                            <i class="fa fa-cog"></i>
                                        </a>


                                        <a href="#" data-toggle="panel">

                                            <i class="fas fa-minus"></i>
                                        </a>

                                        <a href="#" data-toggle="reload">
                                            <i class="fas fa-redo-alt"></i>
                                        </a>

                                        <a href="#" data-toggle="remove">
                                            <i class="fas fa-times"></i>
                                        </a>

                                    </ul>
                                    <div className="table-responsive">
                                        <table className="table w-100 table-bordered table-striped datatable text-center">
                                            <thead>
                                                <tr>
                                                    <td>Action</td>
                                                    <td>External IP</td>
                                                    <td>Enternal IP</td>
                                                    <td>Listeners</td>
                                                    <td>Host Name</td>
                                                    <td>User</td>
                                                    <td>Realm</td>
                                                    <td>Process</td>
                                                    <td>Arch</td>
                                                    <td>PID</td>
                                                    <td>Last</td>
                                                    <td>Last</td>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">

                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>
                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-center fs-sm">

                                                        <div class="dropdown">
                                                            <IconButton id="dropdown-default-outline-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MoreVertIcon /></IconButton>

                                                            <div class="dropdown-menu fs-sm bg-dark" aria-labelledby="dropdown-default-outline-secondary">
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Interact</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Spawn</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Monitor(SOS)</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Pivot</a>
                                                                <div class="dropdown-divider f-color"></div>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Remove</a>
                                                                <a class="dropdown-item f-color" href="javascript:void(0)">Exit</a>
                                                            </div>
                                                        </div></td>
                                                    <td className="fw-semibold fs-sm">1.1.1.1</td>
                                                    <td className=" fs-sm">
                                                        <span className="text-muted"> 192.168.44.11 </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted"> ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">ACME.COM</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">powershell.exe</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">x86</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">59773</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">23ms</span>
                                                    </td>

                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='section mt-4'>
                            <div class="block block-rounded bg-white">
                                <ul class="nav nav-tabs nav-tabs-block" role="tablist">
                                    <li class="nav-item">
                                        <button class="nav-link active" id="btabs-animated-slideup-home-tab" data-bs-toggle="tab"
                                            data-bs-target="#btabs-animated-slideup-home" role="tab" aria-controls="btabs-animated-slideup-home"
                                            aria-selected="true">

                                            USER-111@WKSTN-1111:59773</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="nav-link" id="btabs-animated-slideup-profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                            aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                            USER-111@WKSTN-1111:59773</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="nav-link" id="btabs-animated-slideup-profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                            aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                            SQL-1@DBA-1:19152</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="nav-link" id="btabs-animated-slideup-profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                            aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                            USER-111@WKSTN-1111:59773</button>
                                    </li>

                                    <li class="nav-item ms-auto">
                                        <button class="nav-link" id="btabs-animated-slideup-settings-tab" data-bs-toggle="tab"
                                            data-bs-target="#btabs-animated-slideup-settings" role="tab"
                                            aria-controls="btabs-animated-slideup-settings" aria-selected="false">
                                            <IconButton ><SettingsIcon /></IconButton>
                                        </button>
                                    </li>
                                </ul>
                                <div class="block-content tab-content overflow-hidden">
                                    <div class="tab-pane fade fade-up show active p-4" id="btabs-animated-slideup-home" role="tabpanel"
                                        aria-labelledby="btabs-animated-slideup-home-tab">



                                        <div class="row">
                                            <div class="col-lg-2 mx-0 px-0">

                                                <div class="block block-rounded">
                                                    <ul class="nav nav-tabs nav-tabs-block" role="tablist">
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link active" id="btabs-animated-slideup-home-tab-1" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-home" role="tab" aria-controls="btabs-animated-slideup-home"
                                                                aria-selected="true">

                                                                Console</button>
                                                        </li>
                                                        <hr />
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-2" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Processes</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-3" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                filebrowser</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-4" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Screenshots</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-5" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Application </button>
                                                        </li>

                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-6" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Services</button>
                                                        </li>
                                                    </ul>



                                                </div>

                                            </div>

                                            <div class="col-lg-10">
                                                <h3>USER-111\ACME.COM@WKSTN-1111-Console</h3>
                                                <p>powershell.exe | 59773 | x86 | (0.23ms)</p>

                                                <p><br /><code>Directory: C:\Users\KING</code></p>
                                                <p><br /><code>Mode LastWriteTime Length Name</code><br /><code>---- ------------- ------ ----</code><br /><code>d----- 5/26/2020 1:37 AM .dotnet</code><br /><code>d----- 2/10/2021 2:59 AM .frida</code><br /><code>d----- 3/5/2020 5:58 AM .gem</code><br /><code>d----- 8/19/2020 11:32 AM .local</code><br /><code>d----- 3/29/2020 9:12 PM .nuget</code><br /><code>d----- 3/22/2020 8:12 PM .omnisharp</code><br /><code>d----- 6/5/2020 6:29 AM .ssh</code><br /><code>d----- 3/16/2020 5:04 PM .templateengine</code><br /><code>d----- 3/3/2020 9:09 PM .vscode</code><br /><code>d-r--- 5/13/2021 5:34 PM 3D Objects</code><br /><code>d-r--- 5/13/2021 5:34 PM Contacts</code><br /><code>d-r--- 6/27/2021 5:04 PM Desktop</code><br /><code>d-r--- 5/13/2021 5:34 PM Documents</code><br /><code>d-r--- 6/27/2021 4:57 PM Downloads</code><br /><code>d-r--- 5/13/2021 5:34 PM Favorites</code><br /><code>d-r--- 5/13/2021 5:34 PM Links</code><br /><code>d-r--- 5/13/2021 5:34 PM Music</code><br /><code>d-r--- 6/28/2021 12:44 AM OneDrive</code><br /><code>d-r--- 5/13/2021 5:34 PM Pictures</code><br /><code>d-r--- 5/13/2021 5:34 PM Saved Games</code><br /><code>d-r--- 5/13/2021 5:34 PM Searches</code><br /><code>d----- 3/16/2020 3:35 PM Source</code><br /><code>d-r--- 5/13/2021 5:34 PM Videos</code><br /><code>-a---- 7/7/2020 12:32 PM 2850 .aggressor.prop</code><br /><code>-a---- 7/6/2020 8:02 AM 21 .cobaltstrike.license</code><br /><code>-a---- 5/27/2020 2:47 AM 37 .gitconfig</code><br /><code>-a---- 8/19/2020 3:25 PM 89 .irbrc</code><br /><code>-a---- 8/19/2020 3:36 PM 21 .irb_history</code><br /><code>-a---- 3/21/2021 4:43 PM 21415 example.js</code><br /><code>-a---- 5/27/2020 4:55 AM 708 InstallUtil.InstallLog</code><br /><code>-a---- 3/23/2021 7:07 AM 4096 TestAssembly.dll</code><br /><code>-a---- 3/26/2021 11:22 AM 20157 TestAssembly.js</code></p>

                                            </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane fade fade-up p-4" id="btabs-animated-slideup-profile" role="tabpanel"
                                        aria-labelledby="btabs-animated-slideup-profile-tab">

                                        <div class="row">
                                            <div class="col-lg-2 mx-0 px-0">

                                                <div class="block block-rounded">
                                                    <ul class="nav nav-tabs nav-tabs-block" role="tablist">
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link active" id="btabs-animated-slideup-home-tab-1" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-home" role="tab" aria-controls="btabs-animated-slideup-home"
                                                                aria-selected="true">

                                                                Console</button>
                                                        </li>
                                                        <hr />
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-2" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Processes</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-3" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                filebrowser</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-4" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Screenshots</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-5" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Application </button>
                                                        </li>

                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-6" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Services</button>
                                                        </li>
                                                    </ul>



                                                </div>

                                            </div>

                                            <div class="col-lg-10">
                                                <h3>USER-111\ACME.COM@WKSTN-1111-Processes</h3>
                                                <p>powershell.exe | 59773 | x86 | (0.23ms)</p>

                                                <p>
                                                    <p><code>PS C:\Users\KING&gt; ipconfig /all</code></p>
                                                    <p><code>Windows IP Configuration</code></p>
                                                    <p><code>Host Name . . . . . . . . . . . . : RTO</code><br /><code>Primary Dns Suffix . . . . . . . : vulnerable.com</code><br /><code>Node Type . . . . . . . . . . . . : Hybrid</code><br /><code>IP Routing Enabled. . . . . . . . : No</code><br /><code>WINS Proxy Enabled. . . . . . . . : No</code><br /><code>DNS Suffix Search List. . . . . . : vulnerable.com</code></p>
                                                    <p><code>Unknown adapter Local Area Connection:</code></p>
                                                    <p><code>Media State . . . . . . . . . . . : Media disconnected</code><br /><code>Connection-specific DNS Suffix . :</code><br /><code>Description . . . . . . . . . . . : TAP-Windows Adapter V9 for OpenVPN Connect</code><br /><code>Physical Address. . . . . . . . . : 00-FF-10-C3-2B-9A</code><br /><code>DHCP Enabled. . . . . . . . . . . : No</code><br /><code>Autoconfiguration Enabled . . . . : Yes</code></p>
                                                    <p><code>Ethernet adapter Ethernet0:</code></p>
                                                    <p><code>Connection-specific DNS Suffix . :</code><br /><code>Description . . . . . . . . . . . : Intel(R) 82574L Gigabit Network Connection</code><br /><code>Physical Address. . . . . . . . . : 00-0C-29-0D-6B-4C</code><br /><code>DHCP Enabled. . . . . . . . . . . : Yes</code><br /><code>Autoconfiguration Enabled . . . . : Yes</code><br /><code>IPv4 Address. . . . . . . . . . . : 192.168.100.93(Preferred)</code><br /><code>Subnet Mask . . . . . . . . . . . : 255.255.255.0</code><br /><code>Lease Obtained. . . . . . . . . . : Tuesday, July 6, 2021 12:40:24 PM</code><br /><code>Lease Expires . . . . . . . . . . : Tuesday, September 14, 2021 12:40:25 PM</code><br /><code>Default Gateway . . . . . . . . . : 192.168.100.1</code><br /><code>DHCP Redirector . . . . . . . . . . . : 192.168.100.1</code><br /><code>DNS Redirectors . . . . . . . . . . . : 192.168.100.89</code><br /><code>192.168.100.1</code><br /><code>NetBIOS over Tcpip. . . . . . . . : Enabled</code></p>
                                                    <p><code>Ethernet adapter Bluetooth Network Connection:</code></p>
                                                    <p><code>Media State . . . . . . . . . . . : Media disconnected</code><br /><code>Connection-specific DNS Suffix . :</code><br /><code>Description . . . . . . . . . . . : Bluetooth Device (Personal Area Network)</code><br /><code>Physical Address. . . . . . . . . : 34-C9-3D-4D-81-CB</code><br /><code>DHCP Enabled. . . . . . . . . . . : Yes</code><br /><code>Autoconfiguration Enabled . . . . : Yes</code><br /><code>PS C:\Users\KING&gt;</code></p>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade fade-up p-4" id="btabs-animated-slideup-profile" role="tabpanel"
                                        aria-labelledby="btabs-animated-slideup-profile-tab">

                                        <div class="row">
                                            <div class="col-lg-2 mx-0 px-0">

                                                <div class="block block-rounded">
                                                    <ul class="nav nav-tabs nav-tabs-block" role="tablist">
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link active" id="btabs-animated-slideup-home-tab-1" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-home" role="tab" aria-controls="btabs-animated-slideup-home"
                                                                aria-selected="true">

                                                                Console</button>
                                                        </li>
                                                        <hr />
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-2" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Processes</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-3" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                filebrowser</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-4" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Screenshots</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-5" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Application </button>
                                                        </li>

                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-6" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Services</button>
                                                        </li>
                                                    </ul>



                                                </div>

                                            </div>

                                            <div class="col-lg-10">
                                                <h3>USER-111\ACME.COM@WKSTN-1111-FileBrowser</h3>
                                                <p>powershell.exe | 59773 | x86 | (0.23ms)</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade fade-up p-4" id="btabs-animated-slideup-profile" role="tabpanel"
                                        aria-labelledby="btabs-animated-slideup-profile-tab">
                                        <h4 class="fw-normal">SQL-1@DBA-1:19152</h4>

                                        <div class="row">
                                            <div class="col-lg-2 mx-0 px-0">

                                                <div class="block block-rounded">
                                                    <ul class="nav nav-tabs nav-tabs-block" role="tablist">
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link active" id="btabs-animated-slideup-home-tab-1" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-home" role="tab" aria-controls="btabs-animated-slideup-home"
                                                                aria-selected="true">

                                                                Console</button>
                                                        </li>
                                                        <hr />
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-2" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Processes</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-3" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                filebrowser</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-4" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Screenshots</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-5" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Application </button>
                                                        </li>

                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-6" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Services</button>
                                                        </li>
                                                    </ul>



                                                </div>

                                            </div>

                                            <div class="col-lg-10">
                                                <h3>USER-111\ACME.COM@WKSTN-1111- Screenshot</h3>
                                                <p>powershell.exe | 59773 | x86 | (0.23ms)</p>
                                                <p> There is no any user screen shoots available here</p>

                                            </div>
                                        </div>
                                    </div>


                                    <div class="tab-pane fade fade-up p-4" id="btabs-animated-slideup-settings" role="tabpanel"
                                        aria-labelledby="btabs-animated-slideup-settings-tab">
                                        <h4 class="fw-normal">Settings Content</h4>

                                        <div class="row">
                                            <div class="col-lg-2 mx-0 px-0">

                                                <div class="block block-rounded">
                                                    <ul class="nav nav-tabs nav-tabs-block" role="tablist">
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link active" id="btabs-animated-slideup-home-tab-1" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-home" role="tab" aria-controls="btabs-animated-slideup-home"
                                                                aria-selected="true">

                                                                Console</button>
                                                        </li>
                                                        <hr />
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-2" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Processes</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-3" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                filebrowser</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-4" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Screenshots</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-5" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Application </button>
                                                        </li>

                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-6" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Services</button>
                                                        </li>
                                                    </ul>



                                                </div>

                                            </div>

                                            <div class="col-lg-10">
                                                <h3>USER-111\ACME.COM@WKSTN-1111-Application</h3>
                                                <p>powershell.exe | 59773 | x86 | (0.23ms)</p>

                                            </div>
                                        </div>


                                    </div>
                                    <div class="tab-pane fade fade-up p-4" id="btabs-animated-slideup-settings" role="tabpanel"
                                        aria-labelledby="btabs-animated-slideup-settings-tab">
                                        <h4 class="fw-normal">Settings Content</h4>

                                        <div class="row">
                                            <div class="col-lg-2 mx-0 px-0">

                                                <div class="block block-rounded">
                                                    <ul class="nav nav-tabs nav-tabs-block" role="tablist">
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link active" id="btabs-animated-slideup-home-tab-1" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-home" role="tab" aria-controls="btabs-animated-slideup-home"
                                                                aria-selected="true">

                                                                Console</button>
                                                        </li>
                                                        <hr />
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-2" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Processes</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-3" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                filebrowser</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link" id="btabs-animated-slideup-profile-tab-4" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Screenshots</button>
                                                        </li>
                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-5" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Application </button>
                                                        </li>

                                                        <li class="nav-item p-4">
                                                            <button class="nav-link " id="btabs-animated-slideup-profile-tab-6" data-bs-toggle="tab"
                                                                data-bs-target="#btabs-animated-slideup-profile" role="tab"
                                                                aria-controls="btabs-animated-slideup-profile" aria-selected="false">
                                                                Services</button>
                                                        </li>
                                                    </ul>



                                                </div>

                                            </div>

                                            <div class="col-lg-10">
                                                <h3>USER-111\ACME.COM@WKSTN-1111-Services</h3>
                                                <p>powershell.exe | 59773 | x86 | (0.23ms)</p>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder='Enter your command' className="form-control" />
                                </div>
                            </div>
                        </div>


                    </div>
                </>

            } />
        </>
    )
}

export default Console
