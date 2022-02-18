export default function (context) {
  if (!context.store.getters.token) {
    context.redirect('/admin/auth')
  }
}
