export default function () {
    let baseUrl = 'https://wigunago.cendikiawandigital.com/'
    // baseUrl = 'http://localhost/project/apitest/ranker/'
    
    return {
        "usersUrl": baseUrl + "getUsers",
        "singleUserUrl": "getSingle" 
    }
}