import { ImgCircle } from "../Images";
import { NoteContainer } from "./styles";

export default function Note() {
  return (
    <NoteContainer>
      <div className="note-top">
        <div className="note-top-profile">
          <ImgCircle
            size="32px"
            src="https://s3-alpha-sig.figma.com/img/2c47/895f/81dd7d8f49940af5d9af149e31831ed5?Expires=1694390400&Signature=erdybKtGrhn6qx~Gtu8tADjnHm4U8uihqUiXw9kS27RMgz-cnhIai64Wl9aQRW0PiSrOHMQQpok9B8Pc2QfbEtgiN9lQjsKh-FqTAChBQStmUrj783GBM4KW3Q9r3SD6W6tMZj1GJiKwDEaofdeYztsCs9tf0h3i04v2bYY4DBoX9-U89btIhsvb1hE0FuU-80zdlWHzP8iQLuCXmXFyWjJplV3AiM9sAeXQVUw3F8J152yJqi8QBdzuDrgbXN0RcX6YXJKuf20NTx38Gm1cFacd4QaB4fbwsn8NxKHDGqhttJia4-XkpsXgLG8-5FQPSDFtITY-boBeCQSyaqAL3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <h3>
            Loreta Roberta Ramos <span>em</span> 04/06/2023 11:55
          </h3>
        </div>
      </div>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur. Blandit vel velit aenean neque sodales justo. Iaculis cursus neque eu egestas. Ultrices tincidunt integer dui nulla. Risus venenatis auctor lectus enim. Nec turpis nunc congue diam. Viverra integer id tortor facilisis sapien diam. Volutpat egestas auctor tellus ipsum enim. Fringilla dictum venenatis libero habitant enim dolor. Quis accumsan sed a vitae. Pellentesque blandit sapien et orci proin platea sit.
      </p>
    </NoteContainer>
  );
}
