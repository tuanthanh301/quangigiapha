import { Space, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AccountList = () => {
  const userInfor = useSelector((state) => state.auth.userInfor);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.database.listAccount);

  const handleDelete = (key) => {
    // dispatch(storeDeleteAccount(key));
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên tài khoản ",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Vai trò",
      dataIndex: "isOwner",
      key: "isOwner",
      render: (text) => <a href="#/">{text}</a>,
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {userInfor.isOwner && (
            <a href="#/" onClick={() => handleDelete(record.id)}>Delete</a>
          )}
        </Space>
      ),    
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 7 }} />
    </div>
  );
};

export default AccountList;
