import Navbar from '../../../Components/Navbar/index';
import HeaderProject from '../../../Components/HeaderProject/index';
import { Profile1, UserItem, UserOptions, UsersContainer, UsersList } from './styles';
import { ButtonSuccess } from '../../../Components/Buttons';
import { ImgCircle } from '../../../Components/Images';
import InputSelect from '../../../Components/Forms/InputSelect';
import { ButtonTrash } from '../../../Components/Buttons';

export default function ProjectUsers() {
  return (
    <>
      <Navbar />
      <HeaderProject />
      <UsersContainer>
        <ButtonSuccess>
          Adicionar Participante
        </ButtonSuccess>
        <UsersList>
          <UserItem>
            <Profile1>
              <ImgCircle size="55px" src='https://s3-alpha-sig.figma.com/img/bc9e/3e88/d7d9d92358c1f1252d61c08b012ba9b0?Expires=1693785600&Signature=e~R8UNgqNLMzFhpakS0dBfGi5o-BMBaEBmY0onk72TLGdI00krYwZr5KLVO-ZiQWoRXNtWS1ti1NWYMVxIRdTpudEiSwstH0NxVel2BXZM65CiU4D4sGzzw~UyhNJ8OAlZFuhgGLpYjSBdPnBbhQhHu31lciBSJGV7vcO0CFjmJyI5CD7e8QPUdb~z1HKVJjdR4srra5MU6RdvfMlATE5KMwEOzY9ZXXcaprFGCzWqBtiSiRgRDQJV3vXFFfJBSV~l80QvCiVIL1697irj57CjvcVSnmmQNWKjgAZQWnTyTmtx3WYR8xW4eMbQQ3J~WMe3BGOt9rTsQt2GnrocCOgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <div className='profile-2'>
                <span className='user-name'>
                  Jacson Feuser Joaquim
                </span>
                <div className='profile-3'>
                  <span>3 Sprint Backlog</span>
                  <span>38 Increments on Software</span>
                </div>
              </div>
            </Profile1>
            <UserOptions>
              <InputSelect>
                <option value="product-owner">Product Owner</option>
                <option value="scrum-master">Scrum Master</option>
                <option value="developer">Developer</option>
              </InputSelect>
              <ButtonTrash />
            </UserOptions>
          </UserItem>
          <UserItem>
            <Profile1>
              <ImgCircle size="55px" src='https://s3-alpha-sig.figma.com/img/f074/c184/4e61d3d806509cd041b7fdb480315420?Expires=1693785600&Signature=oOkpnbX9mD8c~NUNE40Rj9mSY30s8Kmxai3bxvPyXKOQYcaPqZyHxB1eT4Cn~rPX3Myut-QWFOOuxkw-YaaIymIyrPTHba-XeEuDjT7xVAXOusttLCmJvzw4uesKk-OL-k8dz~6BycVimSQLMX~TDxYJTBLFDhTqo6Q0p3LOkN23jWJhc~vCO6wM8kL9UHV95lyufno5xJB7B3Sv-lAk0RpIvlKg~noOLV2sBNpi9hyk0rugKBhLaXMPTFxQpICZMJ1ruan8c5ay0lSizqdy8TnMuedJNFaOSC7ex4FeDC5omfr~tBrDSYamF5W39kFgledsp0RAsfTbg-tEuk6l7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <div className='profile-2'>
                <span className='user-name'>
                  Lucas Roberto Ramos
                </span>
                <div className='profile-3'>
                  <span>3 Sprint Backlog</span>
                  <span>38 Increments on Software</span>
                </div>
              </div>
            </Profile1>
            <UserOptions>
              <InputSelect>
                <option value="product-owner">Product Owner</option>
                <option value="scrum-master">Scrum Master</option>
                <option value="developer" selected>Developer</option>
              </InputSelect>
              <ButtonTrash />
            </UserOptions>
          </UserItem>
          <UserItem>
            <Profile1>
              <ImgCircle size="55px" src='https://s3-alpha-sig.figma.com/img/bc9e/3e88/d7d9d92358c1f1252d61c08b012ba9b0?Expires=1693785600&Signature=e~R8UNgqNLMzFhpakS0dBfGi5o-BMBaEBmY0onk72TLGdI00krYwZr5KLVO-ZiQWoRXNtWS1ti1NWYMVxIRdTpudEiSwstH0NxVel2BXZM65CiU4D4sGzzw~UyhNJ8OAlZFuhgGLpYjSBdPnBbhQhHu31lciBSJGV7vcO0CFjmJyI5CD7e8QPUdb~z1HKVJjdR4srra5MU6RdvfMlATE5KMwEOzY9ZXXcaprFGCzWqBtiSiRgRDQJV3vXFFfJBSV~l80QvCiVIL1697irj57CjvcVSnmmQNWKjgAZQWnTyTmtx3WYR8xW4eMbQQ3J~WMe3BGOt9rTsQt2GnrocCOgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <div className='profile-2'>
                <span className='user-name'>
                  Jacson Feuser Joaquim
                </span>
                <div className='profile-3'>
                  <span>3 Sprint Backlog</span>
                  <span>38 Increments on Software</span>
                </div>
              </div>
            </Profile1>
            <UserOptions>
              <InputSelect>
                <option value="product-owner">Product Owner</option>
                <option value="scrum-master" selected>Scrum Master</option>
                <option value="developer">Developer</option>
              </InputSelect>
              <ButtonTrash />
            </UserOptions>
          </UserItem>
          <UserItem>
            <Profile1>
              <ImgCircle size="55px" src='https://s3-alpha-sig.figma.com/img/f074/c184/4e61d3d806509cd041b7fdb480315420?Expires=1693785600&Signature=oOkpnbX9mD8c~NUNE40Rj9mSY30s8Kmxai3bxvPyXKOQYcaPqZyHxB1eT4Cn~rPX3Myut-QWFOOuxkw-YaaIymIyrPTHba-XeEuDjT7xVAXOusttLCmJvzw4uesKk-OL-k8dz~6BycVimSQLMX~TDxYJTBLFDhTqo6Q0p3LOkN23jWJhc~vCO6wM8kL9UHV95lyufno5xJB7B3Sv-lAk0RpIvlKg~noOLV2sBNpi9hyk0rugKBhLaXMPTFxQpICZMJ1ruan8c5ay0lSizqdy8TnMuedJNFaOSC7ex4FeDC5omfr~tBrDSYamF5W39kFgledsp0RAsfTbg-tEuk6l7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <div className='profile-2'>
                <span className='user-name'>
                  Lucas Roberto Ramos
                </span>
                <div className='profile-3'>
                  <span>3 Sprint Backlog</span>
                  <span>38 Increments on Software</span>
                </div>
              </div>
            </Profile1>
            <UserOptions>
              <InputSelect>
                <option value="product-owner">Product Owner</option>
                <option value="scrum-master">Scrum Master</option>
                <option value="developer" selected>Developer</option>
              </InputSelect>
              <ButtonTrash />
            </UserOptions>
          </UserItem>
        </UsersList>
      </UsersContainer>
    </>
  );
}
