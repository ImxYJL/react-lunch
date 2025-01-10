import styled from "@emotion/styled";

export const TabSection = styled.section`
  height: 35px;
  padding: 4px 8px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const TabList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  width: 90%;
`;

export const TabItem = styled.li<{ $isSelected: boolean }>`
  width: 100%;
  text-align: center;
  cursor: pointer;

  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary : theme.colors.grey300};
  padding-bottom: 10px;
  border-bottom: 3px solid
    ${({ $isSelected, theme }) =>
      $isSelected ? theme.colors.primary : theme.colors.grey100};

  &:hover {
    border-bottom: 3px solid lightblue;
  }
`;
