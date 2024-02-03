const Name = (cell: any) => {
  return cell.value ? cell.value : "";
};

const CreatedBy = (cell: any) => {
  return cell.value ? cell.value : "";
};

const APIKeys = (cell: any) => {
  return cell.value ? <span className="form-control">{cell.value}</span> : "";
};

const Status = (cell: any) => {
  return cell.value ? cell.value : "";
};
const CreatedDate = (cell: any) => {
  return cell.value ? cell.value : "";
};
const ExpiryDate = (cell: any) => {
  return cell.value ? cell.value : "";
};

export { Name, CreatedBy, APIKeys, Status, CreatedDate, ExpiryDate };
