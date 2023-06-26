"use client";

import * as React from "react";
import Tabela from "@/components/Tabela";
import { Plus } from "@phosphor-icons/react";

const Principal = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-end w-4/5 max-w-screen-xl mx-auto">
        <button className="p-2 rounded text-slate-100 mb-4 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          <Plus size={24} color="#fff" weight="bold" />
        </button>
      </div>
      <div className="bg-white px-12 py-8 rounded w-4/5 max-w-screen-xl mx-auto drop-shadow-lg overflow-x-auto">
        <div className="table-container">
          <table className="table-auto min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Id
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Descrição
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Quantidade
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Preço
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <Tabela />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Principal;
