function Banner() {
  return (
    <div className="flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="pb-5 text-7xl"> Modulo's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-yellow-400">
            Every Developer
          </span>{" "}
          favourite blog in the Devosphere
        </h2>
      </div>
      <p className="max-w-sm mt-5 text-gray-400 md:mt-2">
        New Technologies & Framework | The Vue js | Next js| The weekly
        debugging & Alogrithms
      </p>
    </div>
  );
}

export default Banner;
