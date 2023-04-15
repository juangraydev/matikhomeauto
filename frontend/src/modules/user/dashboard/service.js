import Http from '../../../shared/util/Http'

// get example

export function homeList() {
    return new Promise(async (resolve, reject) => {
        // dispatch(fetchLoginTokenData())
        return Http.get(process.env.REACT_APP_API_HOUSE_LIST)
            .then(response => {
                console.log('[HOME LIST] Retrieving data: ',response.data.body?.data)
                resolve(response.data.body?.data);
            })
            .catch(error => {
                console.log('[HOME LIST] Error: ', error)
                reject()
            })
    })
}

// export const loginAPI = async (data) => {
//     return new Promise(async (resolve, reject) => {
//         // dispatch(fetchLoginTokenData())
//         console.log("data", data);
//         return Http.post(process.env.REACT_APP_API_LOGIN, data)
//             .then(response => {
//                 console.log('[LOGIN] Retrieving token data',response.data.body?.data)
//                 localStorage.setItem("TOKEN", response.data.body?.data?.token)
//                 localStorage.setItem("HOUSE_LIST", JSON.stringify(response.data.body?.data.houseList))
//                 resolve()
//             })
//             .catch(error => {
//                 console.log('[LOGIN] Error token data', error)
//                 reject()
//             })
//     })
// }
// export const registerAPI = async (data) => {
//     return new Promise(async (resolve, reject) => {
//         // dispatch(fetchLoginTokenData())
//         return Http.post(process.env.REACT_APP_API_REGISTER, data)
//             .then(response => {
//                 // logger('[REGISTER] Retrieving token data')
//                 resolve()
//             })
//             .catch(error => {
//                 // logger('[REGISTER] Error token data')
//             })
//     })
// }




