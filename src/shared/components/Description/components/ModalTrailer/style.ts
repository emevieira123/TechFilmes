import { Modal, Row } from "antd";
import styled from "styled-components";

export const ModalTrailerStyle = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-modal-body,
  .ant-modal-content,
  .ant-modal-header {
    background-color: ${props => props.theme.gray900};
  }

  .ant-modal-title {
    color: ${props => props.theme.white};
  }
`;

export const ModalTitle = styled(Row)`
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.25rem;
  }
  span {
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.yellowDark};
    }
  }
`;
