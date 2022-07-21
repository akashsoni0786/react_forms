import React, { useContext } from 'react'
import { MyContext } from './App'


const Compo4 = () => {
    const uname = useContext(MyContext)
  return (
    <div>{uname}
    </div>
  )
}

export default React.memo(Compo4)