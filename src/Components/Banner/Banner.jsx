import { Link } from "react-router-dom";

const hidethelist = () => {

    const x = document.getElementById('footer');
    x.classList.add('fixed', 'bottom-0');

    const a = document.getElementById('hide-me');
    a.classList.add('hidden');
    const b = document.getElementById('hide-me-too');
    b.classList.add('hidden');
}
const Banner = () => {
    return (
        <div id="hide-me" className="bg-[#1313130D] mx-24 rounded-3xl mt-12">
            <div className="flex justify-center gap-24 items-center py-24">
                <div> 
                    <h1 className="text-[#131313] playfair text-[56px] font-semibold mb-12">Books to freshen up <br /> your bookshelf</h1>
                    <Link to="/listedbooks" onClick={hidethelist}><button className="text-white sans text-xl font-medium py-5 px-7 bg-[#23BE0A] rounded-lg">View The List</button></Link>
                </div>
                <img src={'https://i.postimg.cc/HkZsNcBN/banner.png'} alt="#" />
            </div>
        </div>
    );
};

export default Banner;