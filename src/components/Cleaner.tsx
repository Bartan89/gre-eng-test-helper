import React, { useState, useEffect, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cleanEmojiBuildUp } from "../store/emojiparticles/actions"
import { slctEmojisFlying } from "../store/uistate/selectors"

function Cleaner({ children }: any) {
  const [clean, setClean] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setClean(true)
    }, 3300)
  }, [])



  const emojisFlying = useSelector(slctEmojisFlying)


  const dispatch = useDispatch()

  if (clean === true) {
    setClean(false)

    if (emojisFlying === false) {
      dispatch(cleanEmojiBuildUp)
    }
    
    return null
  }

  if (clean === false) {
    return <Fragment>{children}</Fragment>
  }

  return <h1>herllo</h1>
}

export default Cleaner
