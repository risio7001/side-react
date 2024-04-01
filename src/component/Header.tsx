import React from "react";

const Header = () => {

    return<>
        <header className="h-[90px] w-full">
            <div className="h-full flex flex-row justify-between items-center px-0 sm:px-4">
                <div className="font-bold text-[28px]">Left Logo</div>
                <div className="">Right State</div>
            </div>
        </header>
    </>
}

export default Header