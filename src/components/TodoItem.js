import React, {Component} from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkboxImg from '../img/checkbox.svg';
import doneImg from '../img/checked.svg';
import closeImg from '../img/close.svg';

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let urlImg = checkboxImg;
        if (item.isComplete) {
            urlImg = doneImg;
        }

        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <img onClick={onClick} src={urlImg} alt='img' />
                <div className="content">
                    <p>{item.title}</p>
                    <span>20 Th.8 2020</span>
                </div>
                <img className="btn-delete" src={closeImg} alt='img_close' />
            </div>
        );
    }
}
export default TodoItem;