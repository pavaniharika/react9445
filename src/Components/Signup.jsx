import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
      signup
      <Link to={"/Login"}><button type='button' class="btn btn-outline-primary  w-10">Signup</button></Link>
    </div>
  )
}

export default Signup
