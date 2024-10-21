export default function Results() {
  return (
    <>
      <h1 className="m-8 text-center text-4xl font-extrabold text-blue-900 mr-10">
        Grand Entrance Exam Result
      </h1>
      <div className="ml-80 ">
        <div className="items-center text-center border border-r-2 border-b-2 border-l-2 border-t-0 w-3/5 h-96 pt-14 shadow-slate-950 rounded-md ">
          <form action="">
            <label htmlFor="" className="pr-72 text-lg">
              &nbsp; Registration Number*
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Registration Number"
              className="border w-11/12 h-10 p-3 m-2 hover:border-red-600 rounded "
              required
            />
            <br />
            <br />
            <label htmlFor="" className="pr-60 text-lg">
              CNIC or B-Form Number*
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="CNIC or B-Form Number"
              className="border w-11/12 h-10 p-3 m-2 hover:border-red-600 rounded "
              required
            />
            <button className="bg-blue-900 rounded text-white font-extrabold w-full text-center text-sm tracking-widest transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52 h-14 mt-10 uppercase">
              Get Result
            </button>
          </form>
        </div>
      </div>
      <br />
    </>
  );
}
