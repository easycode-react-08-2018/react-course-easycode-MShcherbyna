export const DELETE_SERVER = 'DELETE_SERVER';

export const deleteServer = (server) => {
    return {
        type: DELETE_SERVER,
        peyload: {
            server
        }
    }
}