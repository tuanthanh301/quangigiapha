import { Input, Modal, Space, Table } from "antd";
import dayjs from "dayjs";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberSelect from "../../../components/CustomSelect/MemberSelect";
import { formatMoney } from "../../../helpers/formatMoney";
import {
  storeAddSponsor,
  storeDeleteSponsor,
} from "../../../store/database-reducer";
import { ItemInfor } from "../../ListMember/listMemberStyle";
import { ButtonCreate } from "../CollectTab/tabThuStyle";

const Sponsor = () => {
  const dispatch = useDispatch();
  const handleDelete = (key) => {
    dispatch(storeDeleteSponsor(key));
  };
  const data = useSelector((state) => state.database.dataSponsor);
  const database = useSelector((state) => state.database.database);
  const [isCreate, setIsCreate] = useState(false);
  const [newSponsor, setNewSponsor] = useState();
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
  const handleSaveSponsor = () => {
    const inforSponsor = {
      sponsorship: newSponsor.sponsorship,
      idOfmember: newSponsor.idOfMember,
      money: newSponsor.money,
      dNt: dayjs().format("YYYY/MM/DD"),
    };
    dispatch(storeAddSponsor(inforSponsor));
    setIsCreate(false);
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên khoản tài trợ",
      dataIndex: "sponsorship",
      key: "sponsorship",
    },
    {
      title: "Nhà tài trợ",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="#/">{text}</a>,
    },
    {
      title: "Số tiền",
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
          {/* <a href="#/">Edit</a> */}
        </Space>
      ),
    },
  ];
  return (
    <div>
      <ButtonCreate type="primary" onClick={() => setIsCreate(true)}>
        Tạo khoản tài trợ
      </ButtonCreate>
      {isCreate && (
        <Modal
          title="Tạo phiếu tài trợ"
          open={isCreate}
          onOk={handleSaveSponsor}
          onCancel={() => setIsCreate(false)}
        >
          <ItemInfor>
            <div className="form-div">Tên quỹ tài trợ:</div>
            <Input
              className="input-create"
              onChange={(event) =>
                setNewSponsor({
                  ...newSponsor,
                  sponsorship: event.target.value,
                })
              }
              placeholder="VD: Quỹ khuyến học,..."
            />
            <div className="form-div">Số tiền thu:</div>
            <Input
              className="input-create"
              onChange={(event) =>
                setNewSponsor({
                  ...newSponsor,
                  money: Number(event.target.value) || 0,
                })
              }
              type="number"
              placeholder="Nhập số tiền"
            />
            <div className="form-div">Nhà tài trợ:</div>
            <MemberSelect
              className="input-create"
              setValue={(e) =>
                setNewSponsor({
                  ...newSponsor,
                  idOfMember: e,
                })
              }
            />
          </ItemInfor>
        </Modal>
      )}
      <Table
        columns={columns}
        dataSource={handleDataTable}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Sponsor;
