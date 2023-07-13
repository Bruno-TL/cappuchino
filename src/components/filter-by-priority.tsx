import { styled } from "styled-components";
import { ArrowIcon } from "./arrow-icon";

interface FilterByPriorityProps {}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  p {
    fontfamily: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export function FilterByPriority(props: FilterByPriorityProps) {
  return (
    <FilterContainer>
      <p>
        Organizar por
        <ArrowIcon />
      </p>
    </FilterContainer>
  );
}
