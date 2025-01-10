import styled from "@emotion/styled";

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

export const RestaurantName = styled.h3`
  margin: 0;
`;

export const RestaurantDistance = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const RestaurantDescription = styled.p`
  display: -webkit-box;

  padding-top: 2px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
