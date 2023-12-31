import { useState } from 'react';
import Logo from '../../ui/Logo';
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Search from '../../ui/Search';

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary justify-between">
      <div className="container flex text-white mx-auto h-full items-center">
        <div>
          <Logo />
        </div>
        <nav className="flex justify-center w-full ">
          <ul className="flex">
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="" className="text">
                Home
              </a>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#">
            <button className="btn-primary w-[160px]">Order Online</button>
          </a>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
