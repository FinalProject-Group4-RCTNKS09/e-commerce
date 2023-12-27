import React from "react";
import { Link, useLocation } from "react-router-dom";
import kodeId from "../../../assets/images/kode-hactive.png"

const Footer = () => {
  const location = useLocation().pathname;
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <footer className="bg-zinc-100 pt-24 pb-12 border-t-2 ">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full px-4 font-medium text-primary md:w-1/3 [&>p]:mt-1">
              <h3 className="mb-2 text-3xl lg:text-2xl font-bold">RCTN-KS09</h3>
              <p className="text-lg">Indonesia</p>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-primary">Resource</h3>
              <ul className="text-primary flex flex-col">
                <li>
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    ReactJS
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    TailwindCSS
                  </a>
                </li>
                <li>
                  <a href="https://fakestoreapi.com/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    Fake Store API
                  </a>
                </li>
                <li>

                </li>
                <li>
                  <a href="https://www.kode.id" target="_blank"
                    rel="noreferrer noopener"><img src={kodeId} alt="kode.id" className="hover:w-28" width={100}/></a>
                </li>
              </ul>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-primary">Navigation</h3>
              <ul className="text-primary">
                <li>
                  {location === "/admin" ? (
                    <a href="#product" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      Product
                    </a>
                  ) : (
                    <Link to="/admin" onClick={topFunction} className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      Product
                    </Link>
                  )}
                </li>
                <li>
                  {location === "/admin/sales-recap" ? (
                    <a href="#sales-recap" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      Sales Recap
                    </a>
                  ) : (
                    <Link to="/admin/sales-recap" onClick={topFunction} className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      Sales Recap
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full border-t border-primary pt-10">
            <p className="text-center text-xs font-medium text-slate-500">
              Dibuat dengan <span className="text-pink-500">❤️</span> oleh RCTN-KS09-KEL04
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
