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


            </Box>
            </Zoom>
            

        </>
    )
}

export default EEVideos
