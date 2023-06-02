import React, { useState } from "react";
import dayjs from 'dayjs';
import { Button, DatePicker, Input, Modal, Space, Table, Tag } from "antd";
import { ButtonCreate, ItemInfor } from "./listMemberStyle";
import { useNavigate } from "react-router-dom";

const ListMember = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
      key: "dob",
    },
    {
        title:"Gender",
        dataIndex:"gen",
        key:"gen",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <Tag color={"geekblue"}>{tags.toUpperCase()}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              showModal();
              setMemberSelect(record);
            }}
          >
            Details
          </a>
          <a onClick={() => handleDelete(record.key)}>Delete</a>
          <a
            onClick={() => {
              setIsEdit(true);
              setMemberSelect(record);
            }}
          >
            Edit
          </a>
        </Space>
      ),
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [memberSelect, setMemberSelect] = useState();
  const [newMemberSelect, setNewMemberSelect] = useState();
  const [data, setData] = useState([
    {
      key: "1",
      name: "Nguyễn Văn A",
      dob: "1940/01/30",
      gen:"Nam",
      phone: "0969290646",
      tags: "Ông tổ",
      job: "Giáo viên",
      how: "Nguyễn Thị B",
      degree: "Tốt nghiệp đại học",
      status: "Bình thường",
    },
    {
      key: "2",
      name: "Nguyễn Văn C",
      dob: "1965/01/30",
      gen: "Nam",
      phone: "0969290646",
      tags: "Trưởng họ",
      job: "Bác Sĩ",
      how: "Nguyễn Thị D",
      degree: "Tốt nghiệp đại học",
      status: "Bình thường",
    },
    {
      key: "3",
      name: "Nguyễn Văn E",
      dob: "1967/01/30",
      gen: "Nam",
      phone: "0969290646",
      tags: "Phó họ",
      job: "Giáo viên",
      how: "Văn A",
      degree: "Tốt nghiệp đại học",
      status: "Bình thường",
    },
    {
      key: "4",
      name: "Nguyễn Văn F",
      dob: "1969/01/30",
      gen: "Nữ",
      phone: "0969290646",
      tags: "Thành viên",
      job: "Giáo viên",
      how: "Nguyễn Văn E",
      degree: "Tốt nghiệp đại học",
      status: "Bình thường",
    },
  ]);
  const dateFormat = 'YYYY/MM/DD';
  const handleDelete = (key) => {
    const newData = [...data];
    const index = newData
      .map(function (element) {
        return element.key;
      })
      .indexOf(key);

    newData.splice(index, 1);
    setData(newData);
  };
  const handleEdit = () => {
    const newEdit = [...data].map(function (element) {
      if (element.key === memberSelect.key) {
        return memberSelect;
      }
      return element;
    });
    console.log(newEdit);
    setData(newEdit);
    setIsEdit(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const onCancelEdit = () => {
    setIsEdit(false);
  };
  const handleCreate = () => {
    setIsCreate(true);
  };
  const handleSavedNewMembers = () => {
    const newCreate = [...data];
    newCreate.push(newMemberSelect);
    setData(newCreate);
    setIsCreate(false);
  };
  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <ButtonCreate type="primary" onClick={handleCreate}>
        Create Member{" "}
      </ButtonCreate>
      <Modal
        title="Create Member"
        open={isCreate}
        onOk={handleSavedNewMembers}
        onCancel={() => setIsCreate(false)}
      >
        <ItemInfor>
          <Input

            className="input"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                name: event.target.value,
              })
            }
            placeholder="Enter name"
          />
          <DatePicker
              format="YYYY/MM/DD"
            className="input"
            onChange={(date, dateString) =>
              setNewMemberSelect({
                ...newMemberSelect,
                dob: dateString,
              })
            }
            placeholder="Enter Date of Birth"
          />
          <Input
            className="input"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                gen: event.target.value,
              })
            }
            placeholder="Enter Gender"
          />
          <Input
            className="input"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                phone: event.target.value,
              })
            }
            placeholder="Enter Phone Number"
          />
          <Input
            className="input"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                tags: event.target.value,
              })
            }
            placeholder="Enter Tags"
          />
          <Input
            className="input"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                job: event.target.value,
              })
            }
            placeholder="Enter Jobs"
          />
          <Input
            className="input"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                how: event.target.value,
              })
            }
            placeholder="Enter Name of Husband/Wife"
          />
          <Input
            className="input"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                degree: event.target.value,
              })
            }
            placeholder="Enter Degree"
          />
          <Input
            className="input"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                status: event.target.value,
              })
            }
            placeholder="Enter Status"
          />
        </ItemInfor>
      </Modal>
      <Modal title="Details of Member" open={isModalOpen} onOk={handleOk}>
        {memberSelect && (
          <ItemInfor>
            <p>Name: {memberSelect.name}</p>
            <p>Date of birth: {memberSelect.dob}</p>
            <p>Gender: {memberSelect.gen}</p>
            <p>Phone number: {memberSelect.phone}</p>
            <p>Tags: {memberSelect.tags}</p>
            <p>Jobs: {memberSelect.job}</p>
            <p>Name of Husband/Wife: {memberSelect.how}</p>
            <p>Degree: {memberSelect.degree}</p>
            <p>Status: {memberSelect.status}</p>
          </ItemInfor>
        )}
      </Modal>
      <Modal
        title="Edit Information of Member"
        open={isEdit}
        onOk={handleEdit}
        onCancel={onCancelEdit}
      >
        {memberSelect && (
          <ItemInfor>
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  name: event.target.value,
                })
              }
              className="input"
              value={memberSelect.name}
              placeholder="Enter name"
            />
            <DatePicker
               onChange={(date, dateString) =>
                setMemberSelect({
                  ...memberSelect,
                  dob: dateString,
                })
              }
              className="input"
              value={dayjs(memberSelect.dob)}
              format="YYYY/MM/DD"
              placeholder="Enter Date of Birth"
            />
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  phone: event.target.value,
                })
              }
              className="input"
              value={memberSelect.phone}
              placeholder="Enter Phone Number"
            />
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  tags: event.target.value,
                })
              }
              className="input"
              value={memberSelect.tags}
              placeholder="Enter Tags"
            />
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  job: event.target.value,
                })
              }
              className="input"
              value={memberSelect.job}
              placeholder="Enter Jobs"
            />
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  how: event.target.value,
                })
              }
              className="input"
              value={memberSelect.how}
              placeholder="Enter Name of Husband/Wife"
            />
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  degree: event.target.value,
                })
              }
              className="input"
              value={memberSelect.degree}
              placeholder="Enter Degree"
            />
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  status: event.target.value,
                })
              }
              className="input"
              value={memberSelect.status}
              placeholder="Enter Status"
            />
          </ItemInfor>
        )}
      </Modal>
    </div>
  );
};

export default ListMember;
