export type Action = { type: "ADD_PROFILE", payload: object }

export interface IProfile {
  name: string;
  url: string;
  pauseStatus: boolean;
}

export const addProfile = (profile:IProfile) => ({
  type: "ADD_PROFILE",
  payload: profile
})