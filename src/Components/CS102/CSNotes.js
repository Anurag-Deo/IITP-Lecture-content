import React from 'react'
import ImgMediaCard from '../Card'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const CSNotes = () => {
    return (
        <>
            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Introduction" viewUrl="https://drive.google.com/file/d/1rVs0hSp-LfV5Jy3l1vFVJF_opAJ1ECh5/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1rVs0hSp-LfV5Jy3l1vFVJF_opAJ1ECh5" />
            <ImgMediaCard label="Hello World" viewUrl="https://drive.google.com/file/d/18WZk52U0nU_QtYz37fmlgkhTbwt-Hg2G/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=18WZk52U0nU_QtYz37fmlgkhTbwt-Hg2G" />
            <ImgMediaCard label="Operators" viewUrl="https://drive.google.com/file/d/1X5qmJtMAFzh8R9fkIsg-_n5EP9Tru6gm/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1X5qmJtMAFzh8R9fkIsg-_n5EP9Tru6gm" />
            <ImgMediaCard label="Data-Type" viewUrl="https://drive.google.com/file/d/1YlIpAMpoZfY2GHHI7YXqoFtsdUy9RTZs/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1YlIpAMpoZfY2GHHI7YXqoFtsdUy9RTZs" />
            <ImgMediaCard label="Loops" viewUrl="https://drive.google.com/file/d/1YTSbibJhGqvtRARpfLXgGx27irHh6Xl4/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1YTSbibJhGqvtRARpfLXgGx27irHh6Xl4" />
            </Box>
            </Zoom>

            <Zoom in timeout={2000}>
            <Box className="flex-container" display="flex" flexDirection="row" alignItems="stretch" padding={1} style={{ justifyContent: 'space-around' }}>
            <ImgMediaCard label="Arrays" viewUrl="https://drive.google.com/file/d/1eB9Tp4mcWFE_DwCzGQxBVeAcFwbgjd_n/view?usp=drivesdk" downloadUrl="https://drive.google.com/uc?export=download&id=1eB9Tp4mcWFE_DwCzGQxBVeAcFwbgjd_n" />
            </Box>
            </Zoom>

            
        </>
    )
}

export default CSNotes
