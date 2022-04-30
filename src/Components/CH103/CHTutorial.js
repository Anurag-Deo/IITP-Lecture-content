import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const CHTutorial = () => {
    return (
        <>
            {/* <Fade in timeout={3000}> */}
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Tutorial 1" viewUrl="https://drive.google.com/file/d/12uj7njbf3jSHTfNh7IHmCJjH6SvIeRAG/view?usp=sharing" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=12uj7njbf3jSHTfNh7IHmCJjH6SvIeRAG" />
            <ImgMediaCard label="Tutorial 2" viewUrl="https://drive.google.com/file/d/1yCD_akg8yUYQCYyAIvuxRkKs4ocgpWtS/view?usp=sharing" downloadUrl="https://drive.google.com/ucxport=download&id=1yCD_akg8yUYQCYyAIvuxRkKs4ocgpWtS" />
            <ImgMediaCard label="Tutorial 3" viewUrl="https://drive.google.com/file/d/1U8OA1FBckbifhqpqj8UYkOrp_RNHZYoO/view?usp=sharing" downloadUrl="https://drive.google.com/uc?c2/xport=download&id=1U8OA1FBckbifhqpqj8UYkOrp_RNHZYoO" />
            </Box>
            </Zoom>
            
        </>
    )
}

export default CHTutorial
