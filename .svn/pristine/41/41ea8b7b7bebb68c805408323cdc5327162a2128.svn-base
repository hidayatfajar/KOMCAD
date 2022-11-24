export default function ({ store, redirect }) {
  store.dispatch('fetchCookie')
  store.dispatch('fetchAksesLocalStorage')
  if (store.state.auth === null) {
    return redirect('/login')
  }
}
