import { API } from '@/api';

const state = {	
	interactiveData: {},
};
const mutations = {
	getAllInteractive(state, data) {
		state.interactiveData = data.results;
	}
};
const actions = {
	async getAllInteractive(context) {
		let { data } = await API.Interactive.getInteractive();
		context.commit('getAllInteractive', data);	
	},
};


export default {
	namespaced: true,
	state,
	mutations,
	actions
}
