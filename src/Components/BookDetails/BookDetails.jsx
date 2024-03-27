import { useLoaderData, useParams } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savebookdetail } from "../../Utilities/LocalStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    // const idInt = parseInt(bookId)
    const book = books.find(book => book.ID == bookId);

    const x = document.getElementById('footer');
    x.classList.add('fixed', 'bottom-0', 'hidden');

    const a = document.getElementById('hide-me');
    a.classList.add('hidden');
    const b = document.getElementById('hide-me-too');
    b.classList.add('hidden');

    const notify = () => {
        savebookdetail(bookId)
        toast.success('Book Added To Read List');
    }
    const notify2 = () => {
        savebookdetail(bookId);
        toast.success('Book Added To Wishlist');
    }

    const {Title, Image, tag1, tag2, Author, Category, Ratings, Review, pages_number, publisher, publishing_year} = book;
    return (
        <div className="pt-16">
            <div className="flex justify-center gap-12">
                <img className="w-1/4 h-1/4 bg-[#F3F3F3] py-10 px-14 rounded-xl" src={Image} alt="#" />
                <div>
                    <h1 className="text-[#131313] playfair text-[40px] font-semibold">{Title}</h1>
                    <p className="text-[#131313CC] sans text-xl font-medium pb-6">By: {Author}</p>
                    <hr />
                    <p className="text-[#131313CC] sans text-[18px] font-medium pt-4 pb-3">{Category}</p>
                    <hr />
                    <p className="sans text-base text-[#131313B3] font-normal text-left items-start w-[600px] pt-6"><span className="text-[#131313] sans text-base font-semibold">Review: </span>{Review}</p>
                    <div className="flex items-center pt-6 pb-8 gap-4">
                        <span className="text-[#131313] sans text-base font-semibold">Tag</span><span className="text-[#23BE0A] sans text-base font-normal px-4 bg-[#23BE0A0D] rounded-xl text-center py-[2px]">#{tag1}</span> <span className="text-[#23BE0A] sans text-base font-normal px-4 bg-[#23BE0A0D] py-[2px] rounded-xl">#{tag2}</span>
                    </div>
                    <hr />
                    <div className="flex gap-16 pt-6 pb-6">
                        <ul className="text-[#131313B3] sans text-base font-normal">
                            <li className="pb-2">Number of Pages: </li>
                            <li className="pb-2">Publisher: </li>
                            <li className="pb-2">Year of Publishing: </li>
                            <li className="pb-2">Rating: </li>
                        </ul>
                        <ul className="text-[#131313] sans text-base font-semibold">
                            <li className="pb-2">{pages_number}</li>
                            <li className="pb-2">{publisher}</li>
                            <li className="pb-2">{publishing_year}</li>
                            <li className="pb-2">{Ratings}</li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <button className="text-[#131313] sans text-[18px] font-semibold px-7 py-3 border rounded-lg" onClick={notify}>Read</button>
                        <ToastContainer>
                        </ToastContainer>
                        <button className="text-white sans text-[17px] font-semibold px-7 py-3 bg-[#50B1C9] rounded-lg" onClick={notify2}>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;