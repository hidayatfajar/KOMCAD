export default function ({ store, redirect }) {
  store.dispatch('fetchCookie')
  store.dispatch('fetchAksesLocalStorage')
  if (store.state.auth !== null) {
    if (store.state.auth.user_group_id !== '02') {
      return redirect('/admin')
    }
  } else {
    return redirect('/login')
  }
}
