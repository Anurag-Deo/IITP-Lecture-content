import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const PHVideos = () => {
    return (
        <>
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard content="Download the video mannualy" label="Class 1" viewUrl="https://video.wixstatic.com/video/f31d29_863de7e6c538459c8937449036527e8a/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 2" viewUrl="https://video.wixstatic.com/video/f31d29_7ea773cd42ae400784babacc60471522/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 3" viewUrl="https://video.wixstatic.com/video/f31d29_cf5147d52b55468b827f4affe2b9dd30/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 4" viewUrl="https://video.wixstatic.com/video/f31d29_d01b9a34a9b74e8c9b7662ebedfdf162/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 5" viewUrl="https://video.wixstatic.com/video/f31d29_d80310e07a3f428d80cab7f67c68dece/1080p/mp4/file.mp4" />
            </Box>
            </Zoom>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard content="Download the video mannualy" label="Class 6" viewUrl="https://video.wixstatic.com/video/f31d29_191c9fdd1f6e4326a3fb83acd0e57cdd/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 6" viewUrl="https://video.wixstatic.com/video/f31d29_d4db93be43704924903af69c36a500c0/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 7" viewUrl="https://video.wixstatic.com/video/f31d29_355db804276a400e99f77228069cac7f/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 8" viewUrl="https://video.wixstatic.com/video/f31d29_1b8d7333536943c3a385f5d1ff4798d2/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 9" viewUrl="https://video.wixstatic.com/video/f31d29_dd796ac694a9457c9faac0e97f7aa96e/1080p/mp4/file.mp4" />
            </Box>
            </Zoom>
            
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard content="Download the video mannualy" label="Class 10" viewUrl="https://video.wixstatic.com/video/f31d29_60de8553f71b4c3ca3cbd548a2b5e3f1/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 11" viewUrl="https://video.wixstatic.com/video/f31d29_c3f4f03f8ff24ad899776da11e8652cc/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 12" viewUrl="https://video.wixstatic.com/video/f31d29_8041af921cc241dcbf41d9fceb396583/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 13" viewUrl="https://video.wixstatic.com/video/f31d29_e32915d14031434198a1d68a433b6da2/1080p/mp4/file.mp4" />
            <ImgMediaCard content="Download the video mannualy" label="Class 14" viewUrl="https://video.wixstatic.com/video/f31d29_8b735c8bd11e4875a3323efc7d723ed3/1080p/mp4/file.mp4" />
            </Box>
            </Zoom>

        </>
    )
}

export default PHVideos
