import styled from 'styled-components';
interface ButtonContainerProps {
    disabled?: boolean;
  }


export const ButtonContainer = styled.button<ButtonContainerProps>`
   width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

    &:hover {
        opacity: ${(props) => (props.disabled ? 0.5 : 0.6)};
  }
`;
