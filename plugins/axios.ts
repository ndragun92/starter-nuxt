import { Context } from '@nuxt/types'

export default (ctx: Context) => {
  ctx.$axios.onRequest((config) => {
    if (ctx.store.state.auth.token) {
      config.headers.common.Authorization = `Bearer ${ctx.store.state.auth.token}`
    }
  })
}
