import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const MechNotes = () => {
    return (
        <>
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Tutorial 1" viewUrl="https://docs.google.com/document/d/1vEtgYv4znBHZMuPyu3mh-5k7gq0ZnSDf/edit?usp=sharing&ouid=116176361105568954572&rtpof=true&sd=true" downloadUrl="https://drive.google.com/uc?export=download&id=1vEtgYv4znBHZMuPyu3mh-5k7gq0ZnSDf" />
            <ImgMediaCard label="Tutorial 2" viewUrl="https://docs.google.com/document/d/1wM184nyh1LXQsl1W_SngAOHNqOXhb2yW/edit?usp=sharing&ouid=116176361105568954572&rtpof=true&sd=true" downloadUrl="https://drive.google.com/uc?export=download&id=1wM184nyh1LXQsl1W_SngAOHNqOXhb2yW" />
            <ImgMediaCard label="Tutorial 3" viewUrl="https://docs.google.com/document/d/1Z9fTc_8saV-Hvp8lqTwcV2b2y4LIm_Ag/edit?usp=sharing&ouid=116176361105568954572&rtpof=true&sd=true" downloadUrl="https://drive.google.com/uc?export=download&id=1Z9fTc_8saV-Hvp8lqTwcV2b2y4LIm_Ag" />


            </Box>
            </Zoom>

        </>
    )
}

export default MechNotes
