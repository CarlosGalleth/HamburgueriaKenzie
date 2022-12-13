import { BrandContainer } from "./brandComponentStyled";
import { DotsContainer } from "./loginPage/dotsContainer";
import bagIcon from "../assets/shopping-bag.svg";

export const BrandComponent = () => {
  return (
    <section>
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <BrandContainer>
        <div>
          <img src={bagIcon} alt="" />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <strong>melhores</strong> ingredientes.
        </p>
      </BrandContainer>
      <DotsContainer />
    </section>
  );
};
