import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import ThemeToggle from "@/components/ThemeToggle";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "POKEDEX" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="">
    <nav className="flex justify-center items-center w-[92%]  mx-auto">

      <div className="nav-links duration-800 md:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5" >

        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li >
            
          <Link className="hover:text-gray-500 " href="/">Inicio</Link>
          </li>
          <li>
          <Link className="hover:text-gray-500" href="/pokedex">Pokedex</Link>

          
          </li>
          <img
          className="w-2.2"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Pokemon Api"
          />
          <li>
          <Link className="hover:text-gray-500"  href="/">Califica</Link>

            
          </li>
          <li>
          <Link className="hover:text-gray-500" href="/">Contacto</Link>

            
          </li>

        </ul>

      </div>
      <div>

        <ThemeToggle/>

      </div>
    </nav>
    </header>
    {children}
    <footer className="flex justify-center items-center w-[92%]  mx-auto">
      <span>FOOTER</span>
    </footer>
  </div>
);

export default Layout;