import database from '../database'

// Mock an API call to a service
// simulates network lag by passing in a timeout arg
export function fakeApiCall (path, timeout = 5000) {
    return new Promise((resolve, reject) => {
        // wait for service response, then resolve
        // promise with some data
        setTimeout(() => {
            switch (path) {
                case '/messages':
                    resolve(database.messages)
                    break
                default:
                    reject('didn\'t recognise that fake API path')
            }
        }, timeout)
    })
}
