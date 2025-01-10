import styled from "@emotion/styled";

export const ModalContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  position: fixed; /* 화면에 고정 */
  bottom: 0; /* 아래에 고정 */
  left: 0;
  width: 100%; /* 가로 전체 */
  height: 60vh; /* 높이를 화면의 70%로 설정 */
  background-color: white; /* 모달 배경색 */
  border-radius: 16px 16px 0 0; /* 상단 모서리를 둥글게 */
  overflow-y: auto; /* 내용이 많을 경우 스크롤 */
  z-index: 1000; /* 다른 요소 위에 표시 */
  padding: 16px; /* 내부 여백 */
`;

export const RestaurantItem = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;
`;

export const RestaurantLogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};

  img {
    width: 36px;
    height: 36px;
  }
`;

export const RestaurantInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;

  position: absolute;
  right: 0;
  margin-right: 20px;
`;

export const Name = styled.h3`
  margin: 0;
`;

export const Distance = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const Description = styled.p`
  display: -webkit-box;

  padding-top: 2px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Url = styled.p``;

export const Button = styled.button<{ $isPrimary: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  background-color: ${({ $isPrimary, theme }) =>
    $isPrimary ? theme.colors.primary : "white"};
  color: ${({ $isPrimary, theme }) =>
    $isPrimary ? "white" : theme.colors.grey300};
  border: ${({ $isPrimary, theme }) =>
    $isPrimary ? "none" : `1px solid ${theme.colors.grey300}`};
`;
