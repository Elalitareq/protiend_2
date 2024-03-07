import CodeChecker from "@/components/codeChecker";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="px-4 pt-8  ">
        <i className="text-lg italic">
          We are offering the most comprehensive variety of anabolic/androgenic
          formulations to date.
        </i>
        <div className="w-full h-8  border-b-primary border-b-2"></div>
      </div>

      <div className="px-4 py-8 ">
        <i className="text-lg italic">
          Our product diversity reaches from anabolic/androgenic hormones to
          anti-estrogens over to peptide and proteins indifferent formulations
          such as tablets, capsules, gels, and injections.
        </i>
      </div>
      <div className="py-8 relative">
        <Image
          src="/main.webp"
          alt="steroids"
          width={1000}
          height={1080}
          className="object-contain"
        />
        <div className="inset-0 z-10 w-full absolute flex justify-center items-center p-6 pt-12 mb-4">
          <CodeChecker />
        </div>
      </div>
      <div className="px-4 py-8 bg-primary">
        <div className="flex justify-between items-center ">
          <Image
            src="/products/main_page/8-removebg-preview_edited.webp"
            alt="steroids"
            height={100}
            width={100}
            className="object-contain"
          />
          <Image
            src="/products/main_page/60261a_a9175c43f07e4e6b80c83fbc9d04ec8c~mv2.webp"
            alt="steroids"
            height={100}
            width={100}
            className="object-contain"
          />
          <Image
            src="/products/main_page/60261a_a69a7d5957f54707b0333d0ef4d13582~mv2.webp"
            alt="steroids"
            height={100}
            width={100}
            className="object-contain"
          />
        </div>
        <div className="w-full flex justify-center">
          <Link
            href="/products"
            className=" bg-primary border-solid border hover:bg-white hover:text-primary active:bg-white active:text-primary border-white rounded-sm px-4 py-2 text-white text-xl my-4"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
