import React from 'react'
import "../../index.css"
const Footer = () => {
    return (
        <>
            <footer id="page-footer" classname="bg-body-light">
                <div classname="content py-3">
                    <div classname="" style={{ display: "flex", justifyContent: 'space-between', padding: '5px 25px' }}>
                        <div classname="col-sm-6 order-sm-2 py-1 text-center text-sm-end">

                        </div>
                        <div classname="col-sm-6 order-sm-1 py-1 text-center text-sm-start">
                            <a classname="fw-semibold" href="tregtr" target="_blank">Sabri Hassanyah</a> &copy; <span
                                data-toggle="year-copy"></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
