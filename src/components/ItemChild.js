import React, {Component} from 'react';
import classNames from 'classnames';

import './ItemChild.css';
import checkedImg from '../img/checked.svg';
import uncheckImg from '../img/uncheck.svg';

class ItemChild extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {itemTitle, isComplete, category} = this.props.content;
        let imgSrc = uncheckImg;
        if (isComplete) imgSrc = checkedImg;

        return (
            <div className="ItemChild">
                <img src={imgSrc} /> 
                <div className="Category">{category}</div>
                <p className={classNames('',{'Complete':isComplete})}>{itemTitle}</p>
            </div>
        )
    }
}

export default ItemChild;