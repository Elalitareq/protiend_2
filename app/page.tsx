import CodeChecker from "@/components/codeChecker";
import Image from "next/image";

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
        <div className="inset-0 z-10 w-full absolute flex justify-center items-center p-6 pt-12">
          <CodeChecker />
        </div>
        <div className="px-4 py-8 bg-primary">
          
        </div>
      </div>
    </div>
  );
}
