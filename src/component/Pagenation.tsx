import React from "react";

const Pagenation = (total:number, page:number) => {

    const itesCnt = 9;

    return<>

        <div className="w-full flex flex-row">
            {new Array(total/itesCnt).fill(0).map((el, index)=>(
                    <div className="">{index+1}</div>
                ))}
        </div>

    </>
}

export default Pagenation