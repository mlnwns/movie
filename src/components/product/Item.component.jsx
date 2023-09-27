import { Icon } from "../common/Icon.component";
import { Txt } from "../common/Txt.component";

/**
 * @param {{
 *  data: {
 *    img: { src: string, alt: string },
 *    title: string,
 *    price: { original: number, type: string },
 *    place: string,
 *    commentCount: number,
 *  }
 * }}
 */
export const ProductItem = ({ data }) => {
  const { img, title, price, place, commentCount } = data;

  return (
    <button className="py-4 flex gap-4 text-left w-full">
      <div className="h-20 w-20 overflow-hidden">
        <img src={img.src} alt={img.alt} />
      </div>
      <div className="flex flex-col h-20 justify-between flex-1">
        <div className="flex flex-col gap-1 w-full truncate">
          <Txt typography="h6">{title}</Txt>
          <Txt
            typography="subtitle"
            colors="secondaryLight"
            className="font-light"
          >
            {place}
          </Txt>
        </div>
        <div className="flex w-full justify-between">
          <Txt typography="h6" colors="secondary">
            {`${price.original} / ${price.type}`}
          </Txt>
          <div className="flex items-center">
            <Icon type="message" size="small" />
            <Txt typography="p">{commentCount}</Txt>
          </div>
        </div>
      </div>
    </button>
  );
};
