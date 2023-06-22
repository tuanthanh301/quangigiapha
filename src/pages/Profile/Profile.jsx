import { Input } from 'antd'
import React from 'react'
import { ItemInfor } from './profileStyle'

const Profile = () => {
  return (
    <div>
        <ItemInfor>
          <Input
            // className="input-create"
            // onChange={(event) =>
            //   setNewMemberSelect({
            //     ...newMemberSelect,
            //     name: event.target.value,
            //   })
            // }
            // placeholder="Enter name"
          />
        </ItemInfor>
    </div>
  )
}

export default Profile