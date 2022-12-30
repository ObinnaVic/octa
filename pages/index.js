import Layout from "../components/Layout";
import Image from "next/image";
import Hero from "../public/hero.jpeg";

export default function Home() {

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
          <div className="flex flex-row md:flex-col">
            
          </div>
        </div>
      </div>
    </Layout>
  );
}
