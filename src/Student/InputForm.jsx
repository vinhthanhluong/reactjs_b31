import { useDispatch, useSelector } from "react-redux";
import { addStudent, editStudent, showBtn } from "./../store/studentreducer";
import { useState, useEffect } from "react";

import Student from "./student";

export default function InputForm() {
  const dataObj = useSelector((state) => state.student.dataObj);
  const isShowEdit = useSelector((state) => state.student.isEditBtn);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });
  const [validation, setValidation] = useState({
    values: {
      id: "",
      name: "",
      phone: "",
      email: "",
    },
    errors: {
      id: "",
      name: "",
      phone: "",
      email: "",
    },
  });

  const handleValue = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setValidation({
      ...validation,
      values: {
        ...validation.values,
        [name]: value,
      },
    });
  };
  const handleErrors = (e) => {
    const { name, value } = e.target;

    let mess = value.trim() == "" ? `Không được để trống  ${name}` : "";

    if (value) {
      switch (name) {
        case "id":
          // eslint-disable-next-line no-case-declarations
          const regexId = /^[0-9]+$/;
          if (!value.match(regexId)) {
            mess = "Mã SV phải là số";
          }
          break;
        case "name":
          // eslint-disable-next-line no-case-declarations
          const regexName =
            /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;
          if (!value.match(regexName)) {
            mess = "Họ tên phải là chữ";
          }
          break;
        case "phone":
          // eslint-disable-next-line no-case-declarations
          const regexPhone = /^[0-9]+$/;
          if (!value.match(regexPhone)) {
            mess = "Số điện thoại phải là số";
          }
          break;
        case "email":
          // eslint-disable-next-line no-case-declarations
          const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!value.match(regexEmail)) {
            mess = "Email không đúng định dạng";
          }
          break;

        default:
          break;
      }
    }

    setValidation({
      ...validation,
      errors: {
        ...validation.errors,
        [name]: mess,
      },
    });
  };

  const handleAddStudent = () => {
    const { id, name, phone, email } = formData;
    const studentObj = new Student(id, name, phone, email);
    dispatch(addStudent({ ...studentObj }));

    setFormData({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
  };
  const handleEditStudent = () => {
    const { id, name, phone, email } = formData;
    const studentObj = new Student(id, name, phone, email);
    dispatch(editStudent({ ...studentObj }));
    dispatch(showBtn(false));
    setFormData({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  useEffect(() => {
    if (dataObj) {
      setFormData({
        id: dataObj.id || "",
        name: dataObj.name || "",
        phone: dataObj.phone || "",
        email: dataObj.email || "",
      });
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
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="idSV"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mã SV <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="idSV"
              name="id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="maSV"
              onChange={handleValue}
              onBlur={handleErrors}
              value={formData.id}
            />
            {validation.errors.id && (
              <div className="mt-2 text-sm text-red-800">
                {validation.errors.id}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Họ tên <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nguyễn Văn B"
              onChange={handleValue}
              onBlur={handleErrors}
              value={formData.name}
            />
            {validation.errors.name && (
              <div className="mt-2 text-sm text-red-800">
                {validation.errors.name}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Số điện thoại <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="123-45-678"
              onChange={handleValue}
              onBlur={handleErrors}
              value={formData.phone}
            />
            {validation.errors.phone && (
              <div className="mt-2 text-sm text-red-800">
                {validation.errors.phone}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="nguyenvanb@gmail.com"
              onChange={handleValue}
              onBlur={handleErrors}
              value={formData.email}
            />
            {validation.errors.email && (
              <div className="mt-2 text-sm text-red-800">
                {validation.errors.email}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-7">
          {!isShowEdit && (
            <button
              onClick={handleAddStudent}
              type="submit"
              disabled={
                !formData.id ||
                !formData.name ||
                !formData.phone ||
                !formData.email
              }
              className="disabled:bg-gray-500 disabled:cursor-no-drop text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-[28%] px-5 py-2.5 text-center "
            >
              Thêm sinh viên
            </button>
          )}
          {isShowEdit && (
            <button
              onClick={handleEditStudent}
              type="submit"
              className="disabled:bg-gray-500 disabled:cursor-no-drop text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-[28%] px-5 py-2.5 text-center "
            >
              Sửa sinh viên
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
