import React, {useEffect} from 'react'

const Contact = () => {
  useEffect(() => {
    window.scroll({top: 0})
  }, [])

  return (
    <div>Contact</div>
  )
}

export default Contact