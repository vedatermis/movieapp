import React from 'react'

const InlineError = props => {
  return (
    <div className = "errorText">
      { props.message }
    </div>
  )
}

export default InlineError