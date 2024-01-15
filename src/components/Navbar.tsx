import Link from "next/link";
import Image from "next/image";
import logo from "@/public/jwn-removebg-preview.png";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Image src={logo} alt="logo" />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
