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
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import SelectDegree from "../../components/CustomSelect/SelectDegree";
import { genderToGender, idToDegree } from "../../helpers/image";
import SelectGender from "../../components/CustomSelect/SelectGender";
import MotherSelect from "../../components/CustomSelect/MotherSelect";
import FatherSelect from "../../components/CustomSelect/FatherSelect";

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
      render: (text) => <div style={{color: text === "male" ? "#0984e3" : " #ff7675"}}>{genderToGender(text)}</div>
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
          <a href="#/" onClick={() => handleDelete(record.id)}>
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
    dispatch(storeDeleteMember(key));
  };
  const handleEdit = () => {
    dispatch(storeEditMember(memberSelect));
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
    dispatch(storeAddMember(newMemberSelect));
    setIsCreate(false);
  };

  const findMemberById = (id) => {
    return data.find((element) => element.id === id);
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
          <div className="form-div">Full Name:</div>
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
          <div className="form-div">Husband/Wife:</div>
          <CustomSelect
            setValue={(e) =>
              setNewMemberSelect({
                ...newMemberSelect,
                pids: e,
              })
            }
          />
          <div className="form-div">Mother:</div>
          <MotherSelect
            setValue={(e) =>
              setNewMemberSelect({
                ...newMemberSelect,
                mid: e,
              })
            }
            placeholder="Enter MID"
          />
          <div className="form-div">Father:</div>

          <FatherSelect
            setValue={(e) =>
              setNewMemberSelect({
                ...newMemberSelect,
                fid: e,
              })
            }
            placeholder="Enter MID"
          />
          <div className="form-div">Date of birth:</div>

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
          <div className="form-div">Gender: </div>
          <SelectGender
            setValue={(e) =>
              setNewMemberSelect({
                ...newMemberSelect,
                gender: e,
              })
            }
          />
          {/* <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                gender: event.target.value,
              })
            }
            placeholder="Enter Gender"
          /> */}
          <div className="form-div">Phone Number: </div>

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
          <div className="form-div">Tags</div>

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
          <div className="form-div">Job:</div>

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
          <div className="form-div">Degree: </div>
          <SelectDegree
            setValue={(e) =>
              setNewMemberSelect({
                ...newMemberSelect,
                degree: e,
              })
            }
          />
          {/* <Input
            className="input-create"
            onChange={(event) =>
              setNewMemberSelect({
                ...newMemberSelect,
                degree: event.target.value,
              })
            }
            placeholder="Enter Degree"
          /> */}
          <div className="form-div">Status: </div>

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
          <div className="form-div">Image:</div>

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
            <p>Name of Husband/Wife: {findMemberById(memberSelect?.pids[0])?.name}</p>
            <p>Mother: {memberSelect.mid}</p>
            <p>Father: {memberSelect.fid}</p>
            <p>Gender: {genderToGender(memberSelect.gender)}</p>
            <p>Phone number: {memberSelect.phone}</p>
            <p>Tags: {memberSelect.tags}</p>
            <p>Job: {memberSelect.job}</p>
            <p>Degree: {idToDegree(memberSelect.degree)}</p>
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
            <div className="form-div">Full Name:</div>
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
            <div className="form-div">PIDS:</div>
            <CustomSelect
              value={memberSelect.pids}
              setValue={(e) =>
                setMemberSelect({
                  ...memberSelect,
                  pids: e,
                })
              }
            />
            <div className="form-div">Gender:</div>
            <SelectGender
              value={memberSelect.gender}
              setValue={(e) =>
                setMemberSelect({
                  ...memberSelect,
                  gender: e,
                })
              }
            />
            <div className="form-div">Mother:</div>
            <MotherSelect
              value={memberSelect.mid}
              setValue={(e) =>
                setMemberSelect({
                  ...memberSelect,
                  mid: e,
                })
              }
            />
            <div className="form-div">Father:</div>
            <FatherSelect
              value={memberSelect.fid}
              setValue={(e) =>
                setMemberSelect({
                  ...memberSelect,
                  fid: e,
                })
              }
            />
            <div className="form-div">Date of Birth:</div>
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
            <div className="form-div">Phone Number: </div>
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
            <div className="form-div">Tag: </div>
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
            <div className="form-div">Job: </div>
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
            <div className="form-div">Degree: </div>

            <SelectDegree
              value={memberSelect.degree}
              setValue={(e) =>
                setMemberSelect({
                  ...memberSelect,
                  degree: e,
                })
              }
            />
            {/* <Input
              onChange={(event) =>
                setMemberSelect({
                  ...memberSelect,
                  degree: event.target.value,
                })
              }
              className="input"
              value={memberSelect.degree}
              placeholder="Enter Degree"
            /> */}
            <div className="form-div">Email: </div>

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
            <div className="form-div">Image: </div>
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
