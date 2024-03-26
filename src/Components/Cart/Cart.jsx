
const Cart = ({book}) => {
    const {Title, Image, tag1, tag2, Author, Category, Ratings, Star} = book;
    
    // Category.map((catego, idx) => <p key={idx} catego={catego}></p>);
    return (
        <div className="border p-6 rounded-[16px]">
            <div>
                <div className="flex justify-start"><img className="bg-[#F3F3F3] px-24 py-10 rounded-lg" src={Image} alt="#" /></div>
                <div className="flex items-center pt-6 gap-4">
                    <span className="text-[#23BE0A] sans text-base font-normal px-4 bg-[#23BE0A0D] rounded-xl text-center py-[2px]">{tag1}</span> <span className="text-[#23BE0A] sans text-base font-normal px-4 bg-[#23BE0A0D] py-[2px] rounded-xl">{tag2}</span>
                </div>
                <p className="text-[#131313] playfair text-xl font-bold pt-4">{Title}</p>
                <p className="text-[#131313CC] sans text-base font-medium pt-2 pb-5">By: {Author}</p>
                <hr />
                <div className="flex justify-between text-[#131313CC] text-base sans font-medium pt-5">
                    <p>{Category}</p>
                    <div className="flex items-center gap-1">
                        <p>{Ratings}</p>
                        <img src={Star} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;