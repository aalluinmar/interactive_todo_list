import { API } from '@/api';
import { mapState } from 'vuex';
import CreateInteractive from '@/components/CreateInteractive/CreateInteractive.vue';
export default {
	components: {
		CreateInteractive
	},
	data() {
		return {
			closeInvent: false,
			inventoryTypeDetail: '',
			inventPropData: '',
			search: '',
			filteredName: '',
		};
	},
	async created() {
	},
	computed: {
		...mapState({
			inventoryData: state => state.interactive.interactiveData,
		}),
		inventoryDataSearch() {
			var self = this;
			if (this.search === '') {
				return this.inventoryData
			}
			else {
				return this.inventoryData.filter(function (cust) { return (cust.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0)});
			}
		}
	},
	methods: {
		async deleteInventory(id) {
			await API.Interactive.deleteInteractive(id).then(res => {
				if(res.status === 204) {
                    this.$store.dispatch('interactive/getAllInteractive')
                    this.$Notice.success({
                        title: 'Deleting Interactive Success.',
                        desc: "Successfully deleted Item from Interactive List."
                    });
				}
			}).catch(err => {
                this.$Notice.error({
                    title: 'Delete Interactive Failed',
                    desc: "Deleting Item from Interactive List Failed."
                });
            })
		},
		closeInventories() {
			this.closeInvent = false;
		},
	}
};