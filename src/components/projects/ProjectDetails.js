import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, perspiciatis ratione. Non laboriosam tenetur amet voluptatem aperiam hic! Ad eum ea distinctio hic dicta perferendis reprehenderit blanditiis fugiat, quibusdam expedita.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Post By Jeff Howard</div>
          <div>21st April, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
