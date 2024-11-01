import Item from "../item/Item";

export default function ItemsAll(props) {
    return (<div>
        {
            props.items.map(function (value, index) {
                return <Item key={index} item={value} onItemClick={props.onItemClick} onDeleteItem={props.onDeleteItem}></Item>
            })
        }

    </div>);
}
