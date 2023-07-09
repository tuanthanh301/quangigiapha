import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ItemHeader } from "../../components/layout/Header/headerStyle";
import { storeDeleteUserInfor } from "../../store/auth-reducer";
import { ItemInfor } from "./profileStyle";

const Profile = () => {
  const userInfor = useSelector((state) => state.auth.userInfor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(storeDeleteUserInfor());
    navigate("/login");
  };
  const [selectUserInfor, setSelectUserInfor] = useState(userInfor);
  return (
    <div>
      {selectUserInfor && (
        <ItemInfor>
          <div className="form-div">First Name:</div>
          <Input
            className="input-create"
            onChange={(event) =>
              setSelectUserInfor({
                ...selectUserInfor,
                firstName: event.target.value,
              })
            }
            value={selectUserInfor.firstName}
            placeholder="Enter first name"
          />
          <div className="form-div">Last Name:</div>
          <Input
            className="input-create"
            onChange={(event) =>
              setSelectUserInfor({
                ...selectUserInfor,
                lastName: event.target.value,
              })
            }
            value={selectUserInfor.lastName}
            placeholder="Enter last name"
          />
          <div className="form-div">Email Name:</div>
          <Input
            className="input-create"
            onChange={(event) =>
              setSelectUserInfor({
                ...selectUserInfor,
                email: event.target.value,
              })
            }
            value={selectUserInfor.email}
            placeholder="Enter email"
          />
          <div className="form-div">Password:</div>
          <Input
            className="input-create"
            onChange={(event) =>
              setSelectUserInfor({
                ...selectUserInfor,
                email: event.target.value,
              })
            }
            value={selectUserInfor.password}
            placeholder="Enter password"
            type="password"
          />
        </ItemInfor>
      )}
      <ItemHeader>
        <Button type="primary" danger onClick={handleLogOut}>
          Log Out
        </Button>
      </ItemHeader>
    </div>
  );
};

export default Profile;
