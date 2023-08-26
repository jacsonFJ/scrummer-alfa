import { BacklogContainer } from "./styles";
import { ButtonSuccess } from '../../../Components/Buttons';
import Navbar from '../../../Components/Navbar/index';
import HeaderProject from '../../../Components/HeaderProject/index';
import ItemsFilter from "../../../Components/ItemsFilter";

export default function ProductBacklog() {
  return (
    <>
      <Navbar />
      <HeaderProject />
      <BacklogContainer>
        <ButtonSuccess>
          Adicionar Item
        </ButtonSuccess>
        <ItemsFilter />
      </BacklogContainer>
    </>
  );
}
