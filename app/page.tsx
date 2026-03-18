import Image from "next/image";
import Logo from "@/public/logo.png";
import GoogleIcon from "@/public/google-maps.png";
import YandexIcon from "@/public/Yandex_Maps_icon.svg.png";
import WebsiteIcon from "@/public/world-wide-web.png";
import PhoneIcon from "@/public/phone-call.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-7 items-center py-5">
      <div className="w-25 h-25 flex justify-center">
        <Image alt="" src={Logo} width={100} />
      </div>
      <p className="text-2xl font-bold">Tezkor kredit markazi</p>
      <Link
        href={"https://credit-react.vercel.app/"}
        className="w-75 py-4 px-4 border rounded-md border-blue-300 shadow flex gap-2"
      >
        <Image alt="" src={WebsiteIcon} width={25} /> Biz haqimizda
      </Link>

      <Link
        href={"tel:+998783330020"}
        className="w-75 py-4 px-4 border rounded-md border-blue-300 shadow flex gap-2"
      >
        <Image alt="" src={PhoneIcon} width={25} /> Bizga bog`lanish
      </Link>
      <Link
        href={"https://maps.app.goo.gl/8iqw5z2VvD4MU8xZ8"}
        className="w-75 py-4 px-4 border rounded-md border-blue-300 shadow flex gap-2"
      >
        <Image alt="" src={GoogleIcon} width={25} /> Manzilimiz: Google
      </Link>
      <Link
        href={"https://yandex.uz/maps/-/CPFrRKm~"}
        className="w-75 py-4 px-4 border rounded-md border-blue-300 shadow flex gap-2"
      >
        <Image alt="" src={YandexIcon} width={25} /> Manzilimiz: Yandex
      </Link>
    </div>
  );
}
