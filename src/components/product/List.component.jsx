import { Br } from "../common/Br.component";
import { Txt } from "../common/Txt.component";
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
      <Br />
      {products.map((product) => (
        <>
          <ProductItem data={product} />
          <Br />
        </>
      ))}
      <Txt
        typography="h4"
        colors="secondary"
        className="flex justify-center text-center py-4"
      >
        더이상 제품이 없어요
      </Txt>
    </section>
  );
};
