import Button  from "../Button";
import { Menu } from "iconoir-react";
import { useRef, useState } from "react";


const NavBarLink = ({className, children}) => (
    <a href="" className={`lg:mr-4 text-white hover:font-semibold m-w-[300px] ${className}`}> 
        {children} 
    </a>
)

const NavBar = () => {
    const menuRef = useRef()
    const [inputValue, setInputValue] = useState("");

    const filter = (value)=>{
        setInputValue(value)
    }

    function showMenu(){
        menuRef.current.classList.toggle("top-[60px]");
        menuRef.current.classList.toggle("-top-[260px]");
    }

    return (
        <nav className="bg-neutral-900 fixed left-0 top-0 w-screen h-[110px] flex lg:flex-row justify-between items-center px-14">
            <div className="flex flex-row items-center">
                <img src="src\components\images\Logo.png" alt="Icono" className="w-12 h-12 z-50"></img>
                <h1 className="text-white ml-2 text-xl font-bold z-50">SkillShop</h1>
            </div>
            <div className="absolute left-0 top-[60px] flex w-screen flex-col lg:flex-row bg-neutral-900 items-center py-6 lg:static lg:py-0 lg:w-fit transition-all" ref={menuRef}>
                <h2 className="text-white px-4"> Buscar </h2>
                <input type="search" onChange={(e)=>filter(e.target.value)}></input>
                <NavBarLink className="lg:mb-0 px-3">Ofertas</NavBarLink>
                <NavBarLink className="lg:mb-0 px-3">Deportes</NavBarLink>
                <NavBarLink className="lg:mb-0 px-3">Accesorios</NavBarLink>
                <NavBarLink className="lg:mb-0 px-3">Ayuda</NavBarLink>

                <Button className="lg:mt-0 lg:mr-4 text-white">Iniciar Sesion</Button>
                <Button className="lg:mt-0 lg:mr-4 text-white">Registrarse</Button>
            </div>
            <Menu className="lg:hidden text-white z-50" onClick={showMenu}/>
        </nav>
    )
}

export default NavBar;