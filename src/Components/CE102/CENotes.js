import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const CENotes = () => {
    return (
        <>
            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Class 1" viewUrl="https://drive.google.com/file/d/1Ws__MFPRnovo_-6UdOu5BKN5CkxHjarZ/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1Ws__MFPRnovo_-6UdOu5BKN5CkxHjarZ" />
                    <ImgMediaCard label="Class 2" viewUrl="https://drive.google.com/file/d/13kJ6QKOGJ1FqdxpmyyXoox3Ttdc7_36Q/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=13kJ6QKOGJ1FqdxpmyyXoox3Ttdc7_36Q" />
                    <ImgMediaCard label="Class 3" viewUrl="https://drive.google.com/file/d/1EdbQXrUQ4im5JVatFsDZyfX0OW45NjzH/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1EdbQXrUQ4im5JVatFsDZyfX0OW45NjzH" />
                    <ImgMediaCard label="Class 4" viewUrl="https://drive.google.com/file/d/1wHhZ4zTcRuaspq_aU233EG70QwVfJeFY/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1wHhZ4zTcRuaspq_aU233EG70QwVfJeFY" />
                </Box>
            </Zoom>


        </>
    )
}

export default CENotes
