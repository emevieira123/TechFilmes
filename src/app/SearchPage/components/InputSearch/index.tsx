import { UseFormRegister } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { InputContainer } from "../../styles/style";

interface InputSearch {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  register: UseFormRegister<any>;
}

export function InputSearch({ onSubmit, register }: InputSearch) {
  return (
    <InputContainer>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Pesquisar filme ou série..."
            {...register("name")}
          />
          <button type="submit"><BsSearch size={25} /></button>
        </form>
      </InputContainer>
  );
}
