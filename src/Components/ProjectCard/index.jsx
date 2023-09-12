import { FiList } from 'react-icons/fi';

import { CardContainer, CardFooter, CardTitle } from "./styles";
import { TagBlue } from '../Tags';
import { ImgCircle } from "../Images";

export default function ProjectCard() {
  return (
    <CardContainer>
      <CardTitle to="/projetos/teste/detalhes">
        Nome do projeto
      </CardTitle>
      <p>
        Descrição do projeto que pode ser um pouco longa, porém é limitada, mas pode quebrar até uma linha , por isso vou seguir escrevendo pra ter duas linhas.
      </p>
      <CardFooter>
        <TagBlue>Papel</TagBlue>
        <div className="users-list">
          <ImgCircle size="34px" src="https://s3-alpha-sig.figma.com/img/554e/01c1/770b6c855553564e98aa01c009bcdcb4?Expires=1694390400&Signature=b8fjki7STMFetucS11yxODss6oezDtlq1UoMsIJzeJszLmDoq0YvRg-jMviAn651u2upDWS0jKyTmsvtDW0VeihM~-ENC4LwK8uKM0bJdtxNljw5v5T6qZRg9L~fC1j0f1co80hPRzVw6E4b1DlJ1Ts1mPGWS7Vc7VQYdKRL4AjLkXY97qwlUZnFxW--r5ZGdyCCRBYzIpI~qtJ6N3nIaDTDA-wNnZWvFScsFaBqErSOm1~UGtkh8zR4u7uQdQNSWQA5yxhRd6Z~C53XJIhroCopfWZnf95AOcmv6YTw~z-1YOEnjcci9H2s9mJUH3AlCKNCAkf1RC55d3n37eF6bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <ImgCircle size="34px" src="https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1694390400&Signature=Blrcci5iexVLiebvtJL~XwglwIE7QSSHJSgMrTCJKJ2eXnA6ghYQTCfR~nG8H4nC2zRzgXbQYvooIVGzKFchqQ6ZcWLp8kCLa0IK7OPGb3lK3RJnQoq4547KfeuGWiEBvk1fFMR2jNLKINDjWfgDS4H95kCHAXsX7EQAsJid2XP3rqo9vCS7ckzVs80cDHyrq~g6Xvn4CEp~hD2YQ1m4L1jEakZjYO3c2TR6Bohml1OpFPO6ymJc~e3JZgTktZejCqh8pE5TUfMFaJ~Dtf-cYuSduTJUonqDS-SWf8gNJGu8iDf0sMIezlWwLcUuPAxxzZkrEWD7t~zUuHtne7jh6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <ImgCircle size="34px" src="https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1694390400&Signature=Blrcci5iexVLiebvtJL~XwglwIE7QSSHJSgMrTCJKJ2eXnA6ghYQTCfR~nG8H4nC2zRzgXbQYvooIVGzKFchqQ6ZcWLp8kCLa0IK7OPGb3lK3RJnQoq4547KfeuGWiEBvk1fFMR2jNLKINDjWfgDS4H95kCHAXsX7EQAsJid2XP3rqo9vCS7ckzVs80cDHyrq~g6Xvn4CEp~hD2YQ1m4L1jEakZjYO3c2TR6Bohml1OpFPO6ymJc~e3JZgTktZejCqh8pE5TUfMFaJ~Dtf-cYuSduTJUonqDS-SWf8gNJGu8iDf0sMIezlWwLcUuPAxxzZkrEWD7t~zUuHtne7jh6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <ImgCircle size="34px" src="https://s3-alpha-sig.figma.com/img/554e/01c1/770b6c855553564e98aa01c009bcdcb4?Expires=1694390400&Signature=b8fjki7STMFetucS11yxODss6oezDtlq1UoMsIJzeJszLmDoq0YvRg-jMviAn651u2upDWS0jKyTmsvtDW0VeihM~-ENC4LwK8uKM0bJdtxNljw5v5T6qZRg9L~fC1j0f1co80hPRzVw6E4b1DlJ1Ts1mPGWS7Vc7VQYdKRL4AjLkXY97qwlUZnFxW--r5ZGdyCCRBYzIpI~qtJ6N3nIaDTDA-wNnZWvFScsFaBqErSOm1~UGtkh8zR4u7uQdQNSWQA5yxhRd6Z~C53XJIhroCopfWZnf95AOcmv6YTw~z-1YOEnjcci9H2s9mJUH3AlCKNCAkf1RC55d3n37eF6bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </div>
        <div className="sprint-items-count">
          <FiList /> 2
        </div>
      </CardFooter>
    </CardContainer>
  );
}
