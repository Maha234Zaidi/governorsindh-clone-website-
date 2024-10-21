import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex bg-slate-100">
        <div className="m-20">
          <h1 className="font-extrabold text-2xl">Core Courses</h1>
          <br />
          <p>
            Programming Fundamentals <br />
            Web2 Using NextJS
            <br />
            Earn as you Learn
          </p>
        </div>

        <div className="m-20">
          <h1 className="font-extrabold text-2xl">Advanced Courses</h1>
          <br />
          <p>
            Artificial Intelligence
            <br />
            Web 3 & Metaverse
            <br />
            Cloud-Native Computing
            <br />
            Network Programmability and Automation
            <br />
            Ambient Computing and IoT
            <br />
            Genomics and Bioinformatics
          </p>
        </div>

        <div className="mt-20">
          <h1 className="font-extrabold text-2xl">Social Links</h1>
          <br />
          <div className="flex space-x-3">
            <Link
              href={"https://web.facebook.com/profile.php?id=100091360387065"}
              target="_blank"
            >
              {" "}
              <FaFacebook size={35} color="blue" />
            </Link>
            <Link href={"https://www.linkedin.com/in/maha-zaidi-5726ab270/"}>
              {" "}
              <FaLinkedin size={35} color="#0077b5" />
            </Link>
            <FaTwitter size={35} color="#1DA1F2" />
            <FaInstagram size={35} color="#E1306C" />
            <FaTiktok size={35} color="#000000" />
          </div>
          <p className="mt-3">&copy;2024 Maha_Zaidi. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
