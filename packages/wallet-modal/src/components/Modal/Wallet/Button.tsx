interface Props {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, disabled, children, className }: Props) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-xs leading-4 py-2.5 px-3 font-semibold transition-all duration-150 rounded w-full ${className}`}
  >
    {children}
  </button>
);

export default Button;
