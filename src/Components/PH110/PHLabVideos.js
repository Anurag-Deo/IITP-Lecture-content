import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const PHLabVideos = () => {
    return (
        <>
            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Lab 1" viewUrl="https://drive.google.com/file/d/168GJbQggDjHY2Plk-6ckW36hxLCRdI1f/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=168GJbQggDjHY2Plk-6ckW36hxLCRdI1f" />
                    <ImgMediaCard label="Lab 2" viewUrl="https://drive.google.com/file/d/1v0iWz32tFLIZWCz9K4M0teibTa7bPghR/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1v0iWz32tFLIZWCz9K4M0teibTa7bPghR" />
                    <ImgMediaCard label="Lab 3" viewUrl="https://drive.google.com/file/d/1I94yYCC9tM3LMWsjKFDsRdlJfPWtsp_p/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1I94yYCC9tM3LMWsjKFDsRdlJfPWtsp_p" />
                    <ImgMediaCard label="Lab 4" viewUrl="https://drive.google.com/file/d/1q03gifPEXz2s0NsLh5feZM9p7NXNvLuN/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1q03gifPEXz2s0NsLh5feZM9p7NXNvLuN" />
                    <ImgMediaCard label="Lab 5" viewUrl="https://drive.google.com/file/d/15DNEVK_YJYztplYFWJcEMrFdztOTodCm/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=15DNEVK_YJYztplYFWJcEMrFdztOTodCm" />
                </Box>
            </Zoom>

            <Zoom in timeout={2000}>
                <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
                    <ImgMediaCard label="Lab 6" viewUrl="https://drive.google.com/file/d/1FTSVruuIl_0C_CJS--pzh7ApiKk2VPRS/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1FTSVruuIl_0C_CJS--pzh7ApiKk2VPRS" />
                    <ImgMediaCard label="Lab 7" viewUrl="https://drive.google.com/file/d/1r5Y6BtjDoixuC_MDK0a5zdSs8ymYauQD/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1r5Y6BtjDoixuC_MDK0a5zdSs8ymYauQD" />
                    <ImgMediaCard label="Lab 8" viewUrl="https://drive.google.com/file/d/1uN-nBmPsM9rgPaJMI0Jsx8Scw05XnHyf/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1uN-nBmPsM9rgPaJMI0Jsx8Scw05XnHyf" />
                    <ImgMediaCard label="Lab 9" viewUrl="https://drive.google.com/file/d/1Dy1LasSrELlCvSwwestm11IuY6pxY62Y/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1Dy1LasSrELlCvSwwestm11IuY6pxY62Y" />
                    <ImgMediaCard label="Lab 10" viewUrl="https://drive.google.com/file/d/1HxDlHqREJl5rX6RAI9HMEu2DQQj9qnt0/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?cjp.xport=download&id=1HxDlHqREJl5rX6RAI9HMEu2DQQj9qnt0" />
                </Box>
            </Zoom>

        </>
    )
}

export default PHLabVideos
