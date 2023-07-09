import { Select } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const ExpenseSelect = ({ value, setValue }) => {
  const data = useSelector((state) => state.database.dataTypeExpense);
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
      options={data.map((element) => ({
        value: element.id,
        label: element.expense,
      }))}
    />
  );
};

export default ExpenseSelect;
