import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="m-16 ">
          <h1 className="font-extrabold text-blue-900 text-7xl">
            Governor Sindh
          </h1>
          <h2 className="font-semibold text-blue-900 text-5xl">
            Kamran Khan Tessori
          </h2>
          <h1 className="font-bold text-blue-400 text-justify text-4xl leading-tight mt-4">
            Certified Cloud <br /> Applied Generative AI <br /> Engineer
            (GenEng)
          </h1>
          <p className="text-blue-900 font-bold text-xl pt-4">
            Earn up to $5,000 / month
          </p>
          <p className="text-blue-900 font-bold text-2xl pt-3">
            Now admissions are open in <br />
            Hyderabad
          </p>
          <button className="bg-blue-900 rounded-lg text-white font-extrabold w-full text-center text-sm tracking-widest transition-all hover:translate-y-1 hover:bg-blue-400 sm:py-4 sm:text-base md:w-52 h-14">
            APPLY NOW
          </button>

          <button className="text-blue-900 font-extrabold  text-2xl leading-3 m-9">
            562,143 <br />
            <span className="text-sm font-normal">Accepted Applications </span>
          </button>
        </div>

        <Image
          src={"/image.1.png"}
          alt="cover"
          width={600}
          height={500}
          className="mt-12 "
        ></Image>
      </div>

      <div className="mt-12">
        <h1 className="text-blue-900 font-extrabold text-center text-3xl">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>

        <p className="text-center text-2xl mt-10 tracking-normal text-gray-700 ">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </div>

      <div className="m-14 flex space-x-16">
        <Image
          src={"/image2.jpg"}
          alt="pic"
          width={300}
          height={100}
          className="rounded-3xl bg-yellow-700 shadow-2xl"
        ></Image>
        <Image
          src={"/image3.jpg"}
          alt="pic"
          width={300}
          height={100}
          className="rounded-3xl bg-yellow-700 shadow-2xl"
        ></Image>
        <Image
          src={"/image4.jpg"}
          alt="pic"
          width={300}
          height={100}
          className="rounded-3xl bg-yellow-700 shadow-2xl"
        ></Image>
      </div>

      <div className="flex space-x-3 m-16">
        <Image
          src={"/image5.jpg"}
          alt="pic"
          width={500}
          height={100}
          className="rounded-3xl bg-yellow-700 shadow-2xl"
        ></Image>
        <Image
          src={"/image6.jpg"}
          alt="pic"
          width={500}
          height={100}
          className="rounded-3xl bg-yellow-700 shadow-2xl"
        ></Image>
      </div>
      <hr />
      <div>
        <h1 className="text-blue-900 font-bold m-16 text-4xl">
          Core Courses Sequence
        </h1>
        <div className="flex space-x-8">
          <div
            className="border-black rounded-2xl shadow-2xl w-60 h-52 ml-16
        hover:translate-y-1 "
          >
            <Image src={"/pro1.jpg"} alt="pic" width={300} height={100}></Image>
            <p className="text-center font-bold">
              Programming <br />
              Fundamentals
            </p>
          </div>

          <div
            className="border-black rounded-2xl shadow-2xl w-60 h-52 ml-16
        hover:translate-y-1 "
          >
            <Image src={"/pro2.jpg"} alt="pic" width={300} height={100}></Image>
            <p className="text-center font-bold">
              Programming <br />
              Fundamentals
            </p>
          </div>

          <div
            className="border-black rounded-2xl shadow-2xl w-60 h-52 ml-16
        hover:translate-y-1 "
          >
            <Image src={"/pro3.jpg"} alt="pic" width={300} height={100}></Image>
            <p className="text-center font-bold">
              Programming <br />
              Fundamentals
            </p>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <h1 className="text-blue-900 font-bold m-16 text-4xl">
          Advanced Courses{" "}
        </h1>
        <div className="flex space-x-5">
          <div
            className="border-black rounded-2xl shadow-2xl w-60 h-52 ml-16
        hover:translate-y-1 "
          >
            <Image src={"/ai.jpg"} alt="pic" width={300} height={100}></Image>
            <p className="text-center font-bold p-2">Artificial Intelligence</p>
          </div>

          <div
            className="border-black rounded-2xl shadow-2xl w-60 h-52 ml-16
        hover:translate-y-1 "
          >
            <Image src={"/w3.jpg"} alt="pic" width={300} height={100}></Image>
            <p className="text-center font-bold p-2">Web 3 & Metaverse</p>
          </div>

          <div
            className="border-black rounded-2xl shadow-2xl w-60 h-52 ml-16
        hover:translate-y-1 "
          >
            <Image src={"/cnc.jpg"} alt="pic" width={300} height={100}></Image>
            <p className="text-center font-bold p-2">Cloud-Native Computing</p>
          </div>

          <div
            className="border-black rounded-2xl shadow-2xl w-60 h-52 ml-16
        hover:translate-y-1 "
          >
            <Image src={"/np.jpg"} alt="pic" width={300} height={100}></Image>
            <p className="text-center font-bold p-2">Network Programmability</p>
          </div>
        </div>
        <div className="flex space-x-5 mt-5">
          <div
            className="border-black rounded-2xl shadow-2xl w-60 h-52 ml-16
        hover:translate-y-1 "
          >
            <Image src={"/aci.jpg"} alt="pic" width={300} height={100}></Image>
            <p className="text-center font-bold p-2">
              Ambient Computing and IoT
            </p>
          </div>

          <div
            className="border-black rounded-2xl shadow-2xl w-60 h-52 ml-16
        hover:translate-y-1 "
          >
            <Image src={"/gndb.jpg"} alt="pic" width={300} height={100}></Image>
            <p className="text-center font-bold p-2">
              Genomics and Bioinformatics
            </p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
