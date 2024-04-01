import React from "react";
import Card from "../component/Card";
import Header from "../component/Header";
import MainLayout from "../component/MainLayout";
import Swiper_1 from "../component/Swiper";
import TextBold from "../component/TextBold";
import {ReactComponent as Arrow} from "../assets/arrow-1.svg";

const Main = () => {


    return <>
        <Header/>
        <MainLayout>
            <TextBold text={"🔥 인기글"}/>
            <Swiper_1/>
            <TextBold text={"목록"} style={{marginTop:"2em"}}/>
            <Card />
        </MainLayout>
    </>
}

export default Main