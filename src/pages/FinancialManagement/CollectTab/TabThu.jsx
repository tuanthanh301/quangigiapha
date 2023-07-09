import { Input, Modal, Space, Table } from "antd";
import dayjs from "dayjs";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberSelect from "../../../components/CustomSelect/MemberSelect";
import RevenueSelect from "../../../components/CustomSelect/RevenueSelect";
import {
  storeAddCollect,
  storeDeleteCollect,
} from "../../../store/database-reducer";
import { ItemInfor } from "../../ListMember/listMemberStyle";
import { ButtonCreate } from "./tabThuStyle";

const TabThu = () => {
  const dispatch = useDispatch();
  const handleDelete = (key) => {
    dispatch(storeDeleteCollect(key));
  };
  const data = useSelector((state) => state.database.dataCollect);
  const dataRevenue = useSelector((state) => state.database.dataRevenue);
  const database = useSelector((state) => state.database.database);
  const [isCreate, setIsCreate] = useState(false);
  const [newCollect, setNewCollect] = useState();
  const handleSaveCollect = () => {
    const inforCollect = 
   {
      revenue: findMoneyOfRevenue(newCollect?.idOfRevenue).revenue,
      idOfmember: newCollect.idOfMember,
      money: findMoneyOfRevenue(newCollect?.idOfRevenue)?.money,
      dateOfThu: dayjs().format("YYYY/MM/DD")
    };
    dispatch(storeAddCollect(inforCollect));
    setNewCollect()
    setIsCreate(false);
  };
  const handleDataTable = useMemo(() => {
    return data.map((element) => {
      const find = database.find(
        (findElement) => findElement.id === element.idOfmember
      );
      return {
        ...element,
        name: find.name,
      };
    });
  }, [data]);

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
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="#/">{text}</a>,
    },
    {
      title: "Số tiền",
      dataIndex: "money",
      key: "money",
    },
    {
      title: "Ngày thu",
      dataIndex: "dateOfThu",
      key: "dateOfThu",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a href="#/" onClick={() => handleDelete(record.id)}>
            Delete{" "}
          </a>
          <a href="#/">Edit</a>
        </Space>
      ),
    },
  ];
  const findMoneyOfRevenue = (id) => {
    return dataRevenue.find((element) => element.id === id);
  };
  return (
    <div>
      <ButtonCreate type="primary" onClick={() => setIsCreate(true)}>
        Tạo khoản thu
      </ButtonCreate>
      {isCreate &&<Modal
        title="Create Member"
        open={isCreate}
        onOk={handleSaveCollect}
        onCancel={() => setIsCreate(false)}
      >
        <ItemInfor>
          <div className="form-div">Tên khoản thu:</div>
          <RevenueSelect
            setValue={(e) =>
              setNewCollect({
                ...newCollect,
                idOfRevenue: e,
              })
            }
          />
          <div className="form-div">Số tiền:</div>
          <Input
            className="input-create"
            value={findMoneyOfRevenue(newCollect?.idOfRevenue)?.money}
          />
          <div className="form-div">Tên:</div>
          <MemberSelect
            className="input-create"
            setValue={(e) =>
              setNewCollect({
                ...newCollect,
                idOfMember: e,
              })
            }
          />
        </ItemInfor>
      </Modal>}
      <Table
        columns={columns}
        dataSource={handleDataTable}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default TabThu;