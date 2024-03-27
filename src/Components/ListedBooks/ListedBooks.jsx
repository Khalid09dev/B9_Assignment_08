import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookDetail } from "../../Utilities/LocalStorage"

const ListedBooks = () => {
    
    const x = document.getElementById('footer');
    x.classList.add('fixed', 'bottom-0', 'hidden');
    
    const a = document.getElementById('hide-me');
    a.classList.add('hidden');
    const b = document.getElementById('hide-me-too');
    b.classList.add('hidden');
    
    const books = useLoaderData();
    const [savedBooks, setSavedBooks] = useState([]);
    // console.log(savedBooks);
    useEffect(() => {
        const storedBookIds = getStoredBookDetail();
        if(books.length > 0) {
            const booksSaved = books.filter(book => storedBookIds.includes(book.ID))
            setSavedBooks(booksSaved);
        }
        // console.log(savedBooks)
    }, [])
    return (
        <div className="pt-9">
            <div className="text-[#131313] mb-20 sans text-[28px] font-semibold text-center py-8 bg-[#F3F3F3] mx-28 rounded-xl">
                <h1>Books {savedBooks.length}</h1>
            </div>
            <div>
                <div className="mx-28">
                    <button className="border border-t-2 border-l-2 border-b-white border-r-2 text-[#13131380] sans text-[18px] font-normal px-5 py-3">Read Books</button>
                    <button className="border border-t-white border-l-0 border-r-white border-b-0 text-[#13131380] sans text-[18px] font-normal px-5 py-3">Wishlist Books</button>
                </div>
                <hr className="pb-8 border-t-2 mx-28"/>
                {
                    savedBooks.map(book => <div className="pb-6" key={book.ID}>
                        <div className=" mx-28 rounded-2xl border-[2px] p-6 gap-6 flex">
                            <img className="w-[240px] h-[250px] px-12 py-7 rounded-2xl bg-[#1313130D]" src={book.Image} alt="#" />
                            <div>
                                <p className="text-[#131313] playfair text-xl font-bold pt-4">{book.Title}</p>
                                <p className="text-[#131313CC] sans text-base font-medium pt-2 pb-5">By: {book.Author}</p>
                                <div className="flex pb-5 gap-5">
                                    <div className="flex gap-3">
                                        <span className="text-[#131313] sans text-base font-semibold">Tag</span><span className="text-[#23BE0A] sans text-base font-normal px-4 bg-[#23BE0A0D] rounded-xl text-center py-[2px]">#{book.tag1}</span> <span className="text-[#23BE0A] sans text-base font-normal px-4 bg-[#23BE0A0D] py-[2px] rounded-xl">#{book.tag2}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src={book.map} alt="#" />
                                        <p className="text-[#131313CC] sans text-base font-normal">Year of Publishing <span>{book.publishing_year}</span></p>
                                    </div>
                                </div>
                                <div className="flex gap-4 pb-[18px]">
                                    <div className="flex gap-1">
                                        <img src={book.publisher_logo} alt="#" />
                                        <p className="text-[#131313B3] sans text-base font-normal">Publisher: {book.publisher}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <img src={book.pages_logo} alt="#" />
                                        <p className="text-[#131313B3] sans text-base font-normal">page: <span>{book.pages_number}</span></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="pt-4 flex items-center gap-4">
                                    <span className="text-[#328EFF] sans text-base font-normal px-5 py-[10px] bg-[#328EFF26] rounded-[20px]">Category: <span>{book.Category}</span></span>
                                    <span className="text-[#FFAC33] sans text-base font-normal bg-[#FFAC3326] px-5 py-[10px] rounded-3xl">Rating: <span>{book.Ratings}</span></span>
                                        <button className="text-white sans text-[18px] font-medium px-5 py-[11px] bg-[#23BE0A] rounded-3xl">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;