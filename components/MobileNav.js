import Image from "next/image";
import { useContext } from "react";
import { Data } from "../Utils/Data";
import { AppContext } from "./Store";
function MobileNav() {
    const {state, dispatch} = useContext(AppContext);
    const {mobileNav} = state;

    const CloseNav = () => {
        dispatch({type: "CLOSENAV"})
    }
  return (
    <div className={mobileNav ? "mobileNav" : "mobileNav openNav"}>
      <div className="flex justify-between mb-6">
        <span>
          <Image
            className="flex rounded cursor-pointer"
            src="/flag.svg"
            width={20}
            height={5}
            alt="flag"
          />
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="15"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
          onClick={CloseNav}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      {Data.map((item) => {
        const { menu, id } = item;
        return (
          <div
            key={id}
            className="flex justify-between items-center py-2 font-bold"
          >
            <p>{menu}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

export default MobileNav
