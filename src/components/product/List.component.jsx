import { Br } from "../common/Br.component";
import { ProductItem } from "./Item.component";

const products = [
  {
    img: { src: "https://placehold.co/600x400", alt: "placeholder" },
    title: "dummy",
    price: { original: 10000, type: "월" },
    place: "제 1학생회관",
    commentCount: 1,
  },
  {
    img: { src: "https://placehold.co/600x400", alt: "placeholder" },
    title: "dummy",
    price: { original: 10000, type: "월" },
    place: "제 1학생회관",
    commentCount: 1,
  },
  {
    img: { src: "https://placehold.co/600x400", alt: "placeholder" },
    title: "dummy",
    price: { original: 10000, type: "월" },
    place: "제 1학생회관",
    commentCount: 1,
  },
];

export const ProductList = () => {
  return (
    <section>
      {products.map((product) => (
        <>
          <Br />
          <ProductItem data={product} />
          <Br />
        </>
      ))}
    </section>
  );
};
