import React, {Component} from 'react';
import classNames from 'classnames';

import './ItemChild.css';
import checkedImg from '../img/checked.svg';
import uncheckImg from '../img/uncheck.svg';

class ItemChild extends Component {

    render() {
        const {itemTitle, isComplete, category} = this.props.item;
        let imgSrc = uncheckImg;
        let idParent = this.props.idParent;
        let idChild = this.props.idChild;
        let actionItemChild = this.props.actionTodoItem;
        if (isComplete) imgSrc = checkedImg;

        return (
            <div className="ItemChild">
                <img src={imgSrc} alt="" onClick={actionItemChild(idParent, idChild)} /> 
                <div className="Category">{category}</div>
                <p className={classNames('',{'Complete':isComplete})}>{itemTitle}</p>
            </div>
        )
    }
}

export default ItemChild;