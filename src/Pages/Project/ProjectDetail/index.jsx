import { FiBookOpen } from 'react-icons/fi';

import { Description, DescriptionText, DescriptionTitle, ItemsList, Participants, ProjectContainer, SectionTitle } from "./styles";
import Navbar from '../../../Components/Navbar/index';
import { ImgCircle } from '../../../Components/Images';
import { TagBlue } from '../../../Components/Tags';
import Colors from '../../../Colors';
import HeaderProject from '../../../Components/HeaderProject';

export default function ProjectDetail() {
  return (
    <>
      <Navbar />
      <HeaderProject />
      <ProjectContainer>
        <Description>
          <DescriptionTitle>
            <FiBookOpen size={20} />
            Descrição
          </DescriptionTitle>
          <DescriptionText>
            Lorem ipsum dolor sit amet consectetur. Adipiscing hendrerit sagittis a mi mattis. Viverra egestas diam auctor eget eleifend varius pulvinar magna arcu. Sed sed habitant diam nisl. Nibh augue id pellentesque quis. Pulvinar massa nunc ultricies amet cursus. Pretium vitae aliquam nec pulvinar senectus velit. Vel suscipit sed nunc id in pellentesque odio volutpat. Risus vivamus non ullamcorper vulputate diam elit.
            <br />
            Natoque volutpat justo volutpat fermentum at nunc euismod. Congue ut neque sit amet. At nec diam pellentesque pretium pretium vivamus facilisi. Sapien eget quam neque magnis proin consectetur a. Et ut consequat id in posuere purus. Fringilla purus imperdiet sed quam morbi risus. Vel dolor pellentesque egestas risus malesuada tristique convallis vitae tortor. At aliquam at diam convallis. Pharetra adipiscing ornare risus etiam quis sollicitudin varius. Faucibus tempus aliquam pulvinar magna nullam blandit sapien sed. Semper auctor et ut sed praesent odio pretium vitae.
            <br />
            Fermentum in pharetra sem sed id elementum nibh. Arcu habitasse elit amet vestibulum enim euismod donec. Nisl pretium diam enim ipsum. Vel massa malesuada ut accumsan purus. Nunc non duis gravida justo ut posuere. Aliquam gravida sit turpis bibendum sodales cursus elit fringilla. At urna feugiat nullam accumsan cras proin sed nisi. Egestas quam cras hac mattis ante placerat ut. Pulvinar libero mauris suspendisse egestas egestas vel vitae.
            <br />
            Suspendisse quisque convallis placerat tristique sed. Platea vitae aliquam pharetra id a. Vitae vivamus ut ultrices in lectus. Turpis sit lacus eget fames praesent sapien. Nam egestas cursus cursus volutpat amet at. Et aliquam in quisque tellus ipsum at. Maecenas nec dis penatibus in pellentesque ornare lectus. Tincidunt enim egestas cursus eget curabitur vel sit vestibulum. Etiam amet vitae consectetur mattis sed ut metus. Amet ultrices et et montes aenean semper commodo. Nunc massa enim elit eget eget ultrices egestas.
          </DescriptionText>
        </Description>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Participants>
            <SectionTitle to="/projetos/usuarios">
              Participantes
            </SectionTitle>
            <div className='participant'>
              <ImgCircle size="34px" src='https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1693785600&Signature=HVN~7U-zM-BFYqy0OovUw-pz70IomzJ1qUCOStFWffSH8Ppi~58zl4IzHLj6DWOenh6RVBMxd0QXNYfPUQzr1IIqvEkX8Yz8u7XHyJZkQY95-JcW-3khzqQH8xikCJcaLmXUK-iUeJ06EhqyiGTV1-Sn1ipqdsAkPOFUz5AMbYzVgcZ6CA2X-QTZ03wxQKZKhtmpW7~zjFqK3JGFQbaKhVRuic21fQA5WU20D2bKO4yc144LWdQqAydCM6c795uvLF3oUeWWKqbt7Fj8rkjtXKZ2wXOGmjK3IFE~Iz6yBEfdN0yVX9yjoJW10lZWcXb6oiN8vxCRdMsg1ZsLhVQYRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <span className='participant-name'>Jade</span>
              <TagBlue>Product Owner</TagBlue>
            </div>
            <div className='participant'>
              <ImgCircle size="34px" src='https://s3-alpha-sig.figma.com/img/845c/0a7e/76a09dd9880480e7c59f7385cde7161f?Expires=1693180800&Signature=nI2rkTfXlDG6kuhILAYPNFha41CJ7Rs5QId~AFaoNwt12nQ03Dqc51be1u2DG4iOKiKL7~V8Q~fZbrtuf5LH~lwL~aU0binUQHoktHQO3eWkuaaV4mk3eqTE9E65xh8ydylNqB44Sj714FU2MuTDnaRO8y83NVGRnLORqxY4FTfUZFdV2L6QtszuojoNjVFvTNh12RN88alkwVv4HARr~ikbTCgTAHPZJ6omaRNGaaTe5Cos12KyINQMaWEs5~QA91huPc9FFSYqWtAWXxyBTrkf-hR3yFXaQbLa92~K9~GA7s-iTv9xFVnwbEJd9EueEdMC5yPl3vXoWPzEGzMAAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <span className='participant-name'>Jacson</span>
              <TagBlue>Scrum Master</TagBlue>
            </div>
            <div className='participant'>
              <ImgCircle size="34px" src='https://s3-alpha-sig.figma.com/img/fd81/9b7b/6ce4aff598ffb0963fa003043c6c9ded?Expires=1693180800&Signature=NygWMmtQtSnyhEotX6U-bdjDHV3g2YKPwWz8yTWHG5VnZbP4IKu5XwYT87QoQk3y0wXXrbtzIhZMahorMaVFxp5AwbbU1aJBn30c80E9XkzJ8~333XnhPATwDjLuKIaI69rUUfGQ41EHEnlSbWpF--EgjVxvH8gW4PxwjBGhuFbDYFkHERnn1isLZ-JnwhLKBbfnKwau0ra0WNe49cFNnU9Kvuo5taQtFxNHVWPHcuPLKj7B0E25q-ZBqesaVq5BrPoPlxDXZW3aFEnbOG2~5h59zVFwReGbG-PBZI~mrTvcQxSRUKmUMfdCavnwy693-LWA1B7qkDS~PB~15nACJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <span className='participant-name'>Roberto Carlos</span>
              <TagBlue>Developer</TagBlue>
            </div>
            <div className='participant'>
              <ImgCircle size="34px" src='https://s3-alpha-sig.figma.com/img/0cc0/1b19/636d56320e77e0c30059f5904a28075c?Expires=1693180800&Signature=SPFq4wJ9znYR8SYs~yYOJvO44ti8H4dLl6boADOZgq9H8mrV2NfqddQviCRCqkZgA5ZGH3qXXtKSxXbOzMOiLjFCTtJzoTYQSa2UzfUg0-zSwBXLB3g2o54LVmgsqL2iXtjU3snkHzn~NWv8RadMgcPf8ExOVVLMlzq~bx4A~yH4rX6CIyHpSVx9-3d1TGUJXYSsUrHHaR9a~gn5LnBR6S9o6BrqMd~9T5kGoV0ecDjF8ij9S1KQVYXdvPKWA6JRWqts6y7dMy-AKwS9TNvtuvEoAjDXQ5hyNDMVj55MV-mnrY9kAaqiN1MBktGcLi6QMLhT1PUq~mueJaDDXOULmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <span className='participant-name'>Renata</span>
              <TagBlue>Developer</TagBlue>
            </div>
          </Participants>
          <Participants style={{borderBottom: `1px solid ${Colors.secondary200}`}}>
            <SectionTitle to="#">
              Últimos Itens
            </SectionTitle>
            <ItemsList>
              <li>Criar formulário</li>
              <li>Validar o formulário de cadastro</li>
              <li>Definir o storage</li>
              <li>Criar formulário de usuário</li>
              <li>Criar formulário de cadastro</li>
            </ItemsList>
          </Participants>
        </div>
      </ProjectContainer>
    </>
  );
}
