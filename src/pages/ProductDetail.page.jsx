import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/product/Detail.component";
import { Link } from "react-router-dom";
import { Icon } from "../components/common/Icon.component";
import { BASE_PADDING } from "../constants";
import { isIOS, isMobile } from "react-device-detect";
import classnames from "classnames";
import { RentalButton } from "../components/product/RentalButton.component";

export const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <nav className="px-4 py-4">
        <Link to="/">
          <Icon size="large" type="back" />
        </Link>
      </nav>
      <main
        aria-label="main"
        className={classnames(
          "bg-white overflow-auto",
          BASE_PADDING,
          isMobile && isIOS
            ? "h-[calc(100vh-10rem-env(safe-area-inset-top))]"
            : "h-[calc(100vh-8.5rem)]"
        )}
      >
        <ProductDetail id={id} />
        <RentalButton id={id} />
      </main>
    </>
  );
};
