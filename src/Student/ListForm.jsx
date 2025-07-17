import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteStudent,
  getIdStudent,
  showBtn,
} from "./../store/studentReducer";

export default function ListForm() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const dataList = useSelector((state) => state.student.dataList);
  const data = dataList.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Tìm kiếm
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Tìm kiếm Họ tên"
            // required
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-sm">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className=" text-gray-700  bg-gray-100 ">
            <tr>
              <th scope="col" className="px-5 py-3 w-[10%]">
                Mã SV
              </th>
              <th scope="col" className="px-5 py-3 w-[25%]">
                Họ tên
              </th>
              <th scope="col" className="px-5 py-3 w-[25%]">
                Số điện thoại
              </th>
              <th scope="col" className="px-5 py-3 w-[25%]">
                Email
              </th>
              <th scope="col" className="px-5 py-3 w-[15%]"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b border-gray-200 hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 center whitespace-nowrap "
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#infoStudent"
                      className="font-medium text-blue-600 inline-block  hover:underline"
                      onClick={() => {
                        dispatch(getIdStudent(item));
                        dispatch(showBtn(true));
                      }}
                    >
                      Edit
                    </a>
                    <span className="mx-3">/</span>
                    <p
                      className="font-medium text-red-600 inline-block hover:underline"
                      onClick={() => dispatch(deleteStudent(item))}
                    >
                      Delete
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
