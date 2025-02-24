import React from 'react';


const ModernTheme = ({ config }) => {

    const { title, bgColor, pattern, author, icon, font } = config;

    return (
        <div className="p-4 bg-white border">
            <div className=" cover  flex  items-center">
                <div className={`  h-full rounded-xl  p-4 text-gray-800 flex  items-center ${pattern} `}
                    style={{ backgroundColor: bgColor }}
                >
                    <div className=" rounded-full p-6 w-32 h-32 bg-white mx-auto items-center justify-center flex">
                        <i className={`devicon-${icon.value}-plain  p-4 dev-icon text-7xl`}></i>
                    </div>

                    <div className="h-full w-2/3">
                        <div className={`${font} bg-white px-12 justify-center text-left rounded-xl h-full p-4 flex flex-col`}>
                            <h1 className="text-3xl md:text-5xl font-bold ">{title}</h1>
                            <h2 className="text-xl mt-10 font-semibold text-left ">{author}</h2>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default ModernTheme;