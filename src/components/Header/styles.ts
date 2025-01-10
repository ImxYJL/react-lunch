import styled from "@emotion/styled";

export const Gnb = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderText = styled.h1`
  color: #fcfcfd;
  font-size: ${({ theme }) => theme.textStyles.title.fontSize};
  line-height: ${({ theme }) => theme.textStyles.title.lineHeight};
  font-weight: ${({ theme }) => theme.textStyles.title.fontWeight};
`;

export const RestaurantAddButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;
