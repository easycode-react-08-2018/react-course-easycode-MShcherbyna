import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ServersHistoryComponent extends React.Component {
    render() {
        console.log("history component", this.props.history);
        const { history } = this.props;

        return (
            <div className="servers__history">
                <h3>Servers History</h3>
                <ul>
                {
                    history.map((item) => {
                        let serverHistoryBlock = '';

                        if (item.new) serverHistoryBlock = (<li className="green">Added new server: "{item.new}"</li>)
                        if (item.rename) serverHistoryBlock = (
                            <li className="orange">
                                Server: <span>"{item.rename.oldName}"</span> renamed to <span>"{item.rename.newName}"</span>
                            </li>
                        )
                        if (item.deletedServer) serverHistoryBlock = (<li className="red">Server "{item.deletedServer}" deleted</li>)

                        return (
                            serverHistoryBlock
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.serversHistoryReducer
    }
}

export const ServersHistory = connect(mapStateToProps)(ServersHistoryComponent);