import { hamburger, VelvoraIcon } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/' className="flex justify-center items-center">
        <h6 className="text-white font-extrabold font-palanquin text-2xl tracking-widest">VELVORA</h6>
        <img src={VelvoraIcon} alt="" className="h-20 w-20" srcset="" />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat hover:scale-105 transition-all duration-300 ease-in-out leading-normal text-lg text-slate-200'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-white text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/' className="hover:scale-105 transition-all duration-300 ease-in-out">Sign in</a>
          <span>/</span>
          <a href='/' className="hover:scale-105 transition-all duration-300 ease-in-out">Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon ' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
