import React, { CSSProperties } from "react";
import { useRecoilState } from "recoil";
import { items } from "../dummy/itemsData";
import { textState } from "../recoil";
import ListLayout from "./ListLayout";
import TextBold from "./TextBold";

const Card = () => {
    const dummy = items;

    const [test, setTest] = useRecoilState(textState);

    const CardItem = ({ data }: any) => {
        return <>
            <div className="flex flex-row justify-center">
                <div className="border-2 border-slate-400 rounded-3xl w-full min-w-[300px] min-h-[340px] p-4">
                    {/* item title */}
                    <TextBold text={data} style={{ fontSize: "1.3em" }} />
                </div>
            </div>
        </>
    }

    return <>
        <ListLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {dummy.map((el: any, index: number) => (
                    <CardItem key={index} data={index} />
                ))}
            </div>
        </ListLayout>
    </>

}

export default Card;