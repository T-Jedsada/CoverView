import React from 'react';


const BasicTheme = ({ config }) => {
    const { title, bgColor, pattern, author, icon, font } = config;

    return (
        <div className="p-4 bg-white border">
            <div className={`cover flex  text-gray-800 items-center ${pattern} `}
                style={{ backgroundColor: bgColor }}
            >


                <div className={`${font} bg-white md:w-10/12  m-auto flex flex-col pt-12 rounded-xl`}>
                    <div className="px-12">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-center">{title}</h1>
                        </div>
                    </div>

                    <div className=" flex mx-4 mt-10 p-4 rounded-xl items-center bg-white">
                        <i className={`devicon-${icon.value}-plain dev-icon text-4xl`}></i>
                        <h2 className="text-xl ml-auto mr-2 font-semibold">{author}</h2>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default BasicTheme;