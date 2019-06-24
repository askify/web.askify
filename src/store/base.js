import router from '@/router'
import { setDocTitle } from '@/utils'
import { state } from '@/store/build/base'

export default {
  state,

  mutations: {
    setTitle(state, title) {
      state.title = typeof title === 'string' ? title : null
      setDocTitle(router.currentRoute)
    },
    loadApp(state, load) {
      state.load = typeof load === 'boolean' ? load : true
    }
  }
}
