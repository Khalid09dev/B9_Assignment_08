import {Link} from "react-router-dom";

const Navbar = () => {

    const hide = () => {

        const x = document.getElementById('footer');
        x.classList.add('fixed', 'bottom-0');

        const a = document.getElementById('hide-me');
        a.classList.add('hidden');
        const b = document.getElementById('hide-me-too');
        b.classList.add('hidden');
        
    }


    const visible = () => {
        const x = document.getElementById('footer');
        x.classList.remove('fixed', 'bottom-0');

        const a = document.getElementById('hide-me');
        a.classList.remove('hidden');
        const b = document.getElementById('hide-me-too');
        b.classList.remove('hidden');
    }

    return (
        <div>
            <nav className="flex justify-around items-center pt-6">
                <h2 className="text-[#131313] sans text-[28px] font-bold">Book Vibe</h2>
                <div>
                    <ul className="flex items-center gap-4">
                        <Link to='/' onClick={visible} className="text-[#23BE0A] sans text-[18px] px-5 py-2 border border-[#23BE0A] rounded-lg font-medium hover:bg-[#23BE0A] hover:text-white duration-150">Home</Link>
                        <Link to='/about' onClick={hide} className="text-[#131313CC] sans text-[17px] font-normal px-4 py-3 rounded-lg hover:bg-gray-300 duration-150"><a href="#">Listed Books</a></Link>
                        <li className="text-[#131313CC] sans text-[17px] font-normal px-4 py-3 rounded-lg hover:bg-gray-300 duration-150"><a href="#">Pages To Read</a></li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <button className="text-white sans text-[18px] font-medium rounded-lg py-3 px-6 bg-[#23BE0A] hover:bg-white hover:text-black hover:border duration-150">Sign In</button>
                    <button className="text-white sans text-[18px] font-medium rounded-lg py-3 px-6 bg-[#59C6D2] hover:bg-white hover:text-black hover:border duration-150">Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;