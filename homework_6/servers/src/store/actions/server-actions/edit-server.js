export const EDIT_SERVER = 'EDIT_SERVER';

export const editServer = (server) => {
    return {
        type: EDIT_SERVER,
        peyload: {
            server
        }
    }
}