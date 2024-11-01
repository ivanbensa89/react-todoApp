import "./Item.css";

export default function Item(props) {
    return (
        <div className={`todo-item  ${props.item.completed ? 'completed' : ''}`} onClick={(e) => {
            e.stopPropagation();
            props.onItemClick(props.item);
        }}
        >
            <div class="todo-item-date">
                <span class="day">{props.item.date.toLocaleString('default', { day: 'numeric' })}</span>
                <span class="month">{props.item.date.toLocaleString('default', { month: 'short' })}</span>
            </div>
            <div class="todo-item-content">
                <span class="data">{props.item.content}</span>
            </div>
            <span class="delete-btn" title="delete" onClick={(e) => {
                e.stopPropagation();
                props.onDeleteItem(props.item);
            }}
            ></span>
        </div>
    );
}
