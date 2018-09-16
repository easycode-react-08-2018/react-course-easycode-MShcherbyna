import React, { Component } from 'react';
/*
*
*value
*onChange
*isInEditMode
*
*/
export class TextEditor extends React.Component {
    render() {
        const {
            value,
            onChange,
            isInEditMode,
            className
        } = this.props;

        if (isInEditMode) {
            return <input
                value={value}
                className={className}
                onChange={onChange}
            />
        }

        return <span className={this.props.className}>{value}</span>
    }
}