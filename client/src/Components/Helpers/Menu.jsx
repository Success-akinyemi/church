import React, { useState } from 'react';
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import Logo from './Logo';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    { name: 'Home', link: '/' },
    {
      name: 'About Us',
      submenu: [
        { name: 'About Us', link: '/about-us' },
        { name: 'FADA', link: '/about-fada' },
      ],
    },
    {
      name: 'Donation',
      submenu: [
        { name: 'Donate Now', link: '/donation' },
        { name: 'Our Sponsors', link: '/donation/sponsors' },
      ],
    },
    {
      name: 'Programs & Events',
      submenu: [
        { name: 'Upcoming Events', link: '/programs/upcoming' },
        { name: 'Past Events', link: '/programs/past' },
      ],
    },
    {
      name: 'Resources',
      submenu: [
        { name: 'Blog', link: '/resources/blog' },
        { name: 'FAQ', link: '/resources/faq' },
      ],
    },
    { name: 'Blogs', link: '/blogs' },
    { name: 'Shop', link: '/shop' },
    {
      name: 'Join Us',
      submenu: [
        { name: 'Become a Member', link: '/join/member' },
        { name: 'Volunteer', link: '/join/volunteer' },
      ],
    },
  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <nav className="z-[999] bg-main-color fixed top-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <div>
            <a href="/">
              <Logo />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <MdMenu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.link || '#'}
                  className="text-slate-100 hover:text-yellow-500 font-medium mt-[2.5rem] text-[14px]  pb-8 flex items-center"
                >
                  {item.name}
                  {item.submenu && <MdArrowDropDown className="ml-1 text-xl" />}
                </a>
                {/* Desktop Dropdown */}
                {item.submenu && (
                  <ul className="absolute left-0 mt-2 w-[10rem] bg-white shadow-lg top-[4rem] rounded-md hidden group-hover:block">
                    {item.submenu.map((submenuItem, subIndex) => (
                      <li key={subIndex} className="border-b last:border-b-0">
                        <a
                          href={submenuItem.link}
                          className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-semibold"
                        >
                          {submenuItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isOpen ? 'block' : 'hidden'
          } absolute top-[70px] left-0 w-full bg-main-color pb-6`}
        >
          <ul className="px-4 pt-2 space-y-2">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <div
                  className="flex items-center justify-between text-slate-100 py-2 cursor-pointer"
                  onClick={() => item.submenu && toggleSubmenu(index)}
                >
                  <a
                    href={item.link || '#'}
                    className="text-slate-100 hover:text-yellow-500 font-medium text-[14px]"
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <MdArrowDropDown
                      className={`ml-1 text-xl transform transition-transform ${
                        activeSubmenu === index ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>
                {/* Mobile Dropdown */}
                {item.submenu && activeSubmenu === index && (
                  <ul className="mt-2 ml-4 space-y-2">
                    {item.submenu.map((submenuItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={submenuItem.link}
                          className="block text-slate-100 hover:text-yellow-500 py-1 text-sm font-medium"
                        >
                          {submenuItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;