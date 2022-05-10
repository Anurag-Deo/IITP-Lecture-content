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
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,69.3C384,75,480,117,576,133.3C672,149,768,139,864,133.3C960,128,1056,128,1152,154.7C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
      <div className="card-body" style={{paddingBottom:'0px'}}>
        <h5 className="card-title">{props.label}</h5>
        <p className="card-text">{props.content}</p>
        <div className="buttons">
        <a rel="noreferrer" target="_blank" href={props.downloadUrl} className={`btn btn-primary mx-3 dbutton ${props.disabledDownload==="1"?'disabled':''}`} ><i className="fa-solid fa-cloud-arrow-down fa-xl"></i></a>
        <a rel="noreferrer" target="_blank" href={props.viewUrl} className={`btn btn-primary mx-3 dbutton ${props.disabledView==="1"?'disabled':''}`}><i className="fa-solid fa-book-open fa-xl"></i></a>
        </div>
      </div>
      <svg id="wave" style={{transform:'rotate(0deg)', transition: '0.3s', borderRadius:'30px'}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(62, 71.914, 243, 1)" offset="0%"></stop><stop stop-color="rgba(236.423, 241.666, 243.929, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:'translate(0, 0px)', opacity:'1'}} fill="url(#sw-gradient-0)" d="M0,294L40,294C80,294,160,294,240,253.2C320,212,400,131,480,122.5C560,114,640,180,720,204.2C800,229,880,212,960,171.5C1040,131,1120,65,1200,98C1280,131,1360,261,1440,334.8C1520,408,1600,425,1680,367.5C1760,310,1840,180,1920,155.2C2000,131,2080,212,2160,220.5C2240,229,2320,163,2400,138.8C2480,114,2560,131,2640,130.7C2720,131,2800,114,2880,163.3C2960,212,3040,327,3120,318.5C3200,310,3280,180,3360,155.2C3440,131,3520,212,3600,277.7C3680,343,3760,392,3840,416.5C3920,441,4000,441,4080,416.5C4160,392,4240,343,4320,277.7C4400,212,4480,131,4560,89.8C4640,49,4720,49,4800,40.8C4880,33,4960,16,5040,57.2C5120,98,5200,196,5280,236.8C5360,278,5440,261,5520,261.3C5600,261,5680,278,5720,285.8L5760,294L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"></path></svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
      {/* <svg style={{borderRadius:'30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,106.7C96,85,192,43,288,64C384,85,480,171,576,197.3C672,224,768,192,864,170.7C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
    </div>
  );
}
