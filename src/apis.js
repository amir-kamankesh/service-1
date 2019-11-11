import axios from 'axios'

export default {

    fetchSingleMovie () {
        return axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => console.log(response));
    }
}