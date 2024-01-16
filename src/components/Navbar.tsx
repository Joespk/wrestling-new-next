import Link from "next/link";
import Image from "next/image";
import logo from "@/public/jwn-removebg-preview.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-50 z-50 h-20">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between ">
          <Image src={logo} alt="logo" width={150} />
          <ul className="flex flex-row gap-5 items-center px-5">
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/wwe" className="text-white">
                wwe
              </Link>
            </li>
            <li>
              <Link href="/aew" className="text-white">
                aew
              </Link>
            </li>
            <li>
              <Link href="/tna" className="text-white">
                tna
              </Link>
            </li>
            <li>
              <Link href="/aew" className="text-white">
                njpw
              </Link>
            </li>
            <li>
              <Link href="/aew" className="text-white">
                indy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
