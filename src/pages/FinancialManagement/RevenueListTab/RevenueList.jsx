import { Input, Modal, Space, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  storeAddRevenue,
  storeDeleteRevenue,
} from "../../../store/database-reducer";
import { ButtonCreate } from "../CollectTab/tabThuStyle";

const RevenueList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.database.dataRevenue);
  const [isCreate, setIsCreate] = useState(false);
  const [newRevenue, setNewRevenue] = useState();
  const handleDelete = (key) => {
    dispatch(storeDeleteRevenue(key));
  };

  const handleSaveRevenue = (key) => {
    dispatch(storeAddRevenue(newRevenue));
    setIsCreate(false);
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên khoản thu",
      dataIndex: "revenue",
      key: "revenue",
    },
    {
      title: "Số tiền",
      dataIndex: "money",
      key: "money",
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
      <ButtonCreate type="primary" onClick={() => setIsCreate(true)}>
        Thiết lập khoản thu
      </ButtonCreate>
      <Modal
        title="Thiết lập khoản thu"
        open={isCreate}
        onOk={handleSaveRevenue}
        onCancel={() => setIsCreate(false)}
      >
        <div className="form-div">Tên khoản thu:</div>
        <Input
          className="input-create"
          onChange={(event) =>
            setNewRevenue({
              ...newRevenue,
              revenue: event.target.value,
            })
          }
          placeholder="Nhập tên khoản thu"
        />
        <div className="form-div">Số tiền thu:</div>
        <Input
          className="input-create"
          onChange={(event) =>
            setNewRevenue({
              ...newRevenue,
              money: Number(event.target.value) || 0,
            })
          }
          type="number"
          placeholder="Nhập số tiền"
        />
      </Modal>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default RevenueList;
