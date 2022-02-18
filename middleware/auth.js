export default function (context) {
  if (!!context.getters.token) {
    context.redirect('/admin/auth')
  }
}
