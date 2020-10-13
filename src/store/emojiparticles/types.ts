export const CLICK_SHOW_EMOJI = "CLICK_SHOW_EMOJI"
export const CLEAN_EMOJI_BUILD_UP = "CLEAN_EMOJI_BUILD_UP"

type ClickShowEomji = {
  type : typeof CLICK_SHOW_EMOJI
}

type CleanEmojiBuildUp = {
  type : typeof CLEAN_EMOJI_BUILD_UP
}

export type EmojiParticlesTypes = ClickShowEomji | CleanEmojiBuildUp