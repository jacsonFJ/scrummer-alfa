import Navbar from '../../../Components/Navbar/index';
import HeaderProject from '../../../Components/HeaderProject/index';
import { BacklogItemContainer, ItemDescription, ItemTitle, LeftEvents, LeftSide, Participant, ParticipantRow, RightRow, RightSide, RightTitle, Row40, Row5, UsersList } from './styles';
import { ButtonDanger, ButtonPlus, ButtonTrash } from '../../../Components/Buttons';
import { ImgCircle } from '../../../Components/Images';
import InputSelect from '../../../Components/Forms/InputSelect';
import HistoryEvent from '../../../Components/HistoryEvent';
import Note from '../../../Components/Note';

export default function BacklogItem() {
  return (
    <>
      <Navbar />
      <HeaderProject />
      <BacklogItemContainer>
        <Row40>
          <ItemTitle>
            Criar formulário de cadastro <span>#123</span>
          </ItemTitle>
          <ButtonDanger>Arquivar</ButtonDanger>
        </Row40>
        <Row5>Aberto a 14 dias</Row5>
        <Row40>
          <LeftSide>
            <ItemDescription>
              &emsp;Lorem ipsum dolor sit amet consectetur. Risus pellentesque odio gravida tincidunt dolor vitae ligula aliquet tellus. Turpis donec id nisl duis pulvinar viverra. Diam adipiscing tempor tortor amet enim curabitur euismod quis in. Auctor aliquam nec praesent magna. Venenatis et massa tincidunt id enim pharetra viverra duis.
              <br />
              &emsp;Purus turpis ultrices in in donec nunc ut nunc in. Interdum et amet arcu maecenas tincidunt laoreet sit et. Et sed morbi in id diam nisi mi malesuada tellus. Nullam elementum erat massa at aliquam eu malesuada. Vulputate vitae nunc sed tincidunt sem arcu. Suspendisse nulla velit ac ipsum libero neque. Sed vitae gravida pellentesque mi nibh ornare aenean nunc facilisi. Felis sagittis vestibulum mattis pellentesque et. Adipiscing morbi at nisl pulvinar proin ac vulputate donec. Fusce aliquam vel dolor lorem vitae sapien. Gravida mauris ultricies condimentum leo pellentesque.
            </ItemDescription>
            <LeftEvents>
              <HistoryEvent icon='edit'>
                <strong>Loreta</strong> criou este item em <strong>04/06/2023 11:43</strong>
              </HistoryEvent>
              <HistoryEvent icon='edit'>
                <strong>Loreta</strong> editou a descrição em <strong>04/06/2023 11:45</strong>
              </HistoryEvent>
              <HistoryEvent>
                <strong>Loreta</strong> adicionou <strong>Jacson</strong> como participante em <strong>04/06/2023 11:43</strong>
              </HistoryEvent>
              <Note />
              <HistoryEvent>
                <strong>Jacson</strong>  editou a descrição em <strong>04/06/2023 12:43</strong>
              </HistoryEvent>
            </LeftEvents>
          </LeftSide>
          <RightSide>
            <RightRow>
              <RightTitle>Criado por</RightTitle>
              <Participant>
                <div className='participant-profile'>
                  <ImgCircle
                    size='34px'
                    src='https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1694390400&Signature=Blrcci5iexVLiebvtJL~XwglwIE7QSSHJSgMrTCJKJ2eXnA6ghYQTCfR~nG8H4nC2zRzgXbQYvooIVGzKFchqQ6ZcWLp8kCLa0IK7OPGb3lK3RJnQoq4547KfeuGWiEBvk1fFMR2jNLKINDjWfgDS4H95kCHAXsX7EQAsJid2XP3rqo9vCS7ckzVs80cDHyrq~g6Xvn4CEp~hD2YQ1m4L1jEakZjYO3c2TR6Bohml1OpFPO6ymJc~e3JZgTktZejCqh8pE5TUfMFaJ~Dtf-cYuSduTJUonqDS-SWf8gNJGu8iDf0sMIezlWwLcUuPAxxzZkrEWD7t~zUuHtne7jh6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                  />
                  <span className='participant-name'>
                    Loreta Roberta Ramos
                  </span>
                </div>
              </Participant>
            </RightRow>
            <RightRow>
              <ParticipantRow>
                <RightTitle>Participantes</RightTitle>
                <ButtonPlus />
              </ParticipantRow>
              <UsersList>
                <ParticipantRow>
                  <Participant>
                    <div className='participant-profile'>
                      <ImgCircle
                        size='34px'
                        src='https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1694390400&Signature=Blrcci5iexVLiebvtJL~XwglwIE7QSSHJSgMrTCJKJ2eXnA6ghYQTCfR~nG8H4nC2zRzgXbQYvooIVGzKFchqQ6ZcWLp8kCLa0IK7OPGb3lK3RJnQoq4547KfeuGWiEBvk1fFMR2jNLKINDjWfgDS4H95kCHAXsX7EQAsJid2XP3rqo9vCS7ckzVs80cDHyrq~g6Xvn4CEp~hD2YQ1m4L1jEakZjYO3c2TR6Bohml1OpFPO6ymJc~e3JZgTktZejCqh8pE5TUfMFaJ~Dtf-cYuSduTJUonqDS-SWf8gNJGu8iDf0sMIezlWwLcUuPAxxzZkrEWD7t~zUuHtne7jh6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                      />
                      <span className='participant-name'>
                        Loreta Roberta Ramos
                      </span>
                    </div>
                  </Participant>
                  <ButtonTrash />
                </ParticipantRow>
                <ParticipantRow>
                  <Participant>
                    <div className='participant-profile'>
                      <ImgCircle
                        size='34px'
                        src='https://s3-alpha-sig.figma.com/img/554e/01c1/770b6c855553564e98aa01c009bcdcb4?Expires=1694390400&Signature=b8fjki7STMFetucS11yxODss6oezDtlq1UoMsIJzeJszLmDoq0YvRg-jMviAn651u2upDWS0jKyTmsvtDW0VeihM~-ENC4LwK8uKM0bJdtxNljw5v5T6qZRg9L~fC1j0f1co80hPRzVw6E4b1DlJ1Ts1mPGWS7Vc7VQYdKRL4AjLkXY97qwlUZnFxW--r5ZGdyCCRBYzIpI~qtJ6N3nIaDTDA-wNnZWvFScsFaBqErSOm1~UGtkh8zR4u7uQdQNSWQA5yxhRd6Z~C53XJIhroCopfWZnf95AOcmv6YTw~z-1YOEnjcci9H2s9mJUH3AlCKNCAkf1RC55d3n37eF6bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                      />
                      <span className='participant-name'>
                        Lucas Silva
                      </span>
                    </div>
                  </Participant>
                  <ButtonTrash />
                </ParticipantRow>
                <ParticipantRow>
                  <Participant>
                    <div className='participant-profile'>
                      <ImgCircle
                        size='34px'
                        src='https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1694390400&Signature=Blrcci5iexVLiebvtJL~XwglwIE7QSSHJSgMrTCJKJ2eXnA6ghYQTCfR~nG8H4nC2zRzgXbQYvooIVGzKFchqQ6ZcWLp8kCLa0IK7OPGb3lK3RJnQoq4547KfeuGWiEBvk1fFMR2jNLKINDjWfgDS4H95kCHAXsX7EQAsJid2XP3rqo9vCS7ckzVs80cDHyrq~g6Xvn4CEp~hD2YQ1m4L1jEakZjYO3c2TR6Bohml1OpFPO6ymJc~e3JZgTktZejCqh8pE5TUfMFaJ~Dtf-cYuSduTJUonqDS-SWf8gNJGu8iDf0sMIezlWwLcUuPAxxzZkrEWD7t~zUuHtne7jh6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                      />
                      <span className='participant-name'>
                        Loreta Roberta Ramos
                      </span>
                    </div>
                  </Participant>
                  <ButtonTrash />
                </ParticipantRow>
              </UsersList>
            </RightRow>
            <RightRow>
              <RightTitle>Etapa</RightTitle>
              <InputSelect>
                <option value="product-owner">Product Owner</option>
                <option value="scrum-master">Scrum Master</option>
                <option value="developer">Developer</option>
              </InputSelect>
            </RightRow>
          </RightSide>
        </Row40>
      </BacklogItemContainer>
    </>
  );
}
