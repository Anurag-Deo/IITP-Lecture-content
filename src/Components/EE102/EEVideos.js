import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const EEVideos = () => {
    return (
        <>
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Lab 1" viewUrl="https://drive.google.com/file/d/13aV_2obXktBexguoUdwMQ-C4mzbEG1uF/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=13aV_2obXktBexguoUdwMQ-C4mzbEG1uF" />
            <ImgMediaCard label="Lab 2" viewUrl="https://drive.google.com/file/d/1oKYCaRcoj6I4ZeB6RTBaCMibZdIbFRQL/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1oKYCaRcoj6I4ZeB6RTBaCMibZdIbFRQL"/>
            <ImgMediaCard label="Lab 3" viewUrl="https://drive.google.com/file/d/1Z6oCvFRXqoMasQdToNltYdpJZVbrDPLl/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1Z6oCvFRXqoMasQdToNltYdpJZVbrDPLl" />
            <ImgMediaCard label="Lab 4" viewUrl="https://drive.google.com/file/d/14UKuu5vZzkvz4GJZzm_gAlt_GWOfdka1/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=14UKuu5vZzkvz4GJZzm_gAlt_GWOfdka1" />
            <ImgMediaCard label="Lab 5" viewUrl="https://drive.google.com/file/d/1-_RLfgmw5RvdB9CXbeSVRv_t-9SovrTe/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1-_RLfgmw5RvdB9CXbeSVRv_t-9SovrTe" />
            </Box>
            </Zoom>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Lab 6" viewUrl="https://drive.google.com/file/d/1yFrYMMRFgzxg04cLTAYtMXeAPHkD3lb2/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1yFrYMMRFgzxg04cLTAYtMXeAPHkD3lb2" />
            <ImgMediaCard label="Lab 7" viewUrl="https://drive.google.com/file/d/1wmwzPxuur0y8tIW0S8nvt1FkN3rbP37K/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1wmwzPxuur0y8tIW0S8nvt1FkN3rbP37K"/>
            </Box>
            </Zoom>
            

        </>
    )
}

export default EEVideos
