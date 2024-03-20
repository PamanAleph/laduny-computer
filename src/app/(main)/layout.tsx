import Header from "@/components/ui/Header";
import Image from "next/image";
import Footer from "@/components/ui/Footer";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen">
      <Image
        src="/background.jpg"
        width={100}
        height={100}
        alt="background"
        objectFit="cover"
        className="w-full min-h-[100vh]"
      />
      <div className="absolute inset-0 flex flex-col">
        <Header />
        <div className="flex-1 relative">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
