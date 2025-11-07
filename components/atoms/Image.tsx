"use client";

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
};
export default function Image({ src, alt, fill, priority, className }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      className={className}
    />
  );
}
