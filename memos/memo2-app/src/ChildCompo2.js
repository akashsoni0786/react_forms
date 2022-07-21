import React from 'react'

const ChildCompo2 = (props) => {
    console.log("Child Compo 2")
  return (
    <div><h1>this is child 2 component</h1>
    <p> <p>{props.c}</p></p></div>
  )
}

export default React.memo(ChildCompo2)