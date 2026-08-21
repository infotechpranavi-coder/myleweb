import { cn } from "@/lib/cn";

export function BorderGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid border border-line/15", className)}>{children}</div>
  );
}
