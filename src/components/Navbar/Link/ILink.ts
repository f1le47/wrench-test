import { FunctionComponent, SVGProps } from 'react';
export interface ILink {
  Icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined; }>;
  text: string;
  link: string;
}