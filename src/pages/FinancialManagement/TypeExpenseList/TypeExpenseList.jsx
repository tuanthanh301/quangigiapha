import { Input, Modal, Space, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadExcel } from "../../../helpers/exportData";
import { formatMoney } from "../../../helpers/formatMoney";
import {
  storeAddTypeExpense,
  storeDeleteTypeExpense,
} from "../../../store/database-reducer";

import { ButtonCreate, ButtonExportData } from "../CollectTab/tabThuStyle";

const TypeExpenseList = () => {
  const userInfor = useSelector((state) => state.auth.userInfor);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.database.dataTypeExpense);
  const [isCreate, setIsCreate] = useState(false);
  const [newTypeExpense, setNewTypeExpense] = useState();
  const handleDelete = (key) => {
    dispatch(storeDeleteTypeExpense(key));
  };

  const handleSaveTypeExpense = (key) => {
    dispatch(storeAddTypeExpense(newTypeExpense));
    setIsCreate(false);
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Loại chi",
      dataIndex: "expense",
      key: "expense",
    },
    {
      title: "Số tiền(VNĐ)",
      dataIndex: "money",
      key: "money",
      render: (text) => <div>{formatMoney(text)}</div>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a href="#/" onClick={() => handleDelete(record.id)}>
            Delete{" "}
          </a>
          {/* <a href="#/">Edit</a> */}
        </Space>
      ),
    },
  ];
  return (
    <div>
      {userInfor.isOwner && (
        <ButtonCreate type="primary" onClick={() => setIsCreate(true)}>
          Thêm mới
        </ButtonCreate>
      )}
       <ButtonExportData
        type="primary"
        onClick={() => downloadExcel(data, "Thu")}
      >
        Xuất dữ liệu
      </ButtonExportData>
      {isCreate && (
        <Modal
          title="Thiết lập loại chi"
          open={isCreate}
          onOk={handleSaveTypeExpense}
          onCancel={() => setIsCreate(false)}
        >
          <div className="form-div">Loại chi: </div>
          <Input
            className="input-create"
            onChange={(event) =>
              setNewTypeExpense({
                ...newTypeExpense,
                expense: event.target.value,
              })
            }
            placeholder="Nhập loại chi"
          />
          <div className="form-div">Số tiền thu:</div>
          <Input
            className="input-create"
            onChange={(event) =>
              setNewTypeExpense({
                ...newTypeExpense,
                money: Number(event.target.value) || 0,
              })
            }
            type="number"
            placeholder="Nhập số tiền"
          />
        </Modal>
      )}
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default TypeExpenseList;
