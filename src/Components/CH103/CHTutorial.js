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
            <ImgMediaCard label="Tutorial 1" viewUrl="https://drive.google.com/file/d/12uj7njbf3jSHTfNh7IHmCJjH6SvIeRAG/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=12uj7njbf3jSHTfNh7IHmCJjH6SvIeRAG" />
            <ImgMediaCard label="Tutorial 2" viewUrl="https://drive.google.com/file/d/1yCD_akg8yUYQCYyAIvuxRkKs4ocgpWtS/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1yCD_akg8yUYQCYyAIvuxRkKs4ocgpWtS" />
            <ImgMediaCard label="Tutorial 3" viewUrl="https://drive.google.com/file/d/1U8OA1FBckbifhqpqj8UYkOrp_RNHZYoO/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1U8OA1FBckbifhqpqj8UYkOrp_RNHZYoO" />
            </Box>
            </Zoom>

            <div className="flex-container2">
            <hr class="hr-text1" data-content="Post MSE" width="40%"></hr>
            Post MidSem Examination
            <hr class="hr-text2" data-content="Post MSE" width="40%"></hr>
            </div>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Tutorial 1" viewUrl="https://drive.google.com/file/d/1VkXBUkJVb7vaVgy66gwqcCoMVKAp4I_E/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1VkXBUkJVb7vaVgy66gwqcCoMVKAp4I_E" />
            <ImgMediaCard label="Tutorial 2" viewUrl="https://drive.google.com/file/d/106d54EJFj_-bQZtAy3hVNte_cjlcsRuj/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=106d54EJFj_-bQZtAy3hVNte_cjlcsRuj" />
            </Box>
            </Zoom>
        </>
    )
}

export default CHTutorial
