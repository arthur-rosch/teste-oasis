import Image from "next/image";
import Link from "next/link";
import logo from '../assets/logo.svg';

interface LogoProps {
  alt?: string;
  href?: string;
  width?: number;
  height?: number;
}

export function Logo({
  alt = "Logo",
  href = "/",
  width = 150,
  height = 50,
}: LogoProps) {
  return (
    <Link href={href} className="flex items-center">
      <Image src={logo} alt={alt} width={width} height={height} priority />
    </Link>
  );
}
