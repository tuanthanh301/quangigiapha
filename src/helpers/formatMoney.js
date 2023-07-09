export const formatMoney = (amount) => {
  // Chuyển đổi số tiền thành định dạng có dấu phẩy
  const formattedAmount = Number(amount).toLocaleString("en-US");

  // Trả về số tiền đã được định dạng
  return formattedAmount;
};
