import React, { Component } from 'react';
import { TextEditor } from '../../../../shared/components/text-editor/text-editor';
import { editServer } from '../../../../store/actions/server-actions/edit-server';
import { deleteServer } from '../../../../store/actions/server-actions/delete-server';
import { connect } from 'react-redux';

export class ServerComponent extends React.Component {
    state = {
        isInEditMode: false
    }

    toggleEditMode = () => {
        this.setState((prevState) => {
            return {
                isInEditMode: !prevState.isInEditMode
            }
        });
    }

    getName = (event) => {
        const { editServer,  index} = this.props;

        editServer({
            name: event.target.value,
            index: index
        });
    }

    deleteServer = () => {
        const { deleteServer,  index} = this.props;

        deleteServer({
            index: index
        });
    }

    render() {
        const { isInEditMode } = this.state;
        const { name } = this.props;
        return (
            <div className="server__item">
                <TextEditor
                    isInEditMode={isInEditMode}
                    className="server_item-title"
                    value={name}
                    onChange={this.getName}
                />
                <button className="server_item-edit" onClick={this.toggleEditMode}>Edit Server</button>
                <button className="server_item-edit" onClick={this.deleteServer}>Delete Server</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        servers: state
    }
}

const mapDispatchToPtops = {
    editServer,
    deleteServer
}

export const Server = connect(mapStateToProps, mapDispatchToPtops)(ServerComponent);