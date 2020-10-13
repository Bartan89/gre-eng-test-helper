import React, { Fragment, useEffect, useState } from "react"
import Cleaner from "../components/Cleaner"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { selectAllEmojiParticles } from "../store/emojiparticles/selector"
import { stageClick } from "../store/emojiparticles/actions"

const TestCon = styled.div`
  margin: 70px;
  position: absolute;

  width: 200px;
  height: 200px;
  top: 10px;
`

const Emoji = styled.div<any>`
  position: absolute;
  bottom: 0px;
  animation: up ${({ second }: any) => second}s ease-in-out forwards;
  left: ${({ random }: any) => random}px;
 

  @keyframes up {
    0% {
      bottom: 0%;
      left: 40%;
      opacity: 1;
      font-size: 0px;
    }

    20% {
      font-size: 2${({ second }: any) => second*2}px;
    }
    60% {
      opacity: 1;
    }
    100% {
      bottom: 100%;
      right: 40%;
      opacity: 0;
    }
  }
`

type EmojiEmitArray = {
  emoji: string
  rand: number
}

function Test() {
  // const [trigger, settrigger] = useState<boolean | null>(null)

  // useEffect(() => {
  //   if (trigger !== null) {
  //     setemojiEmitArray([
  //       ...emojiEmitArray,
  //       {
  //         emoji: "👍",
  //         rand: [Math.floor(Math.random() * 150) + 1]
  //       },
  //       {
  //         emoji: "👍",
  //         rand: [Math.floor(Math.random() * 150) + 1]
  //       }
  //     ])
  //   }
  // }, [trigger])

  // const initial = [
  //   {
  //     emoji: "👍",
  //     rand: [Math.floor(Math.random() * 150) + 1]
  //   },
  //   {
  //     emoji: "👍",
  //     rand: [Math.floor(Math.random() * 150) + 1]
  //   }
  // ]

  // const [emojiEmitArray, setemojiEmitArray] = useState<any>(initial)

  // function handleClick() {
  //   if (trigger === null) {
  //     settrigger(false)
  //   }

  //   const interval = setInterval(() => {
  //     settrigger(!trigger)
  //     console.log("hello setTimeinterval")
  //     console.log(emojiEmitArray)
  //   }, 200)

  //   clearInterval(interval)
  // }



  const allEmojis = useSelector(selectAllEmojiParticles)

  return (
 
      <TestCon>
        {allEmojis.map((emoji: emojiAnimation) => {
          return (
            <>
              <Cleaner>
                <Emoji second={emoji.sec}random={emoji.randomPosition}>{emoji.emoji}</Emoji>
              </Cleaner>
            </>
          )
        })}
      </TestCon>

  )
}

export default Test
