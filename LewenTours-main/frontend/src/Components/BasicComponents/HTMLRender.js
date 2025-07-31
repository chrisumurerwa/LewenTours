import React from 'react'

const HTMLRender = ({ text,Element }) => {
  return (
    <Element dangerouslySetInnerHTML={{__html:text}} />
  )
}

export default HTMLRender