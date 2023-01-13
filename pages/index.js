import Layout from "../components/Layout";
import AppImg from "../public/AppImg.png";
import barcode from "../public/barcode.svg";
import Image from "next/image";
import Hero from "../public/hero.jpeg";
import ImageSix from "../public/imageSix.jpg";
import ImageSeven from "../public/ImageSeven.webp";
import ImageNine from "../public/ImageNine.webp";
import ImageEight from "../public/ImageEight.png";
import investImgOne from "../public/investImgOne.webp";
import investImgTwo from "../public/investImgTwo.webp";
import investImgThree from "../public/investImgThree.webp";
import investImgFour from "../public/investImgFour.webp";
import investImgFive from "../public/investImgFive.webp";
import investImgSix from "../public/investImgSix.webp";
import { useContext } from "react";
import { AppContext } from "../components/Store";
import { dataTwo } from "../Utils/Data";
import Rating from "../components/Rating";

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
          <h1 className="font-bold text-white text-4xl md:text-6xl">
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
          <Image src={Hero} className="hero-img" alt="hero-img" />
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
      <div className="third-sec bg-violet-100 p-0 md:p-16">
        <div className="flex flex-col w-full md:w-1/2 mx-auto">
          <h1 className="font-semibold text-2xl md:text-6xl text-center py-10">
            Invest with the Best Global Broker Asia 2022
          </h1>
        </div>
        <div className="rating-sec grid justify-center grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-1 grid-flow-col md:h-52">
          <div className="flex md:flex-col bg-white rounded-3xl relative m-3 md:w-4/5 row-span-2 md:row-span-1">
            <h2 className="text-sm md:text-2xl p-3">
              <span className="font-bold text-xl md:text-2xl">55+</span>
              <br /> Awards
            </h2>
            <div className="w-full flex justify-end">
              <Image
                src={ImageSix}
                className="best-img-one rounded-3xl absolute bottom-0"
                alt="best-sec-img"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-col justify-between bg-white rounded-3xl m-3 md:w-4/5 relative">
            <div className="w-full flex justify-end">
              <Image
                src={ImageSeven}
                className="best-img-two rounded-3xl absolute top-0"
                alt="best-sec-img"
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
                alt="best-sec-img"
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
                alt="best-sec-img"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl py-4 p-16 md:p-0">
          <Rating />
        </div>
        <div className="flex justify-center my-5 md:my-16">
          <button className="block bg-blue-700 font-bold text-sm md:text-xl text-white rounded-full p-2 px-5 md:p-5 md:px-8">
            JOIN US
          </button>
        </div>
      </div>
      <div className="investing-info-sec p-6 md:p-16">
        <h2 className="font-semibold text-2xl md:text-6xl py-6 md:py-10">
          Make investing work for you
        </h2>
        <p className="text-sm md:text-xl">
          We are constantly improving our product to make <br /> your trading
          experience better.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 grid-flow-col">
          <div className="md:flex md:items-center my-5">
            <Image
              alt="invest-img"
              className="invest-img rounded-3xl  md:m-3"
              src={investImgOne}
            />
            <p className="md:text-xl text-sm">
              1:500 maximum <br /> leverage ratio
            </p>
          </div>
          <div className="md:flex md:items-center my-5">
            <Image
              alt="invest-img"
              className="invest-img rounded-3xl  md:m-3"
              src={investImgTwo}
            />
            <p className="md:text-xl text-sm">
              230 trading <br /> instruments
            </p>
          </div>
          <div className="md:flex md:items-center my-5">
            <Image
              alt="invest-img"
              className="invest-img rounded-3xl  md:m-3"
              src={investImgThree}
            />
            <p className="md:text-xl text-sm">50% bonus</p>
          </div>
          <div className="md:flex md:items-center my-5">
            <Image
              alt="invest-img"
              className="invest-img rounded-3xl  md:m-3"
              src={investImgFour}
            />
            <p className="md:text-xl text-sm">Status program</p>
          </div>
          <div className="md:flex md:items-center my-5">
            <Image
              alt="invest-img"
              className="invest-img rounded-3xl  md:m-3"
              src={investImgFive}
            />
            <p className="md:text-xl text-sm">
              24/7 Customer <br /> Support in your <br /> language
            </p>
          </div>
          <div className="md:flex md:items-center my-5">
            <Image
              alt="invest-img"
              className="invest-img rounded-3xl  md:m-3"
              src={investImgSix}
            />
            <p className="md:text-xl text-sm">
              30 digital currency <br /> pairs for weekend <br /> trading
            </p>
          </div>
        </div>
      </div>
      <div className="app-sec md:p-16">
        <div className="bg-violet-100 flex flex-col-reverse items-center md:flex-row p-7 md:p-10 rounded-3xl">
          <div className="text-center md:px-7 md:text-left md:w-1/2">
            <h2 className="font-semibold text-center md:text-left text-2xl md:text-6xl py-6 md:py-10">
              Trade on the go with the OctaFX Trading App
            </h2>
            <p className="text-xl md:text-2xl py-7">
              Enjoy a smooth trading experience from any device. Download our
              app and keep track of your orders whether you're in the office, on
              vacation, or at home.
            </p>
            <Image src={barcode} className="hidden md:block" alt="barcode"/>
            <div className="flex flex-col items-center">
              <Image
                src="https://octacdn.net/assets/img/main-page-redesign/gp-app.svg?6ad6c02f6b1b50473877f344d16c02aa1a3a1ac2"
                className="block md:hidden p-2"
                width={200}
                height={50}
                alt="app icon"
              />
              <Image
                src="https://octacdn.net/assets/img/main-page-redesign/appstore-app.svg?3bfb036e007e7f6d37bc9e8294fe7469debbe241"
                className="block md:hidden p-2"
                width={200}
                height={50}
                alt="app icon"
              />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full p-2 my-7 text-blue-700 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-headset mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
              </svg>
              <p className="text-left text-xl">Start a Chat</p>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2">
            <Image src={AppImg} className="md:w-3/4 py-7" alt="app img"/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
