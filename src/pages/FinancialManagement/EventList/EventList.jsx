import { DatePicker, Input, Modal, Space, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadExcel } from "../../../helpers/exportData";
import {
  storeAddEvent,
  storeDeleteEvent,
} from "../../../store/database-reducer";
import { ItemInfor } from "../../ListMember/listMemberStyle";
import { ButtonCreate, ButtonExportData } from "../CollectTab/tabThuStyle";

const EventList = () => {
  const dispatch = useDispatch();
  const userInfor = useSelector((state) => state.auth.userInfor);
  const data = useSelector((state) => state.database.dataEvent);
  const [isCreate, setIsCreate] = useState(false);
  const [newEvent, setNewEvent] = useState();
  const handleDelete = (key) => {
    dispatch(storeDeleteEvent(key));
  };
  const handleSaveEvent = () => {
    dispatch(storeAddEvent(newEvent));
    setIsCreate(false);
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên sự kiện",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="#/">{text}</a>,
    },
    {
      title: "Địa điểm",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Ngày diễn ra",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Mô tả",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Số người tham gia",
      dataIndex: "nom",
      key: "nom",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
           {userInfor.isOwner && (<a href="#/" onClick={() => handleDelete(record.id)}>
            Delete
          </a>)}
          {/* <a
            href="#/"
            onClick={() => {
              setIsEdit(true);
              setMemberSelect(record);
            }}
          >
            Edit
          </a> */}
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />

      <ButtonCreate type="primary" onClick={() => setIsCreate(true)}>
        Thêm sự kiện
      </ButtonCreate>
      <ButtonExportData type="primary" onClick={() => downloadExcel(data, "Event")}>
        Xuất dữ liệu
      </ButtonExportData>
      {isCreate && (
        <Modal
          title="Tạo phiếu tài trợ"
          open={isCreate}
          onOk={handleSaveEvent}
          onCancel={() => setIsCreate(false)}
        >
          <ItemInfor>
            <div className="form-div">Sự kiện:</div>
            <Input
              className="input-create"
              onChange={(event) =>
                setNewEvent({
                  ...newEvent,
                  name: event.target.value,
                })
              }
              placeholder="VD: Quỹ khuyến học,..."
            />
            <div className="form-div">Địa điểm</div>
            <Input
              className="input-create"
              onChange={(event) =>
                setNewEvent({
                  ...newEvent,
                  location: event.target.value,
                })
              }
              placeholder="Nhập địa điểm"
            />
            <div className="form-div">Ngày diễn ra:</div>
            <DatePicker 
              format="YYYY/MM/DD"
              className="input-create"
              onChange={(date, dateString) =>
                setNewEvent({
                  ...newEvent,
                  date: dateString,
                })
              }
              placeholder="Chọn ngày"
            />
            <div className="form-div">Mô tả</div>
            <Input
              className="input-create"
              onChange={(event) =>
                setNewEvent({
                  ...newEvent,
                  desc: event.target.value,
                })
              }
              placeholder="Nhập mô tả"
            />
            <div className="form-div">Số người tham gia</div>
            <Input
              className="input-create"
              onChange={(event) =>
                setNewEvent({
                  ...newEvent,
                  nom: Number(event.target.value) || 0,
                })
              }
              type="number"
              placeholder="Nhập số người tham gia"
            />
          </ItemInfor>
        </Modal>
      )}
    </div>
  );
};

export default EventList;
