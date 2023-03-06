import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props:any) {
  return (
    <div>
      <>
        <div className="flex items-center justify-between p-5">
          <Link href="/" className="text-yellow-400 flex items-center">
            <ArrowUturnLeftIcon className="h-6 w-6 text-yellow-400 mr-2" />
            Go To Website
          </Link>
          <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-yellow-400">
            <h1 className="font-bold text-white">
              🤖🤖🤖Visit my Logger Updates and coding Technologies
            </h1>
            <Link
              href="https://www.google.com"
              className="text-yellow-400 font-bold ml-2"
            >www.Moduloscript.io</Link>
          </div>
        </div>
        {props.renderDefault(props)}
      </>
    </div>
  );
}

export default StudioNavbar;
