import axios from 'axios'

export const fetchData = (api) => {
    return axios.get(api)
            .then((response) => {
                return response
            })
}





