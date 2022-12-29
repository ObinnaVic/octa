import Layout from "../components/Layout";
// import Image from "next/image";
import Hero from "../public/hero.jpeg";

export default function Home() {

  return (
    <Layout title={"Home-Octa"}>
      <div className="flex flex-col md:flex-row items-center px-20 md:pl-20">
        <div className="flex flex-col md:w-1/2 space-y-12">
          <h1 className="max-w-md font-bold text-center md:text-left text-4xl md:text-5xl">
            Dream Big.
            <br /> Achieve Bigger
          </h1>
        </div>
        <div className="flex flex-col md:w-1/2 space-y-12">
          <img src={Hero}/>
        </div>
      </div>
    </Layout>
  );
}
