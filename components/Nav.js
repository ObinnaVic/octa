import { useContext } from "react";
import { Data } from "../Utils/Data";
import Menu from "./Menu";
import { AppContext } from "./Store";

function Nav({ handleNavOff }) {
  const { dispatch } = useContext(AppContext);

  const HandleNav = (id) => {
      dispatch({ type: "MENUSHOW", payload: id })
  };
  
  return (
    <div>
      <div className="hidden lg:flex font-bold justify-evenly">
        {Data.map((item) => {
          const { menu, id } = item;
          return (
            <div key={id}>
              <span className="bg-white p-5" onMouseOver={handleNavOff}></span>
              <button
                onMouseOver={(e) => HandleNav(id)}
                className="bg-white p-5 hover:bg-slate-200"
              >
                {menu}
              </button>
              <span className="bg-white p-5" onMouseOver={handleNavOff}></span>
            </div>
          );
        })}
      </div>
      <hr />
      <Menu handleNavOff={handleNavOff}/>
    </div>
  );
}

export default Nav;
