export default function ({ store, redirect }) {
  store.dispatch('fetchCookie')
  store.dispatch('fetchAksesLocalStorage')
  if (store.state.auth !== null) {
    if (store.state.auth.user_group_id !== '03') {
      return redirect('/registered/index')
    }
  } else {
    return redirect('/')
  }
}
