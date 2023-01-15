import { useContext } from 'react'
import { AppContext } from './Store';

function Menu({ handleNavOff }) {
  const { state, dispatch } = useContext(AppContext);
  const { menuOn, menu } = state;

  return (
    <div>
      {menu.map((item) => {
        const { infos, id } = item;
        return (
          <div key={id}>
            {menuOn && (
              <div
                className="flex justify-between p-20 absolute bg-white w-full"
                onMouseLeave={handleNavOff}
              >
                <div>
                  <h4 className="font-bold pb-5">{infos.itemOne.head}</h4>
                  <ul>
                    <li className="mb-10">{infos.itemOne.one}</li>
                    <li className="mb-10">{infos.itemOne.two}</li>
                    <li className="mb-10">{infos.itemOne.three}</li>
                    <li className="mb-10">{infos.itemOne.four}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold pb-5">{infos.itemTwo.head}</h4>
                  <ul>
                    <li className="mb-10">{infos.itemTwo.one}</li>
                    <li className="mb-10">{infos.itemTwo.two}</li>
                    <li className="mb-10">{infos.itemTwo.three}</li>
                    <li className="mb-10">{infos.itemTwo.four}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold pb-5">{infos.itemThree.head}</h4>
                  <ul>
                    <li className="mb-10">{infos.itemThree.one}</li>
                    <li className="mb-10">{infos.itemThree.two}</li>
                    <li className="mb-10">{infos.itemThree.three}</li>
                    <li className="mb-10">{infos.itemThree.four}</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-bold pb-5">{infos.itemFour.head}</h4>
                  <img className="py-4 w-72" src={infos.itemFour.link} alt="menus"/>
                  <button className="rounded bg-slate-200 p-3 text-black">
                    {infos.itemFour.button}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Menu
