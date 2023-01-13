import { useContext } from "react";
import { AppContext } from "../components/Store";
import Head from "next/head";
import Image from "next/image";
import Nav from "./Nav";

function Layout({children, title}) {
  const { state, dispatch } = useContext(AppContext);
  const {companyMenu, mediaMenu, sponsorMenu} = state;

  const HandleNavOff = () => {
    dispatch({ type: "MENUOFF" });
  };

  const CompanyMenu =() => {
    dispatch({type: "COMPANYMENU"})
  }
  const MediaMenu = () => {
    dispatch({ type: "MEDIAMENU" });
  };
  const SponsorMenu = () => {
    dispatch({ type: "SPONSORMENU" });
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav
          className="p-5 flex justify-between items-center"
          onMouseOver={HandleNavOff}
        >
          <Image src="/logo.svg" alt="logo" width={200} height={120} />
          <div className="flex items-center w-2/6 justify-evenly">
            <span>
              <button className="hidden md:block bg-blue-700 font-bold text-xl text-white rounded-full p-5 px-8">
                OPEN ACCOUNT
              </button>
            </span>
            <span>
              <button className="hidden md:block bg-slate-200 font-bold text-xl text-blue-700 rounded-full p-5 px-10">
                LOG IN
              </button>
            </span>
            <span>
              <Image
                className="rounded"
                src="/flag.svg"
                width={40}
                height={10}
                alt="flag"
              />
            </span>
          </div>
        </nav>
        <hr />
        <Nav handleNavOff={HandleNavOff} />
      </header>
      <main onMouseOver={HandleNavOff}>{children}</main>
      <footer className="md:p-16 p-6">
        <div className="md:flex">
          <div className="md:flex justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex justify-between items-center">
                <h2 className="mb-2 md:mb-5 text-black font-bold md:font-normal md:text-slate-500">
                  Company
                </h2>
                {companyMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up font-bold md:hidden"
                    viewBox="0 0 16 16"
                    onClick={() => CompanyMenu()}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down font-bold md:hidden"
                    viewBox="0 0 16 16"
                    onClick={() => CompanyMenu()}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                )}
              </div>
              <ul
                className={
                  companyMenu ? "block ml-3 md:ml-0" : "hidden md:block"
                }
              >
                <li>About Us</li>
                <li>Award</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <div className="flex justify-between">
                <h2 className="mb-5 text-black md:text-slate-500 font-bold md:font-normal">
                  Media
                </h2>
                {mediaMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up font-bold md:hidden"
                    viewBox="0 0 16 16"
                    onClick={() => MediaMenu()}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down font-bold md:hidden"
                    viewBox="0 0 16 16"
                    onClick={() => MediaMenu()}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                )}
              </div>
              <ul
                className={mediaMenu ? "block ml-3 md:ml-0" : "hidden md:block"}
              >
                <li>Company News</li>
                <li>Videos</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between">
                <h2 className="mb-5 text-black md:text-slate-500 font-bold md:font-normal">
                  Sponsorship
                </h2>
                {sponsorMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up font-bold md:hidden"
                    viewBox="0 0 16 16"
                    onClick={() => SponsorMenu()}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down font-bold md:hidden"
                    viewBox="0 0 16 16"
                    onClick={() => SponsorMenu()}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                )}
              </div>
              <ul
                className={sponsorMenu ? "block ml-3 md:ml-0" : "hidden md:block"}
              >
                <li>Rip Curl Cup</li>
                <li>Southampton FC</li>
                <li>Bali Sports Foundation</li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </footer>
    </div>
  );
}

export default Layout
