import React from 'react'

import { Footer } from './Footer'
import MetricAll from './MetricAll'
import { TopBar } from './TopBar'

export const ContentWrapper = () => {
  return (
   <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                <TopBar />
                <MetricAll />
                   
                </div>
                <Footer />
            </div>    
        </React.Fragment>
  )
}
