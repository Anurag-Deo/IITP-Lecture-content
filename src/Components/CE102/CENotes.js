import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const CENotes = () => {
    return (
        <>
            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Module 1" viewUrl="https://drive.google.com/file/d/1Ws__MFPRnovo_-6UdOu5BKN5CkxHjarZ/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1Ws__MFPRnovo_-6UdOu5BKN5CkxHjarZ" />
                    <ImgMediaCard label="Module 2" viewUrl="https://drive.google.com/file/d/13kJ6QKOGJ1FqdxpmyyXoox3Ttdc7_36Q/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=13kJ6QKOGJ1FqdxpmyyXoox3Ttdc7_36Q" />
                    <ImgMediaCard label="Module 3" viewUrl="https://drive.google.com/file/d/1EdbQXrUQ4im5JVatFsDZyfX0OW45NjzH/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1EdbQXrUQ4im5JVatFsDZyfX0OW45NjzH" />
                    <ImgMediaCard label="Module 4" viewUrl="https://drive.google.com/file/d/1wHhZ4zTcRuaspq_aU233EG70QwVfJeFY/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1wHhZ4zTcRuaspq_aU233EG70QwVfJeFY" />
                    <ImgMediaCard label="Module 5" viewUrl="https://drive.google.com/file/d/1LXS_OdyUHH8s-jwF31DR7ooMB7llUN1t/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1LXS_OdyUHH8s-jwF31DR7ooMB7llUN1t" />
                </Box>
            </Zoom>

            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Module 6" viewUrl="https://drive.google.com/file/d/1nrJ4woKh2NIX4VXpVaCmLW26T44hqD2U/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1nrJ4woKh2NIX4VXpVaCmLW26T44hqD2U" />
                </Box>
            </Zoom>
            <div className="flex-container2">
            <hr class="hr-text1" data-content="Post MSE" width="40%"></hr>
            Post MidSem Examination
            <hr class="hr-text2" data-content="Post MSE" width="40%"></hr>
            </div>

        </>
    )
}

export default CENotes
