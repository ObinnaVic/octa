import Layout from "../components/Layout";
import Image from "next/image";
import Hero from "../public/hero.jpeg";
import ImageSix from "../public/imageSix.jpg";
import ImageSeven from "../public/ImageSeven.webp";
import ImageNine from "../public/ImageNine.webp";
import ImageEight from "../public/ImageEight.png";
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
      <div className="hero-sec flex flex-col md:flex-row justify-center items-center md:py-0 px-0 md:px-50 ">
        <div className="flex flex-col md:w-1/2 space-y-12 text-white text-center items-center md:items-start md:mb-0 mb-10 md:text-left md:p-8">
          <h1 className="max-w-md font-bold text-white text-4xl md:text-6xl">
            Dream Big.
            <br /> Achieve Bigger.
          </h1>
          <p className="text-2xl md:text-3xl md:px-0 md:w-5/6">
            Trade with a global broker to achieve your investment goals.
          </p>
          <button className="md:block bg-blue-700 font-bold text-xs md:text-sm text-white rounded-full p-3 md:p-5 md:px-3 w-1/2 md:w-2/4">
            CREATE AN ACCOUNT
          </button>
        </div>
        <div className="flex flex-col md:w-1/2 space-y-12">
          <Image src={Hero} className="hero-img"/>
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
                  key={id}
                  className="bg-white hover:bg-blue-700 p-3 md:p-7 mb-4 rounded-3xl w-5/6 md:w-3/5 shadow-lg"
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
                      <img
                        src={img}
                        alt="sec-two-img"
                        className="sec-two-img"
                      />
                    </div>
                  );
                })
              ) : (
                <div className="md:w-full">
                  <img
                    src={dataTwo[0].img}
                    alt="sec-two-img"
                    className="sec-two-img"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="third-sec bg-violet-100">
        <div className="flex flex-col w-full md:w-1/2 mx-auto">
          <h1 className="font-semibold text-2xl md:text-6xl text-center py-10">
            Invest with the Best Global Broker Asia 2022
          </h1>
        </div>
        <div className="rating-sec grid justify-center grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-1 grid-flow-col md:h-52 gap-1">
          <div className="flex md:flex-col bg-white rounded-3xl relative m-3 md:w-4/5 row-span-2 md:row-span-1">
            <h2 className="text-sm md:text-2xl p-3">
              <span className="font-bold text-xl md:text-2xl">55+</span>
              <br /> Awards
            </h2>
            <div className="w-full flex justify-end">
              <Image
                src={ImageSix}
                className="best-img-one rounded-3xl absolute bottom-0"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-col justify-between bg-white rounded-3xl m-3 md:w-4/5 relative">
            <div className="w-full flex justify-end">
              <Image
                src={ImageSeven}
                className="best-img-two rounded-3xl absolute top-0"
              />
            </div>
            <h2 className="text-sm md:text-2xl p-3 absolute">
              <span className="font-bold text-xl md:text-2xl">150+</span> <br />{" "}
              countries <br /> covered
            </h2>
          </div>
          <div className="flex md:flex-col flex-col-reverse bg-white rounded-3xl m-3 md:w-4/5  relative">
            <div className="w-full flex justify-end">
              <Image
                src={ImageEight}
                className="best-img-three absolute top-0"
              />
            </div>
            <h2 className="text-sm md:text-2xl p-3 absolute">
              <span className="font-bold text-xl md:text-2xl">12M+</span> <br />{" "}
              accounts <br /> opened
            </h2>
          </div>
          <div className="bg-white rounded-3xl m-3 md:w-4/5 row-span-2 md:row-span-1 relative">
            <h2 className="text-sm md:text-2xl p-3">
              <span className="font-bold text-xl md:text-2xl">11</span> <br />{" "}
              years on <br /> the market
            </h2>
            <div className="w-full flex justify-end">
              <Image
                src={ImageNine}
                className="best-img-four rounded-3xl absolute bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
