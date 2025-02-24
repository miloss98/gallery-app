import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <div className="flex flex-col w-full mt-12 gap-12 items-center h-[70vh] ">
        <h1>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          ullam.{" "}
        </h1>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
    </main>
  );
}
