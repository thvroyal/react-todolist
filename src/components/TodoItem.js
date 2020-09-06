import React, {Component} from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkboxImg from '../img/checkbox.png';
import doneImg from '../img/done.png';

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
                <img onClick={onClick} src={urlImg} width={20} height={20} alt='img' />
                <p>{item.title}</p>
            </div>
        );
    }
}
export default TodoItem;