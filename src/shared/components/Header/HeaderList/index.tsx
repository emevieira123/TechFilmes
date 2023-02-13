import styled from "styled-components";

interface HeaderListProps {
  title: string;
}

export function HeaderList({ title }: HeaderListProps) {
  return (
    <Title>
      <h1>{title}</h1>
      <button>+</button>
    </Title>
  )
}

export const Title = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    border: 1px solid ${props => props.theme.purple};
    color: ${props => props.theme.purple};
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: ${props => props.theme.purple};
      border: 0;
      color: white;
    }
  }
`;
