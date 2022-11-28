import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: 's' | 'm';
    color?: 'primary' | 'ghost' | 'grey' | 'green' | 'red';
    href?: string;
}