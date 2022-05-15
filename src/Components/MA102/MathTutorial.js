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
                    <ImgMediaCard label="Tutorial 1 Solution" viewUrl="https://drive.google.com/file/d/1-_BLUS-HLdLKLcwIFGk7S0d23-HGXsQv/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1-_BLUS-HLdLKLcwIFGk7S0d23-HGXsQv" />
                    <ImgMediaCard label="Tutorial 2" viewUrl="https://drive.google.com/file/d/10gh8rh-pWQ0sf_M7JH0n5J831CplE_s-/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=10gh8rh-pWQ0sf_M7JH0n5J831CplE_s-" />
                    <ImgMediaCard label="Tutorial 2 Solution" viewUrl="https://drive.google.com/file/d/18jfrbfDieXrHF5hxC8jyfw4h_-XG3y5K/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=18jfrbfDieXrHF5hxC8jyfw4h_-XG3y5K" />
                    <ImgMediaCard label="Tutorial 3" viewUrl="https://drive.google.com/file/d/1UhEWBNDgTEBgu3x8IsR-r3v4tdhrfvrA/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1UhEWBNDgTEBgu3x8IsR-r3v4tdhrfvrA" />
                </Box>
            </Zoom>

            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Tutorial 3 Solution" viewUrl="https://drive.google.com/file/d/1dO7N67Xg0nopZ4bl83gLDxX6Nal4kkpJ/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1dO7N67Xg0nopZ4bl83gLDxX6Nal4kkpJ" />
                    <ImgMediaCard label="Tutorial 4" viewUrl="https://drive.google.com/file/d/1uXW-3fEGT-gcJltC9eCRdJ-WtB_aGpzj/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1uXW-3fEGT-gcJltC9eCRdJ-WtB_aGpzj" />
                    <ImgMediaCard label="Tutorial 4 Solution" viewUrl="https://drive.google.com/file/d/1KZUB1k_c4-_rK_d-DLhXebasB0lv-RLM/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1KZUB1k_c4-_rK_d-DLhXebasB0lv-RLM" />
                    <ImgMediaCard label="Tutorial 5" viewUrl="https://drive.google.com/file/d/1wZt0Z5TNUtQ4HzCJYy-yMv6UmIeaXFxu/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1wZt0Z5TNUtQ4HzCJYy-yMv6UmIeaXFxu" />
                    <ImgMediaCard label="Tutorial 5 Solution" viewUrl="https://drive.google.com/file/d/1T_TD1CXYphEmw5T-_ToRwCWMZQaXDLzS/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1T_TD1CXYphEmw5T-_ToRwCWMZQaXDLzS" />
                </Box>
            </Zoom>

            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Tutorial 6" viewUrl="https://drive.google.com/file/d/1TE_hKpROYXLbeXToVi-eLCkOaHC3lt1S/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1TE_hKpROYXLbeXToVi-eLCkOaHC3lt1S" />
                </Box>
            </Zoom>


        </>
    )
}

export default MathTutorial
