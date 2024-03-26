import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Carts = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="pb-44">
            <h3 className="text-[#131313] text-center text-[40px] font-semibold playfair pt-20 pb-9">Books</h3>
            <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-6">
                {
                    books.map(book => <Cart key={book.ID} book={book}></Cart>)
                }
            </div>
        </div>
        </div>
    );
};

export default Carts;