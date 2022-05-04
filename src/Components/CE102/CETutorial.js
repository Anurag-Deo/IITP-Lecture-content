import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const CETutorial = () => {
    return (
        <>
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Tutorial 1" viewUrl="https://drive.google.com/file/d/1_l2HXhkrUJn0p0kT72wvZGm2JtVH6b5-/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1_l2HXhkrUJn0p0kT72wvZGm2JtVH6b5-" />
            <ImgMediaCard label="Tutorial 2" viewUrl="https://drive.google.com/file/d/1ds8lgJec60q2XFMu2pvuSUsuRoRUnor7/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1ds8lgJec60q2XFMu2pvuSUsuRoRUnor7" />
            </Box>
            </Zoom>

            
        </>
    )
}

export default CETutorial
