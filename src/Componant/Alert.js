import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    {props.alert &&    <div className="alert alert-warning alert-dismissible fade show" role="alert">
<strong>{props.alert.type}</strong>:{props.alert.msg}
</div>}
    </div>
//     props.alert && ___ --> firstly alert props are exhecute if it is coreect then next statement exhecutes otherwise stop here
  )
}

export default Alert