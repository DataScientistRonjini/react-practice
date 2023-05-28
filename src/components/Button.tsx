import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// interface Props {
//   classType: string;
//   buttonText: string;
// }
// function Button({ classType, buttonText }: Props) {
//   return (
//     <>
//       <button type="button" className={classType}>
//         {buttonText}
//       </button>
//     </>
//   );
// }

// export default Button;
