import { StaticImageData } from "next/image";

export interface EfLogoProps {
    // image: HTMLImageElement;
    url: string;
    src: string | StaticImageData | undefined;
    className?: string;
    alt: string
  }
  