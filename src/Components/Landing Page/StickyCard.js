import React from 'react'

const StickyCard = (props) => {
  return (
      <div class="col-md-4 col-sm-6 content-card">
        <a href={props.name}>
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color={props.color} data-radius="none">
                <div class="content">
                    <h6 class="category">Course Name</h6>
                    <h4 class="title"><a href={props.name}>{props.name}</a></h4>
                    <p class="description">Click on this card to get redirected to the {props.name} webpage where you can get all the lecture notes, videos and tutorial sheets</p>
                </div>
            </div> 
        </div>
    </a>
    </div>
  )
}

export default StickyCard