import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Navbar = () => {
  const Links = [
    { name: 'HOME', link: 'headline' },
    { name: 'PROJECTS', link: 'projects' },
    { name: 'ABOUT', link: 'about-me' },
    { name: 'CONTACT', link: 'contact' },
  ];

  const [open, setOpen] = useState(false);
  return (
    <Section className="shadow-md w-full fixed top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span id="logo" className="text-3xl text-indigo-600">
            <Logo className="rounded-full w-9 h-9" />
          </span>
        </div>

        <button type="button" onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu'} aria-label="Mobile menu" />
        </button>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>
          {
          Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 cursor-pointer">
              <Link
                to={link.link}
                spy
                smooth
                offset={-50}
                duration={800}
                onClick={() => { setOpen(false); }}
                className="text-gray-800 hover:text-logoColor font-black duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))
        }
        </ul>
      </div>
    </Section>
  );
};

export default Navbar;

const Section = styled.header`
z-index: 999;
ion-icon {
  color: #6936f5;
}

#logo {
  transition: transform 0.9s ease-out;

  &:hover {
    transform: rotate(360deg);
  }
}

.active {
  color: #6936f5;
}
`;
