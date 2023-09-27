import { HomeCarousel } from "../components/home/Carousel.component";
import { HomeCategory } from "../components/home/Category.component";
import { HomeHeader } from "../components/home/Header.component";
import { ProductList } from "../components/product/List.component";
import classnames from "classnames";
import { BASE_PADDING } from "../constants";

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <main
        aria-label="main"
        className={classnames(
          "bg-white h-[calc(100vh-5rem)] overflow-auto",
          BASE_PADDING
        )}
      >
        <div className="my-6">
          <HomeCarousel />
        </div>
        <div className="my-8">
          <HomeCategory />
        </div>
        <ProductList />
      </main>
    </>
  );
};
