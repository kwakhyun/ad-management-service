import { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import OptionRaw from '../Raw';

type OptionSmallProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  customStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  onClick?: () => void;
};

function OptionSmall({ children, isSelected, customStyle, onClick }: OptionSmallProps) {
  return (
    <OptionRaw isSelected={isSelected} customStyle={OptionSmallStyle(customStyle)} onClick={onClick}>
      {children}
    </OptionRaw>
  );
}

export default OptionSmall;

const OptionSmallStyle = (customStyle: FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined) => css`
  width: 123px;
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 500;
  ${customStyle};
`;