import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface MainProps {
    title: string;
    icon?: any;
    rest?: any;
}

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }, data: MainProps) => {

    return <>
        <Header />
        <div className="p-8">
            {children}
        </div>
        <Footer />
    </>
}

export default MainLayout