export const ADD_SERVER = 'ADD_SERVER';

export const addServer = (server) => {
    return {
        type: ADD_SERVER,
        peyload: {
            server
        }
    }
}