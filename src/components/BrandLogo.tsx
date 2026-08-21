import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  href?: string;
  priority?: boolean;
};

export function BrandLogo({
  className,
  imageClassName = "h-10 w-auto max-w-[200px] object-contain object-left lg:h-12",
  href = "/",
  priority = false,
}: BrandLogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt="VIR Group of Companies and MEYLE"
      width={720}
      height={220}
      className={imageClassName}
      priority={priority}
    />
  );

  if (!href) {
    return <span className={cn("inline-flex items-center", className)}>{image}</span>;
  }

  return (
    <Link
      href={href}
      aria-label="VIR Group of Companies / MEYLE homepage"
      className={cn("inline-flex items-center", className)}
    >
      {image}
    </Link>
  );
}
