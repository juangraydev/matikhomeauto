import Http from '../../shared/util/Http'



export const loginAPI = async (data) => {
    return new Promise(async (resolve, reject) => {
        // dispatch(fetchLoginTokenData())
        console.log("data", data);
        return Http.post(process.env.REACT_APP_API_LOGIN, data)
            .then(response => {
                console.log('[LOGIN] Retrieving token data',response.data.body?.data)
                localStorage.setItem("TOKEN", response.data.body?.data?.token)
                resolve()
            })
            .catch(error => {
                console.log('[LOGIN] Error token data', error)
                reject()
            })
    })
}
export const registerAPI = async (data) => {
    return new Promise(async (resolve, reject) => {
        // dispatch(fetchLoginTokenData())
        return Http.post(process.env.REACT_APP_API_REGISTER, data)
            .then(response => {
                localStorage.setItem("TOKEN", response.data.body?.data?.token)
                resolve()
            })
            .catch(error => {
                // logger('[REGISTER] Error token data')
                console.log('[REGISTER] Error token data', error)
                reject()
            })
    })
}



//get example
// export function getDivSummary(divCode, reportID) {
// 	return function (dispatch) {
// 		return Http.get(
// 			process.env.REACT_APP_API_DIVISION_SUMMARY + divCode + '/' + reportID,
// 		)
// 	}
// }
