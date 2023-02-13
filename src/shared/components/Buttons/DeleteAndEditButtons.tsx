import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";

export function DeleteAndEditButtons() {
  return (
    <ContainerButtonsActions>
        <DeleteButton>
          <RiDeleteBin6Line size={20} />
        </DeleteButton>
        |
        <EditButton>
          <FiEdit size={20} />
        </EditButton>
      </ContainerButtonsActions>
  )
}

export const ContainerButtonsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BaseButton = styled.button`
  color: ${props => props.theme.white};
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const DeleteButton = styled(BaseButton)`
  &:hover{
    color: ${props => props.theme.red};
  }
`;

export const EditButton = styled(BaseButton)`
  &:hover{
    color: ${props => props.theme.purple};
  }
`;
