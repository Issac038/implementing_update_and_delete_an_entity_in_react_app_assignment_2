import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
    const [items, setItems] = useState([]);

    // Fetch doors from API
    useEffect(() => {
        fetch(API_URI)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Error fetching doors:", err));
    }, []);

    // Delete door function
    const handleDelete = (id) => {
        fetch(`${API_URI}/${id}`, { method: "DELETE" })
            .then((res) => {
                if (res.ok) {
                    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
                } else {
                    console.error("Error deleting door");
                }
            })
            .catch((err) => console.error("Delete request failed:", err));
    };

    return <ItemList items={items} onDelete={handleDelete} />;
}

export default App;
