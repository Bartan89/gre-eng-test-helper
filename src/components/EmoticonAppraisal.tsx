import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AnyAction } from "redux"
import { selectChallengesLeft } from "../store/curchallenge/selectors"
import EmjoiEmiter from "../styledComponents/EmjoiEmiter"

type Emoji = {
  emoji: string
  random: number
}
export default function EmoticonAppraisal() {
  const initialValue = [
    { emoji: "👍", random: 0 },
    { emoji: "🎉", random: 0 },
    { emoji: "😃", random: 0 },
    { emoji: "👍", random: 0 }
  ]

  const [arrayOfLikes, setarrayOfLikes] = useState<Emoji[]>(
    initialValue
  )

  const wordsLeft = useSelector(selectChallengesLeft)

  useEffect(() => {
    const rand = Math.floor(Math.random() * 400) + 150
    const emoji = ["👍", "🎉", "😃"]
    const randEmoji = Math.floor(Math.random() * 3) + 0

    setarrayOfLikes([
      ...arrayOfLikes,
      { emoji: "👍", random: 0 },
      { emoji: "🎉", random: 0 },
      { emoji: "😃", random: 0 },
      { emoji: "👍", random: 0 }
    ])
  }, [wordsLeft])

  return (
    <div style={{ position: "relative" }}>
      {arrayOfLikes.map((likes) => {
        {
          console.log("hello rand", likes.random)
        }
        return (
          <EmjoiEmiter
            deviation={likes.random}
            percentage={100 - (wordsLeft / 729) * 100}
          >
            {likes.emoji}
          </EmjoiEmiter>
        )
      })}
    </div>
  )
}
