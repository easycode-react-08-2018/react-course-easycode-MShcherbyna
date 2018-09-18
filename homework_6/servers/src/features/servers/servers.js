import React from 'react';
import { Server } from './components/server/server';
import { addServer } from '../../store/actions/server-actions/add-server';
import { ServersHistory } from './components/servers-history';

import './components/server/server.css';
import { connect } from 'react-redux';

export class ServersComponent extends React.Component {
    addNewServer = () => {
        const { addServer, servers } = this.props;
        let index = (servers.length*1) + 1;

        addServer({
            name: "Server #" + index + " ",
            index: servers.length *1
        })
    }

    render() {
        const { servers } = this.props;

        return (
            <div>
                <ul>
                    {
                        servers.map((server) => {
                            return (
                                <li>
                                    <Server
                                        name={server.name}
                                        index={server.index}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.addNewServer}>ADD SERVER</button>
                <ServersHistory />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        servers: state.serversReducer
    }
}

const mapDispatchToPtops = {
    addServer
}

export const Servers = connect(mapStateToProps, mapDispatchToPtops)(ServersComponent);