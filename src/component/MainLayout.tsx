import React from "react";

interface MainProps{
    title:string;
    icon?:any;
    rest?:any;
}

const MainLayout:React.FC<React.PropsWithChildren> = ({children}, data:MainProps) => {

    return<>
        <div className="p-8">
            {children}
        </div>
    </>
}

export default MainLayout