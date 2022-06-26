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

            <div className="flex-container2">
            <hr class="hr-text1" data-content="Post MSE" width="40%"></hr>
            Post MidSem Examination
            <hr class="hr-text2" data-content="Post MSE" width="40%"></hr>
            </div>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Tutorial 1" viewUrl="https://drive.google.com/file/d/1cw0pZ3__Y2mSqeXpOCjkowbaDZIuh1Z1/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1cw0pZ3__Y2mSqeXpOCjkowbaDZIuh1Z1" />
            <ImgMediaCard label="Tutorial 2" viewUrl="https://drive.google.com/file/d/1Tcqc75Qn-ZRfhRioWl2Q6S4-LVEwE3ni/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1Tcqc75Qn-ZRfhRioWl2Q6S4-LVEwE3ni" />
            <ImgMediaCard label="Tutorial 2 Solutions" viewUrl="https://drive.google.com/file/d/18TWMplE8Y6sRQwnZ3iCK4Wc0NGQfiJdA/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=18TWMplE8Y6sRQwnZ3iCK4Wc0NGQfiJdA" />
            <ImgMediaCard label="Tutorial 3" viewUrl="https://drive.google.com/file/d/1f57dITxxVX6ygSzyNmuayy8n8JE7pMn8/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1f57dITxxVX6ygSzyNmuayy8n8JE7pMn8" />
            <ImgMediaCard label="Tutorial 3 Solutions" viewUrl="https://drive.google.com/file/d/1GkCLG9OpniUwJm2Mwa4IsitVgpjfn2IK/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1GkCLG9OpniUwJm2Mwa4IsitVgpjfn2IK" />
            </Box>
            </Zoom>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Problem Set 1" viewUrl="https://drive.google.com/file/d/1WEQEKkaKEI9OZJ7ipGt3Yp14E9uipwAM/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1WEQEKkaKEI9OZJ7ipGt3Yp14E9uipwAM" />
            <ImgMediaCard label="Problem Set 2" viewUrl="https://drive.google.com/file/d/1WhcviHtkijQvxfHkQMhKqkKbLD0imVVa/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1WhcviHtkijQvxfHkQMhKqkKbLD0imVVa" />
            <ImgMediaCard label="Problem Set 2 Solution" viewUrl="https://drive.google.com/file/d/1GuRvegsSOho3zJsrXiBUz38aEuozVaS7/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1GuRvegsSOho3zJsrXiBUz38aEuozVaS7" />
            <ImgMediaCard label="Problem Set 3" viewUrl="https://drive.google.com/file/d/1TT3VncHo76vo8EbpKZpxWCVmciqB6xTj/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1TT3VncHo76vo8EbpKZpxWCVmciqB6xTj" />
            <ImgMediaCard label="Problem Set 3 Solution" viewUrl="https://drive.google.com/file/d/1FbxyMVTGEJIHhE_DWTjXNaArF51T_3cU/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1FbxyMVTGEJIHhE_DWTjXNaArF51T_3cU" />
            </Box>
            </Zoom>
        </>
    )
}

export default MechNotes
