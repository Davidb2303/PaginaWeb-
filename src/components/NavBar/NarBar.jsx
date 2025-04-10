import Button  from "../Button";
import { Menu } from "iconoir-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const NavBarLink = ({className, children}) => (
    <a href="" className={`lg:mr-4 text-white hover:font-semibold m-w-[300px] ${className}`}> 
        {children} 
    </a>
)

const NavBar = () => {
    const menuRef = useRef()
    const [inputValue, setInputValue] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const filter = (value)=>{
        setInputValue(value)
    }

    function showMenu(){
        menuRef.current.classList.toggle("top-[60px]");
        menuRef.current.classList.toggle("-top-[260px]");
    }

    return (
        <nav className="bg-neutral-900 fixed left-0 top-0 w-screen h-[110px] flex lg:flex-row justify-between items-center px-14">
            {/*Logo y Nombre*/}
            <div className="flex flex-row items-center">
                <img src="src\components\images\Logo.png" alt="Icono" className="w-12 h-12 z-50"></img>
                <h1 className="text-white ml-2 text-xl font-bold z-50">SkillShop</h1>
            </div>
            <div className="absolute left-0 top-[60px] flex w-screen flex-col lg:flex-row bg-neutral-900 items-center py-6 lg:static lg:py-0 lg:w-fit transition-all" ref={menuRef}>
                
            <div className="relative inline-block text-left">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="lg:mr-4 hover:font-semibold m-w-[300px] text-white bg-transparent focus:outline-none  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button"
                >
                    Categorias
                    <svg
                    className={`size-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M6 9l6 6 6-6" />
                    </svg>
                </button>

                {dropdownOpen && (
                    <div className="absolute mt-2 w-60 bg-white shadow-md rounded-lg z-50">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                            Deportes
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                            Tecnologia
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                            Hogar
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                            Accesorios
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                            Cursos
                        </a>
                    </div>
                )}
                </div>


                <h2 className="text-white px-4"> Buscar </h2>
                <input type="search" onChange={(e)=>filter(e.target.value)}></input>
                <NavBarLink className="lg:mb-0 px-3">Ofertas</NavBarLink>
                <NavBarLink className="lg:mb-0 px-3">Deportes</NavBarLink>
                <NavBarLink className="lg:mb-0 px-3">Accesorios</NavBarLink>
                <NavBarLink className="lg:mb-0 px-3">Ayuda</NavBarLink>

                <Link to="/login">
                    <Button className="lg:mt-0 lg:mr-4 text-white">Iniciar Sesion</Button>
                </Link>
                <Link to="/register">
                    <Button className="lg:mt-0 lg:mr-4 text-white">Registrarse</Button>
                </Link>
            </div>
            <Menu className="lg:hidden text-white z-50" onClick={showMenu}/>
        </nav>
    )
}

export default NavBar;