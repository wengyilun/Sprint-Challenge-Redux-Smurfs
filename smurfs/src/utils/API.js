import axios from 'axios'



export default () => {
	const token = window.localStorage.getItem('token') || Math.random().toString(16).substring(-8)
	return axios.create({
		baseURL:'http://localhost:3333',
		timeout: 80000,
		headers:{
			'Authorization': token
		}
	})
}
