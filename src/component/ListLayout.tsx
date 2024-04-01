import React, { PropsWithChildren } from "react";

const ListLayout:React.FC<PropsWithChildren> = ({children}) =>{
    return<>
        <div className="px-4">
            {children}
        </div>
    </>
}
export default ListLayout