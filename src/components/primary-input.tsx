import { styled } from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  background-color: var(--bg-secondary);
  padding: 10px 16px;
  border: none;

  font-size: 14px;
  font-family: inherit;
  line-height: 22px;
  font-weight: 400;
  color: var(--text-dark);
`;

const InputContainer = styled.div`
  position: relative;
  width: 353px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <div>
      <InputContainer>
        <PrimaryInput {...props} />
        <SearchIcon />
      </InputContainer>
    </div>
  );
}
