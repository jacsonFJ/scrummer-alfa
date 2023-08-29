import HeaderProject from "../../../Components/HeaderProject";
import Navbar from "../../../Components/Navbar";
import Paginator from "../../../Components/Paginator";
import ItemsFilter from '../../../Components/ItemsFilter/index';
import { ItemIncrement } from "../../../Components/ListItems";
import { BacklogList } from "../ProductBacklog/styles";

export default function IncrementOnSoftware() {
  return (
    <>
      <Navbar />
      <HeaderProject />
        <BacklogList style={{marginTop: '40px'}}>
          <ItemsFilter />
          <ItemIncrement />
          <ItemIncrement />
          <ItemIncrement />
          <ItemIncrement />
          <ItemIncrement />
          <ItemIncrement />
          <ItemIncrement />
        </BacklogList>
      <Paginator />
    </>
  );
}
