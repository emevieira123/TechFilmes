import { DeleteAndEditButtons } from "../../../../shared/components/Buttons/DeleteAndEditButtons";
import { HeaderList } from "../../../../shared/components/Header/HeaderList";
import { TableList } from "../../../../shared/components/Table/TableList";
import { slideFilmesMock } from "../../../HomePage/__mocks__/slideFilmesMock";
import { colunas } from "../utils/colunas";

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

export function Movies() {
  return (
    <div>
      <HeaderList title="Lista de Filmes e Séries" />
      <TableList columns={columns} dataSource={slideFilmesMock} />
    </div>
  );
}
