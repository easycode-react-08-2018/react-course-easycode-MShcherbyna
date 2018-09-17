import { ADD_SERVER } from '../../actions/server-actions/add-server';

const initialState = [

];

export const serversHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SERVER':
            let newServer = {
                new: action.peyload.server.name
            }

            return [...state, newServer];
        break;
        
        case 'DELETE_SERVER':
            let deleteServer = {
                deletedServer: action.peyload.server.name
            }

            return [...state, deleteServer];
        break;

        case 'EDIT_SERVER':
            let renameServer = {
                rename: {
                    oldName: action.peyload.server.oldName,
                    newName:action.peyload.server.name
                }
            }

            return [...state, renameServer];
        break;

        default: {
            return state
        }
    }
}