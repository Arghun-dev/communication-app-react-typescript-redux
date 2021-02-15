import { Action } from '../actions/AddProfile'

interface IProfileList {
  profileLists: any[]
}

const initialState: IProfileList = {
  profileLists: []
}

export const ProfileListReducer = (state = initialState, action:Action) => {
  switch(action.type) {
    case "ADD_PROFILE": {
      return {...state, profileLists: [...state.profileLists, action.payload]}
    }
    default: return state
  }
}