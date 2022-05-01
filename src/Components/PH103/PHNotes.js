import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const PHNotes = () => {
    return (
        <>
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Class 1"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_885766a49bf44d62a0cf954c784e359f.pptx?dn=PH_103_INTRODUCTION_1.pptx" />
            <ImgMediaCard label="Class 2"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_69a3ce58b3d3470687fa4a76572f1d74.pptx?dn=Lecture_2.pptx" />
            <ImgMediaCard label="Class 3"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_3c31504546c84d15a522d5ce1d8cba97.pptx?dn=Lecture_3_final.pptx" />
            <ImgMediaCard label="Class 4"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_dc970f358a5d4040b89792cdadcf6948.pptx?dn=Lecture_4.pptx" />
            <ImgMediaCard label="Class 5"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_d8d346179500477ca8b7fdc9c68ddb46.pptx?dn=lecture_5%20(5).pptx" />
            </Box>
            </Zoom>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Class 6"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_5aa920640c994a37a88109d5b33bc45f.pptx?dn=Lecture_6.pptx" />
            <ImgMediaCard label="Class 6"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_d3cd915a6f58425ea3de95d97cd755d9.pptx?dn=Lecture_6_Divergenece_Curl.pptx" />
            <ImgMediaCard label="Class 7"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_aa75491c331e4b0385a3e5a25986a4c8.pptx?dn=Lecture_7_Divergence_Curl_Spherical_Cylindrical.pptx" />
            <ImgMediaCard label="Class 8"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_be7d6f17ad5249a5bbc2e60b2d649740.pptx?dn=Lecture_8_Work_energy_Theorem_Wednesday.pptx" />
            <ImgMediaCard label="Class 9"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_8d2f93f9ae2548a1931dbea3d1222bcb.pptx?dn=Lecture_9_Work_energy_Theorem_2.pptx" />
            </Box>
            </Zoom>
            
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Class 10"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_ed3de6c75d394c63a9285f7ec7839004.pptx?dn=Lecture_10_Tuesday.pptx" />
            <ImgMediaCard label="Class 11"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_b02da2f63ac94b5ca2624666b5852325.pptx?dn=Lecture_11_Work_energy_Theorem.pptx" />
            <ImgMediaCard label="Class 12"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_31850ccb8e13442697c929180783ffbd.pptx?dn=lecture_12.pptx" />
            <ImgMediaCard label="Class 13"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_77c240fba2a84fa2a391028e4e328c5c.pptx?dn=lecture_13_Rigid_body_dynamics_2.pptx" />
            <ImgMediaCard label="Class 14"  downloadUrl="https://0477420b-ea71-47e8-9b17-d57c35c99d2e.filesusr.com/ugd/f31d29_daa41b42d26148088e13360211c27755.pptx?dn=lecture_14_Rigid_body.pptx" />
            </Box>
            </Zoom>

        </>
    )
}

export default PHNotes
