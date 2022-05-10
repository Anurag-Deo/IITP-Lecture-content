import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const CSVideos = () => {
    return (
        <>
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Class 1" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/832e51559210103abbdf36fbe65880c4" content="Password :- 6vXt4pZJ" />
            <ImgMediaCard label="Class 2" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/470c4e6692e2103abfb70e374a0340e9" content="Password :- jJV5Bwfp" />
            <ImgMediaCard label="Class 3" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/92962db393b4103abfe97a911ca6fe0c" content="Password :- jFU6scug" />
            <ImgMediaCard label="Class 4" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/6f137aef9790103a938bfa462462ca7d" content="Password :- mMSaHpD8" />
            <ImgMediaCard label="Class 5" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/88e7882a9862103abebfbeeb4afcb765" content="Password :- yHdQ5j84" />
            </Box>
            </Zoom>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                <ImgMediaCard label="Class 6" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/626eac159933103abd5d72ee73dabff8" content="Password :- mKAP9pJs" />
                <ImgMediaCard label="Class 7" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/0bd98f7f9d11103ab20f005056812961" content="Password :- Rg3XhRTi" />
                <ImgMediaCard label="Class 8" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/62831c6ba362103a97df7adf707fe775" content="Password :- MjSj4gXp" />
                <ImgMediaCard label="Class 9" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/128f8d3ba434103a9fffe2b6b28522b4" content="Password :- 3aRxPyUB" />
                <ImgMediaCard label="Class 10" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/d00b465ca810103aab7772d1d2954635" content="Password :- gFJHKF6M" />
            </Box>
            </Zoom>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                <ImgMediaCard label="Class 11" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/3037b6a9a8e2103a977d2219b20fe8a7" content="Password :- 8zTmARPf" />
                <ImgMediaCard label="Class 12" viewUrl="https://iitpatna.webex.com/recordingservice/sites/iitpatna/recording/playback/de1869baa9b3103aa6de3efe1755574d" content="Password :- HkHGh4Af" />
            </Box>
            </Zoom>

            
        </>
    )
}

export default CSVideos
