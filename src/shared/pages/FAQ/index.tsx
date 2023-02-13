import styled from "styled-components"
import { DataFaq } from "./DataFaq";

export function Faq() {
  return (
    <>
      <TitleFaq>
        <h2>Perguntas frequentes (FAQ)</h2>
      </TitleFaq>
      {DataFaq.map((item) => {
        return (
          <PerguntaResposta key={item.id}>
            <strong>{item.question}</strong>
            <span>{item.response}</span>
          </PerguntaResposta>
        );
      })}
    </>
  )
}

const TitleFaq = styled.div`
  display: flex;
  justify-content: center;
`;

const PerguntaResposta = styled.div`
  margin: 1rem 2rem;
  border-radius: 5px;
  padding: 1rem 3rem 0.5rem 3rem;

  display: flex;
  flex-direction: column;

  background: ${props => props.theme.gray800};

  strong {
    margin-bottom: 0.5rem;
  }

  &:hover {
    opacity: 0.7;
  }
`;
