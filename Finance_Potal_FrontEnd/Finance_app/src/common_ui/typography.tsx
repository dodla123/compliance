import { cn } from "../lib/utils/cn";

export function Heading({ text }: { text: string }) {
  return (
    <h1 className="text-3xl font-bold flex justify-center mb-6">{text}</h1>
  );
}

export function HeadingLight({ text }: { text: string }) {
  return <h1 className="text-2xl font-medium text-[#344054]">{text}</h1>;
}

export function SectionHeader({ text, className}: { text: String, className?:string }) {
  return <div className={`pt-2 pb-2 font-semibold w-full ${className}`}>{text}</div>;
}

export function ErrorMessage({ msg }: { msg: string | null }) {
  return <div>{msg && <p className="error-message">{msg}</p>}</div>;
}

export function IconText({ text }: { text: string }) {
  return <p className="font-sans text-gray-100 text-xs">{text}</p>;
}

export function SemiBold({ text }: { text: string }) {
  return <p className="font-semibold  text-[12px]">{text}</p>;
}
export function ExtraBold({ text }: { text: string }) {
  return <span className="font-semibold text-base">{text}</span>;
}
export function Small({ text }: { text: string }) {
  return <span style={{color:"#666666"}} className="font-normal text-xs">{text}</span>;
}

export function SmallText({ text ,type}: { text: string,type?:string}) {
  const color = type=='primary'?'blue':'gray';
  return <p className={`text-${color}-500 font-sans text-base font-normal`}>{text}</p>;
}

export const LightTextSm = ({ text }:{text:string}) => {
  return (
    <p className="font-sans font-light leading-6 text-gray-500 text-[12px]">
      {text}
    </p>
  );
};

export const LightTextMd = ({ text }:{text:string}) => {
  return (
    <p className="font-sans font-light leading-6 text-gray-500 text-[14px]">
      {text}
    </p>
  );
};
export const RegularTextMd = ({ type, text } :{ text: string,type:string}) => {
  const color = type == "primary" ? "[#7F56D9]" : "black";
  return (
    <p className={`font-normal leading-6 text-${color} opacity-88 text-[14px]`}>
      {text?text:'NA'}
    </p>
  );
};

export const SemiBoldTextLg = ({ type, text }: { text: string,type:string}) => {
  const color = type == "primary" ? "[#7F56D9]" : "[#000000]";
  return <p className={`text-[20px] text-${color} font-medium `}>{text}</p>;
};
export const SemiBoldTextMd = ({ type, text }: { text: string,type:string}) => {
  const color = type == "primary" ? "[#53389E]" : "[#000000]";
  return <p className={`text-[14px] text-${color} font-medium `}>{text}</p>;
};

export const SemiBoldTextSm = ({ type, text }: { text: string,type:string}) => {
  const color = type == "primary" ? "[#7F56D9]" : "[#000000]";
  return <p className={`text-[12px] text-${color} font-medium `}>{text}</p>;
};

export const LighterTextSm = ({ text}: { text: string}) => {
  return (
    <p className="font-sans font-normal text-[12px] text-gray-900 leading-5 text-opacity-25">
      {text}
    </p>
  );
};

export const ErrorText = ({ text}: { text: string,type:string}) => {
  return (
    <p className="font-sans font-normal text-[12px] text-[#FF4D4F] leading-5 ">
      {text}
    </p>
  );
};



export const FormHeaderText =({text}:{text:string}) =>{
  return (
    <p className="font-sans font-bold text-[16px] text-[#000000]">{text}</p>
  );
}

export const SemiBoldTextXLg = ({ type, text }: { text: string,type:string}) => {
  const color = type == "primary" ? "[#7F56D9]" : "[#000000]";
  return <p className={`text-[30px] text-${color} font-medium `}>{text}</p>;
};

export const PrimaryHeaderText =({text}: { text: string,type:string}) =>{
  return (
    <p className="font-sans font-bold text-[16px] text-[#6941C6]">{text}</p>
  );
}

export const RegularPurpleTextMd = ({ text}: { text: string,type:string}) => {
  return (
    <p className="font-sans font-normal text-[14px] text-[#7F56D9] leading-5">
      {text}
    </p>
  );
};

export const SemiBoldPurpleTextMd = ({ text}: { text: string,type:string}) => {
  return (
    <p className="font-sans font-semibold text-[14px] text-[#7F56D9] leading-8">
      {text}
    </p>
  );
};

