import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const CEVideos = () => {
    return (
        <>
        <div className="container">
        <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard disabledDownload="1" label="Module 5" viewUrl="https://cciitpatna.sharepoint.com/:v:/r/sites/CE102EnvironmentalStudiesG1-G6/Class%20Materials/Lecture%20Recordings%20(9th%20May%20onwards)/L20%20-%209th%20May,%202022.mp4?csf=1&web=1&e=eLIZ2y" />
                    <ImgMediaCard disabledDownload="1" label="Module 6" viewUrl="https://cciitpatna.sharepoint.com/:v:/r/sites/CE102EnvironmentalStudiesG1-G6/Class%20Materials/Lecture%20Recordings%20(9th%20May%20onwards)/L21%20-%2010th%20May,%202022.mp4?csf=1&web=1&e=9fxTLO" />
                </Box>
            </Zoom>
            <div className="flex-container2">
            <hr class="hr-text1" data-content="Post MSE" width="40%"></hr>
            Post MidSem Examination
            <hr class="hr-text2" data-content="Post MSE" width="40%"></hr>
            </div>
           </div>
        </>
    )
}

export default CEVideos
