import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const MathVideos = () => {
    return (
        <>
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Class 1" viewUrl="https://drive.google.com/file/d/1N573vCaYtbP25oMh9pITFz8-BRG_lvth/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1N573vCaYtbP25oMh9pITFz8-BRG_lvth" />
            <ImgMediaCard label="Class 2" viewUrl="https://drive.google.com/file/d/1XgVb2xvZJ5skvlAqMgS_r6yELpQiMtrw/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1XgVb2xvZJ5skvlAqMgS_r6yELpQiMtrw" />
            <ImgMediaCard label="Class 3" viewUrl="https://drive.google.com/file/d/1zziE8_SAmwskEu7aVBnrgsYgYvZvG0Iy/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1zziE8_SAmwskEu7aVBnrgsYgYvZvG0Iy" />
            <ImgMediaCard label="Class 4" viewUrl="https://drive.google.com/file/d/1EMGV-r80ML3rQw1JSBqnj6M5kKhET6Rk/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1EMGV-r80ML3rQw1JSBqnj6M5kKhET6Rk" />
            <ImgMediaCard label="Class 5" viewUrl="https://drive.google.com/file/d/1WTks0JDbfNoAmjkrtwPubb5Peah6TBue/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1WTks0JDbfNoAmjkrtwPubb5Peah6TBue" />
            </Box>
            </Zoom>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Class 6" viewUrl="https://drive.google.com/file/d/1g_mUlViDnUw2A_PaoI-RgSHT5OUGhj5Q/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1g_mUlViDnUw2A_PaoI-RgSHT5OUGhj5Q" />
            <ImgMediaCard label="Class 7" viewUrl="https://drive.google.com/file/d/1cWTfqrhDqzk2OAm17i6EQs2gNVu5rACX/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1cWTfqrhDqzk2OAm17i6EQs2gNVu5rACX" />
            <ImgMediaCard label="Class 8" viewUrl="https://drive.google.com/file/d/1oQIKYv4Nki_aPgtfQ31cRdePmzk4Fd8L/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1oQIKYv4Nki_aPgtfQ31cRdePmzk4Fd8L" />
            <ImgMediaCard label="Class 9" viewUrl="https://drive.google.com/file/d/1taeMK4OWUJqD43s2wojvFudluErVuMB-/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1taeMK4OWUJqD43s2wojvFudluErVuMB-" />
            <ImgMediaCard label="Class 10" viewUrl="https://drive.google.com/file/d/1CEXFoOZ5-UVYmD7GFHMrv9sHkpvAUn5H/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1CEXFoOZ5-UVYmD7GFHMrv9sHkpvAUn5H" />
            </Box>
            </Zoom>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Class 11" viewUrl="https://drive.google.com/file/d/1iQDuvaTYuMIHpu6IBX6F12swy5GhB-oa/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=1iQDuvaTYuMIHpu6IBX6F12swy5GhB-oa" />
            <ImgMediaCard label="Class 12" viewUrl="https://drive.google.com/file/d/16KW0aGBSmMYLWZT5uNw3VUAh-hTsWJ-Y/view?usp=sharing" downloadUrl="https://drive.google.com/uc?export=download&id=16KW0aGBSmMYLWZT5uNw3VUAh-hTsWJ-Y" />
            </Box>
            </Zoom>

        </>
    )
}

export default MathVideos
