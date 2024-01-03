import { MouseEventHandler } from "react";
import { Style } from "util";

export interface CustomButtonProps {
   
   
    title: string;
    containerStyles?: string;
    handleClick?:
    
     MouseEventHandler<HTMLButtonElement>;
    
  }