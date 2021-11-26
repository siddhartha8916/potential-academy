import React from 'react'

const styles = {
  fontSize:"30px", 
  fontWeight:"500",
  textAlign:"center", 
}

const PageHeading = (props) => {
  return (
    <h2 style={styles}>{props.title}</h2>
  )
}

export default PageHeading
