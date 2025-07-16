import { useSelector, useDispatch } from "react-redux";
import {
  deleteStudent,
  getIdStudent,
  showBtn,
} from "./../store/studentreducer";

export default function ListForm() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.student.dataList);

  return (
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
                    onClick={() =>
                      // dispatch(getIdStudent({ data: item, isEditBtn: true }))
                      {
                        dispatch(getIdStudent(item));
                        dispatch(showBtn(true));
                      }
                    }
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
  );
}
