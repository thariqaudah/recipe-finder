import axios from 'axios'

const useApi = (keyword, id) => {
	let url

	if (keyword) {
		url = `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=ca238b30&app_key=2f0b56b0e7ec24efa4538c6afc4d1343&random=true`
	} else {
		url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=ca238b30&app_key=2f0b56b0e7ec24efa4538c6afc4d1343`
	}

	const api = axios.create({
		baseURL: url,
		headers: { 'Content-Type': 'application/json' },
	})

	return { api }
}

export default useApi
