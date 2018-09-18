import React, { Component } from 'react';
import { TextEditor } from '../../../../shared/components/text-editor/text-editor';
import { editServer } from '../../../../store/actions/server-actions/edit-server';
import { deleteServer } from '../../../../store/actions/server-actions/delete-server';
import { connect } from 'react-redux';

export class ServerComponent extends React.Component {
    // state = {
    //     isInEditMode: false,
    // }
    constructor(props) {
        super(props);

        this.state = {
            isInEditMode: false,
            name: this.props.name
        }
    }
    toggleEditMode = () => {
        const { editServer, index } = this.props;
        const { isInEditMode } = this.state;

        this.setState((prevState) => {
            return {
                isInEditMode: !prevState.isInEditMode
            }
        });

        if (isInEditMode) {
            const { name } = this.state;

            editServer({
                name: name,
                index: index,
                oldName: this.props.name
            });
        }
    }

    getName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    deleteServer = () => {
        const { deleteServer, index, name} = this.props;

        deleteServer({
            name: name,
            index: index
        });
    }

    render() {
        const { isInEditMode, name } = this.state;
        // const { name } = this.props;

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
        servers: state.serversReducer
    }
}

const mapDispatchToPtops = {
    editServer,
    deleteServer
}

export const Server = connect(mapStateToProps, mapDispatchToPtops)(ServerComponent);