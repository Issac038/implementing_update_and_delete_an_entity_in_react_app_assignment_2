const Item = ({ item, onDelete }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span>{item.name} - {item.status}</span>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
};

export default Item;
