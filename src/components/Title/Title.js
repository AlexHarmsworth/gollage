import React from 'react';
import './Title.css';
import { updateURLParam, getURLParam } from "../Url/Url";

const titleKey = "title";

class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            value: getURLParam(titleKey) || "Gollage",
        };
    }

    updateTitleParam({ target }) {
        this.setState({ value: target.value});
        updateURLParam(titleKey, target.value);
    }

    render() {
        return <input onChange={this.updateTitleParam.bind(this)} className="c-title" value={this.state.value}></input>;
    }
}

export default Title;
