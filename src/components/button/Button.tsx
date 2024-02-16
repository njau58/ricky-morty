import { Spinner } from "../loaders";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  text: string;
  isLoading?: boolean;
}

const Button = ({ text, onClick, isLoading }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="  bg-primary px-6 py-2 rounded-md border-2 border-solid
text-white border-transparent transition-all duration-300 w-full
ease-in-out hover:bg-black "
    >
      {isLoading ? <Spinner height={14} width={2} color="white" /> : text}
    </button>
  );
};

export default Button;
