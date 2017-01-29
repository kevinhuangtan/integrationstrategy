
export function setView(view) {
 return { type: 'SET_VIEW', view }
}

export function receiveVisitors(visitors) {
  return { type: 'FETCH_VISITORS_SUCCESS', visitors }
}
