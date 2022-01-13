import APIFetch from '@/helpers/APIFetch';

const endpoint = '/api/interactivelist/';
const image_headers = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}

export class Interactive {
	static getInteractive() {
		return APIFetch.get(`${endpoint}`);
    }
    static readInteractiveId() {
		return APIFetch.get(`${endpoint}${id}/`);
    }
	static createInteractive(data) {
		return APIFetch.post(`${endpoint}`, data);
	}
	static updateInteractive(id, data) {
		return APIFetch.patch(`${endpoint}${id}/`, data);
	}
	static deleteInteractive(id) {
		return APIFetch.delete(`${endpoint}${id}/`);
	}
}