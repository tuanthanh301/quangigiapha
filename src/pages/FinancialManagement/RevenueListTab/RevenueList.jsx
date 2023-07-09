import { Input, Modal, Space, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadExcel } from "../../../helpers/exportData";
import { formatMoney } from "../../../helpers/formatMoney";
import {
  storeAddRevenue,
  storeDeleteRevenue,
} from "../../../store/database-reducer";
import { ButtonCreate, ButtonExportData } from "../CollectTab/tabThuStyle";

const RevenueList = () => {
  const userInfor = useSelector((state) => state.auth.userInfor);
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
          Thiết lập khoản thu
        </ButtonCreate>
      )}
        <ButtonExportData
        type="primary"
        onClick={() => downloadExcel (data, "Thu")}
      >
        Xuất dữ liệu
      </ButtonExportData>
      {isCreate && (
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
      )}
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default RevenueList;
