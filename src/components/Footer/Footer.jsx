import React from "react";
import {Link} from "react-router-dom";
import VisitorCounter from "../Contador/Count";


const FooterLinks = ({ to, className, children }) => (
    <Link to={to} className={`hover:underline text-gray-300 ${className}`}>
        {children}
    </Link>
);


const Footer = () => {
    return (
        <footer className="bg-neutral-900 px-4 md:px-16 lg:px-28 h-[150px] bottom-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                <div>
                    <h2 className="text-lg font-bold mb-4 text-gray-300 hover:font-semibold">Acerca de</h2>
                    <ul>
                        <li><FooterLinks to="/home">SkillShop</FooterLinks></li>
                        <li><FooterLinks to="/mision">Misión</FooterLinks></li>
                        <li><FooterLinks to="/vision">Visión</FooterLinks></li>
                        <li><FooterLinks>Blog</FooterLinks></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4 text-gray-300 hover:font-semibold">Ayuda/QR</h2>
                    <ul>
                        <li><FooterLinks>Comprar</FooterLinks></li>
                        <li><FooterLinks>Envíos</FooterLinks></li>
                        <li><FooterLinks>Seguridad</FooterLinks></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4 text-gray-300 hover:font-semibold">Mi cuenta</h2>
                    <ul>
                        <li><FooterLinks to="/login">Ingresar</FooterLinks></li>
                        <li><FooterLinks to="/register">Registrarse</FooterLinks></li>
                    </ul>
                </div>
                <div> 
                    <h2 className="text-lg font-bold mb-4 text-gray-300 hover:font-semibold">Temporadas</h2>
                    <ul>
                        <li><FooterLinks>Descuentos</FooterLinks></li>
                        <li><FooterLinks>Black Friday</FooterLinks></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4 text-gray-300 hover:font-semibold">Contador</h2>
                    <VisitorCounter/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;