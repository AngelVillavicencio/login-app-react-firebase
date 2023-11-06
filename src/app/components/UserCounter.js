import { Divider } from "antd";
import React, { useState } from "react";

const UserCounter = () => {

    const [usersActives, setUserActives] = useState(150);

    return (
        <>
            <Divider orientation="left" >Resumen de hoy</Divider>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl m-auto">

                <div class="flex items-center p-4 bg-white rounded ">
                    <div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                        <svg class="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex-grow flex flex-col ml-4">
                        <span class="text-xl font-bold">
                            {usersActives}
                        </span>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-500">usuarios en las ultimas 24h</span>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};
export default UserCounter;
