import classnames from "classnames";

/**
 * @param {{
 *    children: React.ReactNode,
 *    className: string,
 *    isActive: boolean,
 *    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
 *  }}
 */
export const Button = ({ children, className, isActive = true, onClick }) => (
  <button
    className={classnames(
      "w-full font-bold py-4 px-8 rounded-md border border-[#62AB05]",
      isActive ? "bg-[#62AB05] text-white" : "bg-[#EAEAEA] text-[#62AB05]",
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
