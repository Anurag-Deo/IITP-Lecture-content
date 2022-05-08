import * as React from 'react';


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
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     alt="card-picture"
    //     height="140"
    //     image="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090__340.jpg"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {props.label}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <a target="_blank" href={props.downloadUrl}><Button size="small"><CloudDownloadIcon /></Button></a>
    //     <a target="_blank" href={props.viewUrl}><Button size="small"><AutoStoriesIcon /></Button></a>
    //     {/* <input type="checkbox" className='checkbox' onClick={handleClick} id={props.viewUrl} /> */}
    //     {/* <Button size="small">Learn More</Button> */}
    //   </CardActions>
    // </Card>
    <div className="card subject-card mx-3 h-100" >
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090__340.jpg" alt="Notes" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.label}</h5>
        <p className="card-text">{props.content}</p>
        <div className="buttons">
        <a rel="noreferrer" target="_blank" href={props.downloadUrl} className="btn btn-primary mx-3 dbutton"><i className="fa-solid fa-cloud-arrow-down fa-xl"></i></a>
        <a rel="noreferrer" target="_blank" href={props.viewUrl} className="btn btn-primary mx-3 dbutton"><i className="fa-solid fa-book-open fa-xl"></i></a>
        </div>
      </div>
    </div>
  );
}
