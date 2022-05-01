import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const PHLabMannual = () => {
    return (
        <>
            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Introduction" viewUrl="https://drive.google.com/file/d/1Jw865U95Tk-dsuwLwyTiL7sPgs1OsUNd/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1Jw865U95Tk-dsuwLwyTiL7sPgs1OsUNd" />
                    <ImgMediaCard label="Lab 1" viewUrl="https://drive.google.com/file/d/1oFxh34Xfd4x2EroQhkI3ffo6ueUiZBs1/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1oFxh34Xfd4x2EroQhkI3ffo6ueUiZBs1" />
                    <ImgMediaCard label="Lab 2" viewUrl="https://drive.google.com/file/d/1htP-bBkq8KcVHRw1pEx2zJdSmT3h7DUr/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1htP-bBkq8KcVHRw1pEx2zJdSmT3h7DUr" />
                    <ImgMediaCard label="Lab 3" viewUrl="https://drive.google.com/file/d/1boB_YgEWv2uqS1nkShn8KH0-n3hfsvex/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1boB_YgEWv2uqS1nkShn8KH0-n3hfsvex" />
                    <ImgMediaCard label="Lab 4" viewUrl="https://drive.google.com/file/d/1rG7Y0qDzKHNNRg7I35_i02N1ZZHecuGp/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1rG7Y0qDzKHNNRg7I35_i02N1ZZHecuGp" />
                </Box>
            </Zoom>

            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Lab 5" viewUrl="https://drive.google.com/file/d/13-8Lui3iCWOgRnG0dON8NL-SYQM8lT3n/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=13-8Lui3iCWOgRnG0dON8NL-SYQM8lT3n" />
                    <ImgMediaCard label="Lab 6" viewUrl="https://drive.google.com/file/d/1agT1Q0yZlUm7djLYT245S2ywXHr5derB/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1agT1Q0yZlUm7djLYT245S2ywXHr5derB" />
                    <ImgMediaCard label="Lab 7" viewUrl="https://drive.google.com/file/d/1rp1PKVdSIhlshMrq4XN5xFMdQEck9jIQ/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1rp1PKVdSIhlshMrq4XN5xFMdQEck9jIQ" />
                    <ImgMediaCard label="Lab 8" viewUrl="https://drive.google.com/file/d/1GHsdLXn5vHgeImRy12JNL1H6c4HEbM1m/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1GHsdLXn5vHgeImRy12JNL1H6c4HEbM1m" />
                    <ImgMediaCard label="Lab 9" viewUrl="https://drive.google.com/file/d/17TzhOf6oXl_dZTuqAgx7Z8lpkcG1hk8z/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=17TzhOf6oXl_dZTuqAgx7Z8lpkcG1hk8z" />
                </Box>
            </Zoom>

            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Lab 10" viewUrl="https://drive.google.com/file/d/1gFJBUDxPIeyLd13CmCyUT9EfchEvlJVe/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1gFJBUDxPIeyLd13CmCyUT9EfchEvlJVe" />
                </Box>
            </Zoom>

        </>
    )
}

export default PHLabMannual
