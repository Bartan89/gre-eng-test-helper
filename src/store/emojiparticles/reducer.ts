import { CLEAN_EMOJI_BUILD_UP, CLICK_SHOW_EMOJI, EmojiParticlesTypes } from "./types"

const initialState: emojiAnimation[] = []

export default (state = initialState, action: EmojiParticlesTypes) => {
  switch (action.type) {

    case CLICK_SHOW_EMOJI:
      const randarr = Array.from({length: 2 + Math.floor(Math.random() * 5) + 1}, () => Math.floor(Math.random() * 40));
      return [...state, ...randarr.map((e) => {
        return {
          emoji: "👍",
          randomPosition: Math.floor(Math.random() * 30) + 1  ,
          sec: 2 + (Math.random()*2),
          createdAt: Math.round(new Date().getTime()/1000)
        }
      })]
    
    case CLEAN_EMOJI_BUILD_UP:
      return [...initialState]
     
    default:
      return state
  }
}
