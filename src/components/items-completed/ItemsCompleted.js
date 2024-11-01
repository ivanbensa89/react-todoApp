import Item from "../item/Item";

export default function ItemsCompleted(props) {
    return (<div>{

        props.items.filter(item => {
            return item.completed
        }).map(function (value, index) {
            return <Item key={index} item={value} onItemClick={props.onItemClick} onDeleteItem={props.onDeleteItem}></Item>
        })
    }</div>);
}
