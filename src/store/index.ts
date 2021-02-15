import { create } from 'domain'
import { createStore } from 'redux'
import { ProfileListReducer } from './reducers/ProfileList'

export const store = createStore(ProfileListReducer)