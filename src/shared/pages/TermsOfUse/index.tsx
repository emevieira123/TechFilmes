import styled from "styled-components";
import { DataTermsOfUse } from "./DataTermsOfUse";

export function TermsOfUse() {
  return (
    <ContainerTermsOfUse>
      <TitleTermsOfUse>
        <h1>Termos de Uso</h1>
      </TitleTermsOfUse>
      <span>
        Ao utilizar nosso site, você concorda em seguir os seguintes termos de uso:
      </span>

      <ol>
        {DataTermsOfUse.map((item) => <li key={item.id}>{item.content}</li>)}
      </ol>
    </ContainerTermsOfUse>
  )
}

const ContainerTermsOfUse = styled.div`
  margin: 0 10rem;
  padding: 1rem 1rem;
  border-radius: 10px;

  background: ${props => props.theme.gray800};

  li {
    margin: 1rem 2rem;
  }
`;

const TitleTermsOfUse = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
