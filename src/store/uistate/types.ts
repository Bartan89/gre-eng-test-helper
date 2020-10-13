import { USER_WANTS_MEANING } from "../curchallenge/types"

export const USER_WANTS_DICTIONARY = "USER_WANTS_DICTIONAIRY"
export const EMOJIS_START_FLIGHT = "EMOJIS_START_FLIGHT"
export const EMOJIS_LANDED = "EMOJIS_LANDED"


type UserWantsDictionary = {
  type: typeof USER_WANTS_DICTIONARY
}

type EmojisStartFlight = {
  type: typeof EMOJIS_START_FLIGHT
}

type EmojisLanded = {
  type: typeof EMOJIS_LANDED
}

export type UiState = UserWantsDictionary | EmojisStartFlight | EmojisLanded
