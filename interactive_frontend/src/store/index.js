import Vue from 'vue'
import Vuex from 'vuex'

import interactive from './modules/interactive'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		interactive
	},
})
