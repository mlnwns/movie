import { HomeCarousel } from "../components/home/Carousel.component";
import { HomeCategory } from "../components/home/Category.component";
import { HomeHeader } from "../components/home/Header.component";

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <HomeCarousel />
      <div className="py-4">
        <HomeCategory />
      </div>
    </>
  );
};
