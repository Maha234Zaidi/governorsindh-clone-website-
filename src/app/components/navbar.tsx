import Link from "next/link";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="space-x-4 bg-blue-900 p-7 shadow-2xl h-20 flex sticky top-0">
        <span>
          <Image src={"/logo.png"} alt="logo" width={80} height={50}></Image>
        </span>

        <span className="text-white hover:text-blue-200  font-serif pr-48 pt-2">
          Tuition Free Education Program on Latest Technologies
        </span>
        <Link
          href="/"
          className="text-white hover:text-blue-200 font-bold text-xl  pb-2 "
        >
          Home
        </Link>
        <Link
          href="/apply"
          className="text-white hover:text-blue-200 font-bold text-xl pb-2 "
        >
          Apply
        </Link>

        <Link
          href="/jobs"
          className="text-white hover:text-blue-200 font-bold text-xl pb-2"
        >
          Jobs
        </Link>

        <Link
          href="/results"
          className="text-white hover:text-blue-200 font-bold text-xl pb-2"
        >
          Result
        </Link>

        <Link
          href="/courses"
          className="text-white hover:text-blue-200  font-bold text-xl pb-2 "
        >
          <span className="flex">
            Courses{" "}
            <FaAngleDown size={15} color="white" className="mt-2 pl-2 " />
          </span>
        </Link>
      </div>
    </>
  );
}
