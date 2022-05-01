import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function ImgMediaCard(props) {
  // React.useEffect(() => {
  // window.addEventListener('load', save);
  // window.onload=save
  // let boxes = document.getElementsByClassName('checkbox').length;
  // function handleClick(e) {
  //   localStorage.setItem("checkbox " + e.target.id, e.target.checked);
  // }
  // function save() {
    //   for (let i = 1; i <= boxes; i++) {
    //     var checkbox = document.getElementById(props.viewUrl);
    //     localStorage.setItem("checkbox " + props.viewUrl, checkbox.checked);
    //   }
    // }

    //for loading
  //   for (let i = 1; i <= boxes; i++) {
  //     if (localStorage.length > 0) {
  //       var checked = JSON.parse(localStorage.getItem("checkbox " + props.viewUrl));
  //       document.getElementById(props.viewUrl).checked = checked;
  //     }
  //   }
  // }
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="card-picture"
          height="140"
          image="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090__340.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <a target="_blank" href={props.downloadUrl}><Button size="small"><CloudDownloadIcon /></Button></a>
          <a target="_blank" href={props.viewUrl}><Button size="small"><AutoStoriesIcon /></Button></a>
          {/* <input type="checkbox" className='checkbox' onClick={handleClick} id={props.viewUrl} /> */}
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    );
  }
