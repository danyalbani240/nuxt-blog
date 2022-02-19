export default function (context) {
  context.store.dispatch('startAuth', context.req)
}
