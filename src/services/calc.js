import axios from 'axios'
const tok ='1551094d-975e-4fec-8c6a-c37946a23717'
const urlBase ='https://www.lefisc.com.br/api/aliquotasICMS'

export default{
    TodasAliquotas(uf){       
        return axios
        .get(`${urlBase}/TodasAliquotas/${uf}/${tok}`)
        .then(res=> res)   
        .catch(err=> err.response)
    },
    TodasNotas(uf){       
        return axios
        .get(`${urlBase}/TodasNotas/${uf}/${tok}`)
        .then(res=> res)   
        .catch(err=> err.response)
    },


}

