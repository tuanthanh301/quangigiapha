import { Input, Modal, Space, Table } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpenseSelect from "../../../components/CustomSelect/ExpenseSelect";
import { formatMoney } from "../../../helpers/formatMoney";
import { storeAddExpense, storeDeleteExpense } from "../../../store/database-reducer";
import { ItemInfor } from "../../ListMember/listMemberStyle";
import { ButtonCreate } from "../CollectTab/tabThuStyle";

const ExpensesList = () => {
  const dispatch = useDispatch();
  const handleDelete = (key) => {
    dispatch(storeDeleteExpense(key));
  };
  const data = useSelector((state) => state.database.dataExpense);
  const dataTypeExpense = useSelector((state) => state.database.dataTypeExpense);

  const [isCreate, setIsCreate] = useState(false);
  const [newExpense, setNewExpense] = useState();
  const handleSaveExpense = () => {
    const inforExpense = 
   {
      expense: findMoneyOfExpense(newExpense?.idOfExpense).expense,
      money: findMoneyOfExpense(newExpense?.idOfExpense)?.money,
      dNt: dayjs().format("YYYY/MM/DD"),
    };
    dispatch(storeAddExpense(inforExpense));
    setNewExpense()
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
      title: "Số tiền (VNĐ)",
      dataIndex: "money",
      key: "money",
      render: (text) => <div>{formatMoney(text)}</div>,

    },
    {
      title: "Thời gian",
      dataIndex: "dNt",
      key: "dNt",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a href="#/" onClick={() => handleDelete(record.id)}>
            Delete{" "}
          </a>
          {/* <a href="#/">Edit</a>  */}
        </Space>
      ),
    },
  ];
  const findMoneyOfExpense= (id) => {
    return dataTypeExpense.find((element) => element.id === id);
  };
  return (
    <div>
      <ButtonCreate type="primary" onClick={() => setIsCreate(true)}>
        Tạo phiếu chi
      </ButtonCreate>
      {isCreate && (
        <Modal
          title="Create Member"
          open={isCreate}
          onOk={handleSaveExpense}
          onCancel={() => setIsCreate(false)}
        >
          <ItemInfor  >
            <div className="form-div">Tên loại chi:</div>
            <ExpenseSelect
              setValue={(e) =>
                setNewExpense({
                  ...newExpense,
                  idOfExpense: e,
                })
              }
            />
            <div className="form-div">Số tiền:</div>
            <Input
              className="input-create"
              value={findMoneyOfExpense(newExpense?.idOfExpense)?.money}
            />
          </ItemInfor>
        </Modal>
      )}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ current: 1, pageSize: 5 }}
      />
    </div>
  );
};

export default ExpensesList;
