import { Select } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { dataDegree } from "../../store/database-reducer/dataDegree";

const SelectDegree = ({ value, setValue }) => {
  return (
    <Select
      showSearch
      style={{
        width: 400,
      }}
      value={value}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) =>
        (option?.label.toLocaleLowerCase() ?? "").includes(
          input.toLocaleLowerCase()
        )
      }
      onSelect={(e) => setValue(e)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={dataDegree.map((element) => ({
        value: element.id,
        label: element.degree,
      }))}
    />
  );
};

export default SelectDegree;
