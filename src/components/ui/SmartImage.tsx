import Image from "next/image";
import { cn } from "@/lib/cn";

type SmartImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
};

export function SmartImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  loading,
  fetchPriority,
  sizes,
}: SmartImageProps) {
  const resolvedLoading = loading ?? (priority ? "eager" : undefined);
  const resolvedFetchPriority =
    fetchPriority ?? (priority ? "high" : undefined);

  if (src.endsWith(".svg")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={resolvedLoading}
        fetchPriority={resolvedFetchPriority}
        className={cn(fill ? "absolute inset-0 h-full w-full" : "", className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      loading={resolvedLoading}
      fetchPriority={resolvedFetchPriority}
      sizes={sizes}
    />
  );
}
