import { useState } from "react";

export default function EditorialImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return failed
    ? <div role="img" aria-label={alt} className={`grid place-items-center bg-[#d9ceba] p-6 text-center text-sm text-[#584b38] ${className}`}>{alt}</div>
    : <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}