export const RegularLargeText= ({ text}: { text: string,type:string}) => {
  return (
    <p className="font-sans font-normal text-[28px] text-[#222222]">
      {text}
    </p>
  );
  }
  export const LighterSmallText= ({ text}: { text: string,type:string}) => {
    return (
      <p className="font-sans font-normal text-[12px] text-[#000000] text-opacity-65">
        {text}
      </p>
    );
};



/// New Design Components --------- VVVVVVVVVVVVVVVVVV


const getcolor = (color?: string) =>{
  return color?'['+color+']':'[#344045]';
}



export const RegularLabel= ({ text, color, classNames }: { text: string, color?:string, classNames?:string}) => {
  return (
    <p className={cn(`font-Inter font-normal text-xs leading-[18px] text-${getcolor(color)}`,  classNames)}>
      {text}
    </p>
  );
};

export const MediumLabel= ({ text,color }: { text: string ,color?:string}) => {
  return (
    <p className={`font-Inter font-medium text-xs text-${getcolor(color)}  leading-[18px]`}>
      {text}
    </p>
  );
};


//text-sm 14px
// export const RegularBody= ({ text,color,any, classNames }: { text: string ,color?:string, classNames?:string}) => {
//   return (
//     <p className={cn(`font-Inter font-normal font-weight-500 text-${getcolor(color)}  leading-[20px]`, classNames)} {...any}>
//       {text}
//     </p>
//   );
// };

export const MediumBody= ({ text, color, classNames }: { text: any,color?:string, classNames?:any}) => { 
  return (
    <p className={cn(`font-Inter font-medium text-sm text-${getcolor(color)} leading-[20px]`, classNames)}>
      {text}
    </p>
  );
};

export const SemiboldBody= ({ text,color, classNames }: { text: string ,color?:string, classNames?:string}) => {
  return ( 
    <p className={`font-Inter font-semibold text-sm text-${getcolor(color)} leading-[20px] ${classNames}`}>
      {text}
    </p>
  );
};

export const BoldBody= ({ text, color, classNames }: { text: string, color:string, classNames?:string}) => {
  return (
    <p className={cn(`font-Inter font-bold text-sm text-${getcolor(color)} leading-[20px]`, classNames)}>
      {text}
    </p>
  );
};


export const BoldBody4XLText= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-bold text-4xl text-${getcolor(color)} leading-[20px]`}>
      {text}
    </p>
  );
};

export const RegularLarge= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-normal text-base text-${getcolor(color)} leading-[24px]`}>
      {text}
    </p>
  );
};

export const RegularLarge2= ({ text, color, classNames }: { text: string, color:string, classNames?:string}) => {
  return (
    <p className={cn(`font-Inter font-semibold text-lg text-${getcolor(color)} leading-[28px]`, classNames)}>
      {text}
    </p>
  );
};


export const MediumLarge= ({ text,color }: { text: string ,color?:string}) => {
  return (
    <p className={`font-Inter font-medium text-xl text-${getcolor(color)} leading-[24px]`}>
      {text}
    </p>
  );
};

export const MediumBase = ({ text,color }: { text: string ,color?:string}) => {
  return (
    <p className={`font-Inter font-medium text-base text-${getcolor(color)} leading-[24px]`}>
      {text}
    </p>
  );
}

export const SemiboldLarge= ({ text,color }: { text: string ,color?:string}) => {
  return (
    <p className={`font-Inter font-semibold text-base text-${getcolor(color)} leading-[24px]`}>
      {text}
    </p>
  );
};


export const RegularHeader5= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-normal text-lg text-${getcolor(color)} leading-[28px]`}>
      {text}
    </p>
  );
};

export const MediumHeader5= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-medium text-lg text-${getcolor(color)} leading-[28px]`}>
      {text}
    </p>
  );
};

export const SemiboldHeader5= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-semibold text-lg text-${getcolor(color)} leading-[28px]`}>
      {text}
    </p>
  );
};

export const RegularHeader4= ({ text,color }: { text: string ,color?:string}) => {
  return (
    <p className={`font-Inter font-normal text-xl text-${getcolor(color)} leading-[30px]`}>
      {text}
    </p>
  );
};

export const MediumHeader4= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-medium text-xl text-${getcolor(color)} leading-[30px]`}>
      {text}
    </p>
  );
};

export const SemiboldHeader4= ({ text,color }: { text: string ,color?:string}) => {
  return (
    <p className={`font-Inter font-semibold text-xl text-${getcolor(color)} leading-[30px]`}>
      {text}
    </p>
  );
};


