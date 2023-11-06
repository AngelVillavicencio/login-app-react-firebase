import { Divider } from "antd";
import React, { useState } from "react";

const TableComponent = ({ title, columnas = [], rows = [] }) => {



    return (
        <>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl mb-0 pb-0">

                    <Divider orientation="left">{title}</Divider>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {
                                        columnas.map((col) => {

                                            return (
                                                <th scope="col" className="px-6 py-3">
                                                    {col}
                                                </th>
                                            )
                                        })
                                    }

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rows.map((row) => {

                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {row.title}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {row.subtitle}
                                                </td>
                                                {
                                                    row.url ? <td className="px-6 py-4">
                                                        <a target="_blank" href={row.url}>
                                                            Ver producto
                                                        </a>
                                                    </td> : <></>
                                                }

                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
            </section>

        </>
    );
};
export default TableComponent;
