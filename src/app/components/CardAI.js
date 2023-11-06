import { Divider } from "antd";
import React, { useEffect, useState } from "react";

const Icon = () => {
    return <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
}

const CardAI = ({ i_x_categoria, i_x_producto, principal, profile_posible }) => {



    return (
        <>
            <CardAIComponent i_x_categoria={i_x_categoria.join(',')} i_x_producto={i_x_producto.join(',')} profile_posible={profile_posible.join(',')} principal={principal.join(',')} ></CardAIComponent>
        </>
    );
};


const CardAIComponent = ({ i_x_categoria, i_x_producto, principal, profile_posible }) => {

    return (
        <>
            <div class="flex flex-col border rounded-md p-5">
                <h2 class="mb-2 text-md font-semibold text-gray-900 dark:text-white">Intereses por categoría <br /> o tipo de producto:</h2>
                <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li class="flex items-center text-sm">
                        <Icon />
                        {i_x_categoria}
                    </li>
                </ul>
                <h2 class="mb-2 text-md font-semibold text-gray-900 dark:text-white">Intereses por producto</h2>
                <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li class="flex items-center text-sm">
                        <Icon />
                        {i_x_producto}
                    </li>
                </ul>
                <h2 class="mb-2 text-md font-semibold text-gray-900 dark:text-white">Intereses principales</h2>
                <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li class="flex items-center text-sm">
                        <Icon />
                        {principal}
                    </li>
                </ul>
                <h2 class="mb-2 text-md font-semibold text-gray-900 dark:text-white">Posible compras</h2>
                <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li class="flex items-center text-sm">
                        <Icon />
                        {profile_posible}
                    </li>
                </ul>
            </div>
        </>
    );
};
export default CardAI;
