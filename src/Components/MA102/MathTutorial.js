import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const MathTutorial = () => {
    return (
        <>
            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Tutorial 1" viewUrl="https://drive.google.com/file/d/1FHdWJlTbfuzTJp0LfV_7G_E1Nq4aadI1/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1FHdWJlTbfuzTJp0LfV_7G_E1Nq4aadI1" />
                    <ImgMediaCard label="Tutorial 2" viewUrl="https://drive.google.com/file/d/10gh8rh-pWQ0sf_M7JH0n5J831CplE_s-/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=10gh8rh-pWQ0sf_M7JH0n5J831CplE_s-" />
                    <ImgMediaCard label="Tutorial 3" viewUrl="https://drive.google.com/file/d/1UhEWBNDgTEBgu3x8IsR-r3v4tdhrfvrA/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1UhEWBNDgTEBgu3x8IsR-r3v4tdhrfvrA" />
                    <ImgMediaCard label="Tutorial 4" viewUrl="https://drive.google.com/file/d/1uXW-3fEGT-gcJltC9eCRdJ-WtB_aGpzj/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1uXW-3fEGT-gcJltC9eCRdJ-WtB_aGpzj" />
                    <ImgMediaCard label="Tutorial 5" viewUrl="https://drive.google.com/file/d/1wZt0Z5TNUtQ4HzCJYy-yMv6UmIeaXFxu/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1wZt0Z5TNUtQ4HzCJYy-yMv6UmIeaXFxu" />
                </Box>
            </Zoom>


        </>
    )
}

export default MathTutorial
