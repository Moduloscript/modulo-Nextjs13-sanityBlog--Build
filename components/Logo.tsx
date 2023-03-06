import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover rounded-full"
        height={50}
        width={50}
        src="https://cdn-icons-png.flaticon.com/128/805/805370.png"
        alt="logo"
      />
      {<>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
