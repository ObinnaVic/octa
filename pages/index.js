import Layout from "../components/Layout";
import Image from "next/image";
import Hero from "../public/hero.jpeg";
import { useContext } from "react";
import { AppContext } from "../components/Store";
import { dataTwo } from "../Utils/Data";

export default function Home() {
  const {state, dispatch} = useContext(AppContext);
  const {imageData} = state;

  const HandleSecImages = (id) => {
    dispatch({type: "IMAGECHANGER", payload: id})
  }

  return (
    <Layout title={"Home-Octa"}>
      <div className="hero-sec flex flex-col md:flex-row w-screen justify-center items-center py-12 md:py-0 px-0 md:px-50 md:pl-20">
        <div className="flex flex-col md:w-1/2 space-y-12 text-white text-center items-center md:items-start md:mb-0 mb-10 md:text-left">
          <h1 className="max-w-md font-bold text-white text-4xl md:text-6xl">
            Dream Big.
            <br /> Achieve Bigger.
          </h1>
          <p className="text-2xl md:text-3xl px-3 md:px-0 md:w-1/2">
            Trade with a global broker to achieve your investment goals.
          </p>
          <button className="md:block bg-blue-700 font-bold text-xs md:text-xl text-white rounded-full p-3 md:p-5 md:px-0 w-1/2 md:w-1/3">
            CREATE AN ACCOUNT
          </button>
        </div>
        <div className="flex flex-col md:w-1/2 space-y-12">
          <Image src={Hero} />
        </div>
      </div>
      <div className="second-sec bg-violet-100">
        <h1 className="font-semibold text-2xl md:text-6xl text-center py-10">
          Your safe space for investing
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center items-center md:w-1/2">
            {dataTwo.map((item) => {
              const { Head, id, list } = item;
              return (
                <div
                  className="bg-white hover:bg-blue-700 transition-transform p-3 md:p-7 mb-4 rounded-3xl w-5/6 md:w-3/5 shadow-lg"
                  onMouseOver={(e) => HandleSecImages(id)}
                >
                  <h3 className="font-semibold text-sm md:text-3xl">{Head}</h3>
                  <div className="p-4">
                    <ul className="list-disc">
                      <li className="text-sm md:text-xl">{list.listOne}</li>
                      {list.listTwo ? (
                        <li className="text-sm md:text-xl">{list.listTwo}</li>
                      ) : (
                        ""
                      )}
                      {list.listThree ? (
                        <li className="text-sm md:text-xl">{list.listThree}</li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center md:w-1/2">
            <div className="second-sec-img flex items-center justify-center md:w-5/6">
              {imageData.length > 0 ? (
                imageData.map((item) => {
                  const { img } = item;
                  return (
                    <div className="md:w-full">
                      <img src={img} alt="sec-two-img" className="w-full"/>
                    </div>
                  );
                })
              ) : (
                <div className="md:w-full">
                  <img src={dataTwo[0].img} alt="sec-two-img" className="w-full"/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
