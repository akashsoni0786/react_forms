import React from 'react'

const ChildCompo = (props) => {
    console.log("Child 1 Render")
    return (
      <div>
        <h1>This is child 1 component </h1>
       
        
      </div>
    )
}

export default React.memo(ChildCompo)