export const RegularHeader3= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-normal text-2xl text-${getcolor(color)} leading-[32px]`}>
      {text}
    </p>
  );
};

export const MediumHeader3= ({ text,color }: { text: string ,color?:string}) => {
  return (
    <p className={`font-Inter font-medium text-2xl text-${getcolor(color)} leading-[32px]`}>
      {text}
    </p>
  );
};

export const SemiboldHeader3= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-semibold text-2xl text-${getcolor(color)} leading-[32px]`}>
      {text}
    </p>
  );
};

export const RegularHeader2= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-normal text-3xl text-${getcolor(color)} leading-[38px]`}>
      {text}
    </p>
  );
};

export const MediumHeader2= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-medium text-3xl text-${getcolor(color)} leading-[38px]`}>
      {text}
    </p>
  );
};

export const SemiboldHeader2= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-semibold text-3xl text-${getcolor(color)} leading-[38px]`}>
      {text}
    </p>
  );
};

export const RegularHeader1= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-normal text-4xl text-${getcolor(color)} leading-[44px]`}>
      {text}
    </p>
  );
};

export const MediumHeader1= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-medium text-4xl text-${getcolor(color)} leading-[44px]`}>
      {text}
    </p>
  );
};

export const SemiboldHeader1= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-semibold text-4xl text-${getcolor(color)} leading-[44px]`}>
      {text}
    </p>
  );
};


export const RegularDisplaylg= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-normal text-5xl text-${getcolor(color)} leading-[60px]`}>
      {text}
    </p>
  );
};

export const MediumDisplaylg= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-medium text-5xl text-${getcolor(color)} leading-[60px]`}>
      {text}
    </p>
  );
};

export const SemiboldDisplaylg= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-semibold text-5xl text-${getcolor(color)} leading-[60px]`}>
      {text}
    </p>
  );
};

export const BoldDisplaylg= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-bold text-5xl text-${getcolor(color)} leading-[60px]`}>
      {text}
    </p>
  );
};



export const RegularDisplayxl= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-normal text-6xl text-${getcolor(color)} leading-[72px]`}>
      {text}
    </p>
  );
};

export const MediumDisplayxl= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-medium text-6xl text-${getcolor(color)} leading-[72px]`}>
      {text}
    </p>
  );
};

export const SemiboldDisplayxl= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-semibold text-6xl text-${getcolor(color)} leading-[72px]`}>
      {text}
    </p>
  );
};

export const BoldDisplayxl= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-bold text-6xl text-${getcolor(color)} leading-[72px]`}>
      {text}
    </p>
  );
};

export const RegularDisplay2xl= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-normal text-7xl text-${getcolor(color)} leading-[90px]`}>
      {text}
    </p>
  );
};

export const MediumDisplay2xl= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-medium text-7xl text-${getcolor(color)} leading-[90px]`}>
      {text}
    </p>
  );
};

export const SemiboldDisplay2xl= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-semibold text-7xl text-${getcolor(color)} leading-[90px]`}>
      {text}
    </p>
  );
};

export const BoldDisplay2xl= ( { text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-bold text-7xl text-${getcolor(color)} leading-[90px]`}>
      {text}
    </p>
  );
};
export const LightTextCheckbox = ({ text }:{text:string}) => {
  return (
    <p className="font-sans font-light leading-6 text-gray-500 text-[16px]">
      {text}
    </p>
  );
};
export const LightTextCheckboxLabel = ({ text }:{text:string}) => {
  return (
    <p className="font-sans font-light leading-6 text-gray-800 text-[14px]">
      {text}
    </p>
  );
};
export const SemiBoldHeading = ({ text }:{text:string}) => {
  return (
    <p className="font-Inter font-bold leading-6 text-[#222222] text-[16px]">
      {text}
    </p>
  );
};
export const RegularInterBody= ({ text,color }: { text: string ,color?:string}) => {
  return (
    <p className={`font-Inter font-normal text-sm text-${getcolor(color)}  leading-[16px]`}>
      {text}
    </p>
  );
};
export const RegularLargeHeader= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-normal text-base text-${getcolor(color)} leading-[22px]`}>
      {text}
    </p>
  );
};
export const BoldBodyInter= ({ text,color }: { text: string ,color:string}) => {
  return (
    <p className={`font-Inter font-bold text-sm text-${getcolor(color)} leading-[22px]`}>
      {text}
    </p>
  );
};