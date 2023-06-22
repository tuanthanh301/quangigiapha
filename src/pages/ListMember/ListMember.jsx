import React, { useState } from "react";
import dayjs from "dayjs";
import { DatePicker, Input, Modal, Space, Table, Tag } from "antd";
import { ButtonCreate, ItemInfor } from "./listMemberStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  storeAddMember,
  storeDeleteMember,
  storeEditMember,
} from "../../store/database-reducer";

const ListMember = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="#/">{text}</a>,
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Tag",
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
            href="#/"
            onClick={() => {
              showModal();
              setMemberSelect(record);
            }}
          >
            Details
          </a>
          <a href="#/" onClick={() => handleDelete(record.key)}>
            Delete
          </a>
          <a
            href="#/"
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
  const dispatch = useDispatch();
  const data = useSelector((state) => state.database.database);
  // const setData = (dataNew) => {
  // }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [memberSelect, setMemberSelect] = useState();
  const [newMemberSelect, setNewMemberSelect] = useState();

  const handleDelete = (key) => {
    // const newData = [...data];
    // const index = newData
    //   .map(function (element) {
    //     return element.key;
    //   })
    //   .indexOf(key);

    // newData.splice(index, 1);
    // setData(newData);
    dispatch(storeDeleteMember(key));
    // setData(key);
  };
  const handleEdit = () => {
    // const newEdit = [...data].map(function (element) {
    //   if (element.key === memberSelect.key) {
    //     return memberSelect;
    //   }
    //   return element;
    // });
    // console.log(newEdit);
    dispatch(storeEditMember(memberSelect));
    // setData(newEdit);
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
    // const newCreate = [...data];
    // newCreate.push(newMemberSelect);
    dispatch(storeAddMember(newMemberSelect));
    // setData(newCreate);
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
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                name: event.target.value,
              })
            }
            placeholder="Enter name"
          />
          <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                pids: event.target.value,
              })
            }
            placeholder="Enter PIDS"
          />
          <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                mid: event.target.value,
              })
            }
            placeholder="Enter MID"
          />
          <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                fid: event.target.value,
              })
            }
            placeholder="Enter FID"
          />
          <DatePicker
            format="YYYY/MM/DD"
            className="input-create"
            onChange={(date, dateString) =>
              setNewMemberSelect({
                ...newMemberSelect,
                dob: dateString,
              })
            }
            placeholder="Enter Date of Birth"
          />
          <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                gender: event.target.value,
              })
            }
            placeholder="Enter Gender"
          />
          <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                phone: event.target.value,
              })
            }
            placeholder="Enter Phone Number"
          />
          <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                tags: event.target.value,
              })
            }
            placeholder="Enter Tags"
          />
          <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                job: event.target.value,
              })
            }
            placeholder="Enter Jobs"
          />
          <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                degree: event.target.value,
              })
            }
            placeholder="Enter Degree"
          />
          <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                status: event.target.value,
              })
            }
            placeholder="Enter Status"
          />
          <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                img: event.target.value,
              })
            }
            placeholder="Enter Image"
          />
        </ItemInfor>
      </Modal>
      <Modal title="Details of Member" open={isModalOpen} onOk={handleOk}>
        {memberSelect && (
          <ItemInfor>
            <p>Name: {memberSelect.name}</p>
            <p>Date of birth: {memberSelect.dob}</p>
            <p>PIDS: {memberSelect.pids}</p>
            <p>mid: {memberSelect.mid}</p>
            <p>fid: {memberSelect.fid}</p>
            <p>Gender: {memberSelect.gender}</p>
            <p>Phone number: {memberSelect.phone}</p>
            <p>Tags: {memberSelect.tags}</p>
            <p>Job: {memberSelect.job}</p>
            <p>Degree: {memberSelect.degree}</p>
            <p>Status: {memberSelect.status}</p>
            <p>Image: {memberSelect.img}</p>
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
            <div className="form-div">Full Name</div>
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
            <div className="form-div">PIDS</div>
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  pids: event.target.value,
                })
              }
              className="input"
              value={memberSelect.pids}
              placeholder="Enter pids"
            />
            <div className="form-div">Mid</div>
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  mid: event.target.value,
                })
              }
              className="input"
              value={memberSelect.mid}
              placeholder="Enter mid"
            />
            <div className="form-div">Fid</div>
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  fid: event.target.value,
                })
              }
              className="input"
              value={memberSelect.fid}
              placeholder="Enter fid"
            />
            <div className="form-div">Date of Birth</div>
            <DatePicker
              onChange={(date, dateString) =>
                setMemberSelect({
                  ...memberSelect,
                  dob: dateString,
                })
              }
              className="input"
              allowClear={false}
              value={dayjs(memberSelect.dob)}
              // format="YYYY/MM/DD"
              placeholder="Enter Date of Birth"
            />
            <div className="form-div">Phone Number</div>
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
            <div className="form-div">Tag</div>
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
            <div className="form-div">Job</div>
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
            <div className="form-div">Degree</div>

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
            <div className="form-div">Email</div>

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
            <div className="form-div">Image</div>
            <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  img: event.target.value,
                })
              }
              className="input"
              value={memberSelect.img}
              placeholder="Enter Image"
            />
          </ItemInfor>
        )}
      </Modal>
    </div>
  );
};

export default ListMember;
