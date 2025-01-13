import styled from "@emotion/styled";

export const ModalContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  color: ${({ theme }) => theme.colors.grey300};
  font-size: 16px;

  position: fixed; /* 화면에 고정 */
  bottom: 0; /* 아래에 고정 */
  left: 0;
  width: 100%; /* 가로 전체 */
  height: 92vh; /* 높이를 화면의 70%로 설정 */
  background-color: white; /* 모달 배경색 */
  border-radius: 16px 16px 0 0; /* 상단 모서리를 둥글게 */
  overflow-y: auto; /* 내용이 많을 경우 스크롤 */
  z-index: 1000; /* 다른 요소 위에 표시 */
  padding: 16px 32px; /* 내부 여백 */
`;

export const ModalTitle = styled.h1`
  font-weight: bold;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const Label = styled.label<{ $isRequired?: boolean }>`
  margin-bottom: 2px;

  &::after {
    content: ${({ $isRequired }) => ($isRequired ? "' *'" : "''")};
    color: red;
    margin-left: 4px;
  }
`;

export const Input = styled.input`
  border-radius: 6px;
  border: 1px solid #d0d5dd;
  height: 40px;
`;

export const Textarea = styled.textarea`
  border-radius: 6px;
  border: 1px solid #d0d5dd;
  resize: none;
  height: 65px;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.grey300};
  margin-top: 3px;
`;

export const Button = styled.button<{ $isPrimary: boolean }>`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  width: 100%;

  background-color: ${({ $isPrimary, theme }) =>
    $isPrimary ? theme.colors.primary : "white"};
  color: ${({ $isPrimary, theme }) =>
    $isPrimary ? "white" : theme.colors.grey300};
  border: ${({ $isPrimary, theme }) =>
    $isPrimary ? "none" : `1px solid ${theme.colors.grey300}`};
`;
