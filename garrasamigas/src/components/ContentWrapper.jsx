import React from 'react'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'

import TopBar from './TopBar'

export const ContentWrapper = () => {
  return (
    <React.Fragment>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <TopBar />
               <ContentRowTop/>
              
            </div>
            <Footer />
        </div>    
    </React.Fragment>
)
}
