import { FiList } from 'react-icons/fi';

import { CardContainer, CardFooter, CardTitle } from "./styles";
import { TagBlue } from '../Tags';
import { ImgCircle } from "../Images";

export default function ProjectCard() {
  return (
    <CardContainer>
      <CardTitle to="/projetos/detalhes">
        Nome do projeto
      </CardTitle>
      <p>
        Descrição do projeto que pode ser um pouco longa, porém é limitada, mas pode quebrar até uma linha , por isso vou seguir escrevendo pra ter duas linhas.
      </p>
      <CardFooter>
        <TagBlue>Papel</TagBlue>
        <div className="users-list">
          <ImgCircle size="34px" src="https://s3-alpha-sig.figma.com/img/845c/0a7e/76a09dd9880480e7c59f7385cde7161f?Expires=1693180800&Signature=nI2rkTfXlDG6kuhILAYPNFha41CJ7Rs5QId~AFaoNwt12nQ03Dqc51be1u2DG4iOKiKL7~V8Q~fZbrtuf5LH~lwL~aU0binUQHoktHQO3eWkuaaV4mk3eqTE9E65xh8ydylNqB44Sj714FU2MuTDnaRO8y83NVGRnLORqxY4FTfUZFdV2L6QtszuojoNjVFvTNh12RN88alkwVv4HARr~ikbTCgTAHPZJ6omaRNGaaTe5Cos12KyINQMaWEs5~QA91huPc9FFSYqWtAWXxyBTrkf-hR3yFXaQbLa92~K9~GA7s-iTv9xFVnwbEJd9EueEdMC5yPl3vXoWPzEGzMAAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <ImgCircle size="34px" src="https://s3-alpha-sig.figma.com/img/fd81/9b7b/6ce4aff598ffb0963fa003043c6c9ded?Expires=1693180800&Signature=NygWMmtQtSnyhEotX6U-bdjDHV3g2YKPwWz8yTWHG5VnZbP4IKu5XwYT87QoQk3y0wXXrbtzIhZMahorMaVFxp5AwbbU1aJBn30c80E9XkzJ8~333XnhPATwDjLuKIaI69rUUfGQ41EHEnlSbWpF--EgjVxvH8gW4PxwjBGhuFbDYFkHERnn1isLZ-JnwhLKBbfnKwau0ra0WNe49cFNnU9Kvuo5taQtFxNHVWPHcuPLKj7B0E25q-ZBqesaVq5BrPoPlxDXZW3aFEnbOG2~5h59zVFwReGbG-PBZI~mrTvcQxSRUKmUMfdCavnwy693-LWA1B7qkDS~PB~15nACJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <ImgCircle size="34px" src="https://s3-alpha-sig.figma.com/img/0cc0/1b19/636d56320e77e0c30059f5904a28075c?Expires=1693180800&Signature=SPFq4wJ9znYR8SYs~yYOJvO44ti8H4dLl6boADOZgq9H8mrV2NfqddQviCRCqkZgA5ZGH3qXXtKSxXbOzMOiLjFCTtJzoTYQSa2UzfUg0-zSwBXLB3g2o54LVmgsqL2iXtjU3snkHzn~NWv8RadMgcPf8ExOVVLMlzq~bx4A~yH4rX6CIyHpSVx9-3d1TGUJXYSsUrHHaR9a~gn5LnBR6S9o6BrqMd~9T5kGoV0ecDjF8ij9S1KQVYXdvPKWA6JRWqts6y7dMy-AKwS9TNvtuvEoAjDXQ5hyNDMVj55MV-mnrY9kAaqiN1MBktGcLi6QMLhT1PUq~mueJaDDXOULmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <ImgCircle size="34px" src="https://s3-alpha-sig.figma.com/img/2c47/895f/81dd7d8f49940af5d9af149e31831ed5?Expires=1693180800&Signature=YS8Hpln7nSr-RTOGEJmA0HoDcXsDu5ye2VLRuidGc3tJ49kFVyRc-6VfOulzdD1KUVfiUO271vmVe7QQJIs4fMUlhgstZ~v-yggiNXRhFZ97~X5MoeNz7vfft6tJmk3cTS8TiON7yPMukPpsAnZaHZITfPJoP6pq6wpg2mNAtvZw5vhPDl7WAcR-F-13IxGxUfoUd5W4rOLC6cwHNgFP2FpX4R7TpaZQ6DJ5FVj4tq13TmriLvf4y72fMWaggHZ6DDPF-MsZZGFxLKvEUeNO~bhbE78olmYQXtV6bf-fqxNeD-H1wkzRWM6H-h5W0sNnf75RDv3QchbZT7L~1bObig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </div>
        <div className="sprint-items-count">
          <FiList /> 2
        </div>
      </CardFooter>
    </CardContainer>
  );
}
