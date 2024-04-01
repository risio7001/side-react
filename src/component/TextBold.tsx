import React, { CSSProperties, SVGProps } from "react";
import Arrow from "../assets/arrow-1.svg";

interface TextProps{
    text:any;
    rest?:any;
    style?:CSSProperties;
    icon?:any
}

const TextBold = ({ text, rest, style, icon}:TextProps) => {
    const Icon = icon;
    return<>
        <div className="flex flex-row justify-between">
        <div className="font-bold text-[1.6em] my-8" style={{...style}}>
            {text}
        </div>
        <div className="">
            {
                Icon ? <Icon/>:null
            }
        </div>
        </div>
    </>

}

export default TextBold