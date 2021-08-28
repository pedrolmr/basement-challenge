import Image from "next/image";

import logo from "../public/logo.svg";
import HD from "../public/hd-4k.svg";

const Nav = () => {
  return (
    <nav className="flex flex-between w-screen py-8 px-7 items-center justify-center">
      <div className="flex flex-1 ">
        <Image alt="Basement" src={logo} />
      </div>

      <div className="flex flex-1  justify-center items-center pl-11">
        <Image alt="Hd-4k" className="self-center items-center justify-center" src={HD} />
      </div>

      <div className="flex flex-1 justify-end">
        {/* <p className="border-2 border-white w-4/12 py-2 px-7 uppercase rounded-full text-lg">{`Cart(0)`}</p> */}
        <div className="btn btn-primary">{`Cart(0)`}</div>
      </div>
    </nav>
  );
};

export default Nav;
