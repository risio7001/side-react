import React, { useState } from "react";
import Card from "../component/Card";
import Header from "../component/Header";
import MainLayout from "../component/MainLayout";
import Swiper_1 from "../component/Swiper";
import TextBold from "../component/TextBold";
import { ReactComponent as Arrow } from "../assets/arrow-1.svg";
import Footer from "../component/Footer";
import Banner_Slider from "../component/Banner_Slider";
import ListLayout from "../component/ListLayout";

const Main = () => {

    const [cate, setCate] = useState(["전체", "프로젝트", "스터디"]);

    return <>
        <MainLayout>
            <Banner_Slider />
            <TextBold text={"🔥 인기글"} />
            <Swiper_1 />
            <ListLayout>
                <div className="flex flex-row">
                    {cate.map((el) => (
                        <TextBold text={el} style={{ marginRight: "10px", marginTop: "2em" }} />
                    ))}

                    {/* <TextBold text={"목록"} style={{ marginRight: "10px", marginTop: "2em" }} />
                    <TextBold text={"목록"} style={{ marginRight: "10px", marginTop: "2em" }} />
                    <TextBold text={"목록"} style={{ marginRight: "10px", marginTop: "2em" }} /> */}
                </div>
                <Card />
            </ListLayout>
        </MainLayout>
    </>
}

export default Main