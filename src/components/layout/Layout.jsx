import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
const Layout = ({page}) => {
    return (
        <>
            <div id="page-container" className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow">
                <Sidebar />
                <Header />

                <main id="main-container" style={{width:"100%"}}>
                 
                    
                   {page}
                </main>
                <Footer />
            </div>
    </>
    )
}

export default Layout
