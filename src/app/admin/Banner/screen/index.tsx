import { DeleteAndEditButtons } from "../../../../shared/components/Buttons/DeleteAndEditButtons";
import { bannerMock } from "../../../HomePage/__mocks__/bannerMock";
import { colunas } from "../utils/colunas";
import { TableList } from "../../../../shared/components/Table/TableList";
import { HeaderList } from "../../../../shared/components/Header/HeaderList";

const columns = [
  ...colunas,
  {
    title: 'Ações',
    dataIndex: 'acoes',
    key: 'acoes',
    render: () => (
      <DeleteAndEditButtons />
    ),
  },
]

export function Banner() {
  return (
    <div>
      <HeaderList title="Lista de Banners" />
      <TableList columns={columns} dataSource={bannerMock} />
    </div>
  )
}
