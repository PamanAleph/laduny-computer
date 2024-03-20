import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Image
        src="/background.jpg"
        width={1920}
        height={100}
        alt="background"
        objectFit="cover"
        className="max-h-[703px]"
      />
      <div className="absolute inset-0 flex flex-col">
        <Navbar />
        <div className="flex-1 relative">{children}</div>
      </div>
    </div>
  );
}
