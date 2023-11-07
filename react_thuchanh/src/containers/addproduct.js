import { useState } from "react";

function AddProducts({ onAppTask }) {
    const [input, setInput] = useState()
    return (
        <>
            Thêm sản phẩm mới: <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => onAppTask(input)}>Add</button>
        </>
    );
}
function Product({ item, onChangeProduct, onDeleteProduct }) {
    const [isEditing, setEditing] = useState(false)
    return (
        <li key={item.id}>
            <input type="checkbox" checked={item.done} onChange={(e) => onChangeProduct({ ...item, done: e.target.checked })} />
            
        </li>
     );
}

export default AddProducts;