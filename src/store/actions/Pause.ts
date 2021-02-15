export type Action = { type: "PAUSE" }

export const pause = ():Action => ({
  type: "PAUSE"
}) 