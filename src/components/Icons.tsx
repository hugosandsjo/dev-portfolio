import React from "react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const ArrowRightIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    {...props}
    fill="#1f1f1f"
  >
    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
  </svg>
);
