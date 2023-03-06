import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/805/805370.png"
            width={50}
            className="rounded-full"
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://twitter.com/Modulo_script"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-yellow-400 flex items-center rounded-full text-center "
        >
          Sign up For More NewsLetters
        </Link>
      </div>
    </header>
  );
}

export default Header;
