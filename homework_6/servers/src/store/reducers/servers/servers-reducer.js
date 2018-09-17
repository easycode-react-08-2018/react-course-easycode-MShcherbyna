import { ADD_SERVER } from '../../actions/server-actions/add-server';

const initialState = [
    {
        index: 0,
        name: "Server #1 ",
    },
    {
        index: 1,
        name: "Server #2 "
    }
];
export const serversReducer = (state = initialState, action) => {
    console.log('reduser state', state);
    switch (action.type) {
        case 'ADD_SERVER':
            return [...state, action.peyload.server];
        break;

        case 'EDIT_SERVER': 
            state.find(function(server, i){
                if (server.index == action.peyload.server.index) {
                    state[i].name = action.peyload.server.name

                    return server;
                }
            });

            return [...state];
        break;

        case 'DELETE_SERVER':
            state.find(function(server, i){
                if (server.index == action.peyload.server.index) {
                    state.splice(i, 1);
                    return server;
                }
            });

            return [...state];
        break;

        default: {
            return state
        }
    }
}