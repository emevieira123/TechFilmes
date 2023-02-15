import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import styled from "styled-components";

interface TableListProps {
  columns?: ColumnsType<object> | undefined;
  dataSource?: readonly object[] | undefined
}

export function TableList({ columns, dataSource }: TableListProps) {
  return <TableListStyle columns={columns} dataSource={dataSource} />;
}

export const TableListStyle = styled(Table)`
  padding: 1rem;
  .ant-table-thead > tr > th,
  .ant-table {
    background: ${props => props.theme.gray800};
    color: ${props => props.theme.white};
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: ${props => props.theme.gray700};
    color: ${props => props.theme.white};
  }
`;
