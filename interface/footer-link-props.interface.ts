import { ReactNode, SVGProps } from "react";
import { EfLogoProps } from "./ef-logo-props.interface";

export interface FooterLinkProps {
        efLogo?: {};
        links?: Array<{
        text: string;
        url: string;
        icon?: any
        }> 
    
}