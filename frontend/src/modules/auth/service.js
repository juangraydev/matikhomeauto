import Http from '../../shared/util/Http'



export const loginAPI = async (data) => {
    return new Promise(async (resolve, reject) => {
        // dispatch(fetchLoginTokenData())
        return Http.post(process.env.REACT_APP_API_LOGIN, data)
            .then(response => {
                // logger('[LOGIN] Retrieving token data')
                resolve()
            })
            .catch(error => {
                // logger('[LOGIN] Error token data')
            })
    })
}
export const registerAPI = async (data) => {
    return new Promise(async (resolve, reject) => {
        // dispatch(fetchLoginTokenData())
        return Http.post(process.env.REACT_APP_API_REGISTER, data)
            .then(response => {
                // logger('[REGISTER] Retrieving token data')
                resolve()
            })
            .catch(error => {
                // logger('[REGISTER] Error token data')
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
