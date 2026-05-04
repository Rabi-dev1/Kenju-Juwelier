'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ClientImage({ src, alt, fill, className, priority, sizes }: Props) {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => setError(true)}
    />
  );
}
