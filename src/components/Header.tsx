
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-light sticky top-0 z-50">
      <div className="flex items-center justify-between px-10 py-3">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">MedAdmit India</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden md:flex items-center gap-9">
            <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">About Us</Link>
            <Link to="/services" className="text-sm font-medium hover:text-accent transition-colors">Services</Link>
            <Link to="/mbbs-abroad" className="text-sm font-medium hover:text-accent transition-colors">MBBS Abroad</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-gray-light text-primary text-sm font-bold tracking-[0.015em] hover:bg-gray-light/80 transition-colors">
            <span className="truncate">Call Us Now</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
