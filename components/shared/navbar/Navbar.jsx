import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
/* import GlobalSearch from "../search/GlobalSearch"; */

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 px-6 py-4 shadow-light-300 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/img/logo_loto2.png"
          width={65}
          height={65}
          alt="logo"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Project <span className="text-primary-500">Loto</span>
        </p>
      </Link>

      {/* <GlobalSearch /> */}

      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
      {/* <div className="flex gap-2">
        <ul className="flex gap-2">
          <li>
            <Link href="/pos/ticket">Demo Ticket</Link>
          </li>
          <li>
            <Link href="/pos">Demo Venta</Link>
          </li>
        </ul>
        <UserButton afterSignOutUrl="/" />
      </div> */}
    </nav>
  );
};

export default Navbar;
