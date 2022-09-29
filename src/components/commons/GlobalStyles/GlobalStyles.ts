import './GlobalStyles.scss';

interface IGlobalStylesProps {
  children: JSX.Element;
}

const GlobalStyles = ({ children }: IGlobalStylesProps) => {
  return children;
};

export default GlobalStyles;
