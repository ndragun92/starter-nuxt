import { ActionTree, GetterTree, MutationTree } from 'vuex'

interface LoginInterface {
  token: string
  user: any
}

export const state = () => ({
  token: '' as string,
  user: null as any | null,
})

export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, AuthState> = {}

export const mutations: MutationTree<AuthState> = {
  SET_TOKEN(state: AuthState, token: string) {
    state.token = token
  },
  SET_USER(state: AuthState, user: any) {
    state.user = user
  },
  SET_LOGIN_DATA(
    state: AuthState,
    {
      payload
    }: { payload: LoginInterface }
  ) {
    state.token = payload.token
    state.user = payload.user
    const cookiesConfig: {
      path: string
      maxAge: number
    } = {
      path: '/',
      maxAge: 60 * 60 * 24 * 300
    }
    // @ts-ignore
    this.$cookies.set('token', state.token, cookiesConfig)
  },
  LOGOUT(state: AuthState) {
    state.token = ''
    state.user = null
    // @ts-ignore
    this.$cookies.remove('token')
  },
}

export const actions: ActionTree<AuthState, AuthState> = {
  async logout({ commit }) {
    await commit('LOGOUT')
  },
}
