import Vue from 'vue'
import * as firebase from 'firebase'
import dateformat from '../../utils/dateformat'

export function dateFormat(
  eventStartedAt: firebase.firestore.Timestamp | String,
  format: string = 'yyyy/mm/dd(ddd)'
): string {
  const formatedTime = dateformat(eventStartedAt, format)
  return formatedTime
}

const filters = { dateFormat }

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
