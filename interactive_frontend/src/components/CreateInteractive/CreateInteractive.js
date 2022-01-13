import { API } from '@/api';
const MAX_WIDTH = 800;
const MAX_HEIGHT = 800;

export default {
    name: 'CreateInventory',
    props: ['createBoolean', 'inventoryType', 'inventoryData'],
    data() {
		return {
            name: '',
            price: '',
			quantity: '',
            errorpayload: {
                name: '',
                price: '',
                quantity: '',
            }
		};
	},
	async created() {
        console.log(this.createBoolean)
        if(this.inventoryType === 'update') {
            this.name = this.inventoryData.name
            this.price = this.inventoryData.price
            this.quantity = this.inventoryData.quantity
        } else if(this.inventoryType === 'view') {
            this.name = this.inventoryData.name
            this.price = this.inventoryData.price
            this.quantity = this.inventoryData.quantity
        }
	},
	computed: {
	},
	methods: {
        cleanErrorPayload() {
            this.errorpayload.name = ''
            this.errorpayload.price = ''
            this.errorpayload.quantity = ''
        },
        formValidation() {
            let msg = "This field may not be blank"
            let error = true
            if(!this.name) {
                this.errorpayload.name = msg
                error = false
            } else {
                let name_reg = /[a-zA-Z]/;
                if(this.name.search(name_reg) == -1) {
                    this.errorpayload.name = "Name must contain atleast one letter"
					error = false
                }
                if(this.name.length < 3) {
					this.errorpayload.name = "Ensure this field has at least 3 characters."
					error = false
				}
            }
            if(!this.price) {
                this.errorpayload.price = msg
                error = false
            } else {
                if(this.price < 0.01) {
                    this.errorpayload.price = "Ensure this value is greater than or equal to 0.01."
                    error = false
                }
                if(this.price > 999999.99) {
                    this.errorpayload.price = "Ensure that there are no more than 8 digits in total."
                    error = false
                }
            }
            if(!this.quantity) {
                this.errorpayload.quantity = msg
                error = false
            } else {
                if(this.quantity < 1) {
					this.errorpayload.quantity = "Quantity must be greater than or equal to 1."
					error = false
				}
            }
            return error
        },
        async updateInteractive(payload) {
            let formData = new FormData()
            formData.append('name', payload.name)
            formData.append('price', payload.price)
            formData.append('quantity', payload.quantity)
            await API.Interactive.updateInteractive(payload.id, formData).then(res => {
				if(res.status === 200) {
                    this.$store.dispatch('interactive/getAllInteractive')
                    this.$Notice.success({
                        title: 'Updated Interactive Success.',
                        desc: "Successfully updated Item in Interactive List."
                    });
                    this.close();
				}
			}).catch(err => {
                this.$Notice.error({
                    title: 'Updating Interactive Failed',
                    desc: "Updating Item to Interactive List Failed."
                });
            })
        },
        updateInvent() {
            this.cleanErrorPayload()
            if(this.formValidation()) {
                let payload = {
                    id: this.inventoryData.id,
                    name: this.name,
                    price: this.price,
                    quantity: this.quantity
                }
                this.updateInteractive(payload)
            }
        },
        async createInteractive(payload) {
            let formData = new FormData()
            formData.append('name', payload.name)
            formData.append('price', payload.price)
            formData.append('quantity', payload.quantity)
            await API.Interactive.createInteractive(formData).then(res => {
				if(res.status === 201) {
                    this.$store.dispatch('interactive/getAllInteractive')
                    this.$Notice.success({
                        title: 'Created Interactive Success.',
                        desc: "Successfully added Item to Interactive List."
                    });
                    this.close();
				}
			}).catch(err => {
                var msg = "Adding Item to Interactive List Failed."
                if ("name" in err.response.data) {
                    msg = err.response.data.name[0]
                }
                this.$Notice.error({
                    title: 'Creating Interactive Failed',
                    desc: msg
                });
            })
        },
		createInvent() {
            this.cleanErrorPayload()
            if(this.formValidation()) {
                let payload = {
                    name: this.name,
                    price: this.price,
                    quantity: this.quantity
                }
                this.createInteractive(payload)
            }
        },
        close() {
            this.$emit('closeInventories');
        },
	}
}