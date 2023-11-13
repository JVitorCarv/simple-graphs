import styled from 'styled-components';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const getBackgroundColor = (variant: string | undefined): string => {
    switch (variant) {
      case 'primary':
        return 'var(--colors-blue, #007AFF)';
      case 'secondary':
        return 'var(--fills-tertiary, rgba(0, 0, 0, 0.12))';
      default:
        return 'rgba(0, 122, 255, 0.15);';
    }
  };

  const getColor = (variant: string | undefined): string => {
    switch (variant) {
      case 'primary':
        return 'white';
      case 'secondary':
        return 'var(--colors-blue, #007AFF)';
      default:
        return '#007AFF;';
    }
  };
  

export const Button = styled.button<ButtonProps>`
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 16px;
    background-color: ${(props) => getBackgroundColor(props.variant)};
    padding: 14px 20;
    color: ${(props) => getColor(props.variant)};
    border-radius: 12px;
    padding: 10px 20px;
    cursor: pointer;
`;
