import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
//importando iconos
import { FaHome, FaUserCircle, FaShoppingBag } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { PiLampPendantFill } from "react-icons/pi";


const Navbar = () => {
  //estado para la barra de busqueda
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  //Referencia al contenedor del input de búsqueda para detectar clics fuera de él.
  const searchRef = useRef(null);
  // Estado para controlar si se ha hecho scroll en la página
  const [isScrolled, setIsScrolled] = useState(false);

  //Alterna el estado isSearchOpen para abrir o cerrar el input.
  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  //Cierra el input de búsqueda si se hace clic fuera de su contenedor
  const handleClickOutside = (event) => {
    if(searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchOpen(false)
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.addEventListener("mousedown", handleClickOutside)
    }
  },[])

  // Efecto para agregar el listener de scroll y actualizar el estado isScrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Agregar listener de scroll al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Logo */}
      <div className="lg:hidden flex justify-between items-center absolute left-0 right-0 p-5 text-white font-bold text-2xl">
        <div className="flex items-center gap-3 justify-center">
          <PiLampPendantFill />
          <p>Logo</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <IoSearch className="text-2xl text-white hover:text-black rounded-full" onClick={handleSearchClick}/>
          {isSearchOpen && (
            <input 
              className={`absolute top-3/4 left-0 right-0 mx-5 rounded-full px-3 placeholder:text-[16px] pb-2 ${isSearchOpen ? 'slide-in-mobile' : 'slide-out-mobile'}`}
              placeholder="Buscar..."
            />
          )}
          <FaShoppingBag className="flex items-center justify-center"/>
        </div>
      </div>

      {/* Creando navbar para mobile */}
      <nav className="fixed z-50 lg:hidden bottom-0 left-0 right-0 glass m-3 text-primary">
        <ul className="flex justify-between px-5 py-4 text-2xl md:px-16 md:py-5 md:text-3xl">
          <li>
            <Link>
              <FaHome />
            </Link>
          </li>
          <li>
            <Link>
              <MdDashboard />
            </Link>
          </li>
          <li>
            <Link>
              <IoIosChatboxes />
            </Link>
          </li>
          <li>
            <Link>
              <FaUserCircle />
            </Link>
          </li>
        </ul>
      </nav>

      {/* //Creando navbar para desktop */}
      <nav className={`hidden fixed lg:flex p-3 z-50 left-0 right-0 m-3 text-white justify-between ${isScrolled ? 'bg-primary transition-all m-3 rounded-xl' : ''}`}>
        {/* Logo */}
        <div className="flex items-center gap-3 justify-center text-2xl font-bold">
          <PiLampPendantFill />
          <p>Logo</p>
        </div>
        {/* Menu */}
        <div className="glass flex items-center p-2 rounded-full ml-24">
          <ul className="flex gap-2 font-semibold text-white">
            <li className="px-4 py-1 rounded-full hover:bg-white hover:text-primary transition-all">
              <Link>
                Inicio
              </Link>
            </li>
            <li className="px-4 py-1 rounded-full hover:bg-white hover:text-primary transition-all">
              <Link>
                Categorias
              </Link>
            </li>
            <li className="px-4 py-1 rounded-full hover:bg-white hover:text-primary transition-all">
              <Link>
                Galeria
              </Link>
            </li>
            <li className="px-4 py-1 rounded-full hover:bg-white hover:text-primary transition-all">
              <Link>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        {/* Inicio carrito y busqueda */}
        <div className="flex items-center gap-3 justify-center font-bold">
          <div className="relative flex items-center gap-1" ref={searchRef}>
            {isSearchOpen && (
              <input 
                type="text"
                placeholder="Buscar..."
                className={`p-2 px-5 rounded-full transition-all text-primary ${isSearchOpen ? 'slide-in' : 'slide-out'}`}
              />
            )}
            <IoSearch className="text-2xl absolute text-white right-3 rounded-full" onClick={handleSearchClick}/>
          </div>
          <FaShoppingBag className="text-2xl"/>
          <button className="bg-white text-primary px-3 py-2 rounded-full">Iniciar sesion</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar