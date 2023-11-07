import { Link } from "react-router-dom";

const list = [
    {
        link: '/',
        content: 'Trang chủ'
    },
    {
        link: '/user',
        content: 'User'
    },
    {
        link: '/addproduct',
        content: 'Add Products'
    }
]

function Item({ item }) {

    return (
        <>
            <li style={{listStyle:"none", display: "inline-block", padding:"5px"}}><Link style={{textDecoration:"none", color: "black"}} 
            to={item.link}>{item.content}</Link></li>
        </>
    );
}

function Menu() {
    return (
        <ul>
            {list.map((item, index) => (
                <>
                    <Item item={item} />
                </>

            ))}
        </ul>
    );
}

export default Menu;