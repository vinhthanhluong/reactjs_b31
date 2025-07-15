import { useDispatch, useSelector } from "react-redux";
import { addStudent, editStudent } from "./../store/studentreducer";
import { useState, useEffect } from "react";

import Student from "./student";

export default function InputForm() {
  const dataObj = useSelector((state) => state.student.dataObj);

  const dispatch = useDispatch();
  const [idVal, setIdVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [emailVal, setEmailVal] = useState("");

  const handleAddStudent = () => {
    const studentObj = new Student(idVal, nameVal, phoneVal, emailVal);
    dispatch(addStudent({ ...studentObj }));
  };
  const handleEditStudent = () => {
    const studentObj = new Student(idVal, nameVal, phoneVal, emailVal);
    dispatch(editStudent({ ...studentObj }));
  };

  useEffect(() => {
    if (dataObj) {
      setIdVal(dataObj.id || "");
      setNameVal(dataObj.name || "");
      setPhoneVal(dataObj.phone || "");
      setEmailVal(dataObj.email || "");
    }
  }, [dataObj]);

  return (
    <div className="mb-14" id="infoStudent">
      <h2
        className="p-4 mb-7 text-2xl text-white rounded-sm bg-gray-900 font-bold "
        role="alert"
      >
        Thông tin sinh viên
      </h2>

      <form onSubmit={(e) => e.preventDefault()}>
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
              placeholder="Tìm kiếm"
              // required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Tìm kiếm
            </button>
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="idSV"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mã SV
            </label>
            <input
              type="text"
              id="idSV"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="maSV"
              // required
              onChange={(e) => setIdVal(e.target.value)}
              value={idVal}
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Họ tên
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nguyễn Văn B"
              // required
              onChange={(e) => setNameVal(e.target.value)}
              value={nameVal}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Số điện thoại
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="123-45-678"
              //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              // required
              onChange={(e) => setPhoneVal(e.target.value)}
              value={phoneVal}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="nguyenvanb@gmail.com"
              // required
              onChange={(e) => setEmailVal(e.target.value)}
              value={emailVal}
            />
          </div>
        </div>

        <div className="flex gap-7">
          <button
            onClick={handleAddStudent}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-[28%] px-5 py-2.5 text-center "
          >
            Thêm sinh viên
          </button>
          <button
            onClick={handleEditStudent}
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-[28%] px-5 py-2.5 text-center "
          >
            Sửa sinh viên
          </button>
        </div>
      </form>
    </div>
  );
}
