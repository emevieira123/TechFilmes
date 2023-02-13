import styled from "styled-components";

export function PrivacyPolice() {
  return (
    <ContainerPrivacyPolicy>
      <TitlePrivacyPolicy>
        <h1>Politica de Privacidade</h1>
      </TitlePrivacyPolicy>
      <span>
        Nós do TECH FILMES HD, valorizamos a privacidade de nossos usuários e estamos comprometidos em proteger as informações pessoais que coletamos.
        Esta política de privacidade explica como coletamos, usamos, compartilhamos e protegemos as informações pessoais dos usuários de nosso site.</span>

      <Info>
        <strong>Informações que coletamos:</strong>
        <ul>
          <li>Informações de uso: coletamos informações sobre como os usuários utilizam nosso site, incluindo os filmes que baixam, as pesquisas realizadas e as interações com outros usuários.</li>
          <li>Informações de dispositivo: coletamos informações sobre o dispositivo usado para acessar nosso site, incluindo o tipo de dispositivo, o sistema operacional e o endereço IP.</li>
        </ul>
      </Info>
      <Info>
        <strong>Como usamos as informações:</strong>
        <ul>
          <li>Para fornecer e manter nosso site: usamos as informações coletadas para fornecer e manter nosso site, incluindo para personalizar a experiência de usuário.</li>
          <li>Para melhorar nosso site: usamos as informações coletadas para entender como os usuários usam nosso site e para identificar problemas técnicos.</li>
          <li>Para enviar comunicações: usamos as informações de contato dos usuários para enviar notificações sobre atualizações do site, novos filmes e outras informações relevantes.</li>
        </ul>
      </Info>
      <Info>
        <strong>Como compartilhamos as informações:</strong>
        <ul>
          <li>Com parceiros de negócios: compartilhamos informações com nossos parceiros de negócios para melhorar nosso site e oferecer aos usuários uma experiência personalizada.</li>
          <li>Com autoridades reguladoras: compartilhamos informações com autoridades reguladoras quando requerido por lei ou para cumprir com processos legais.</li>
        </ul>
      </Info>
      <Info>
        <strong>Como protegemos as informações:</strong>
        <ul>
          <li>Usamos medidas de segurança para proteger as informações pessoais dos usuários contra acesso não autorizado, uso indevido, alteração ou destruição.</li>
        </ul>
      </Info>
      <Info>
        <strong>Mudanças na política de privacidade:</strong>
        <ul>
          <li>Reservamos o direito de modificar esta política de privacidade a qualquer momento. Qualquer alteração será publicada em nosso site e entrará em vigor imediatamente.</li>
          <li>Recomendamos que os usuários verifiquem regularmente esta política de privacidade para ficar cientes de quaisquer alterações.</li>
        </ul>
      </Info>
      <Info>
        <strong>Contato:</strong>
        <ul>
          <li>Se você tiver alguma dúvida ou preocupação com relação à nossa política de privacidade, entre em contato conosco através do nosso formulário de contato ou pelo e-mail [support@techfilmes.com.br].</li>
        </ul>
      </Info>
      <span style={{marginTop: '2rem'}}>Esta política de privacidade foi atualizada pela última vez em [23/01/2023].</span>
    </ContainerPrivacyPolicy>
  );
}

const ContainerPrivacyPolicy = styled.div`
  margin: 0 10rem;
  padding: 1rem 1rem;
  border-radius: 10px;

  background: ${props => props.theme.gray800};
`;
const TitlePrivacyPolicy = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  li {
    margin-left: 2rem;
    margin-top: 0.5rem;
  }
`;
