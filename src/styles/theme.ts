import { Theme as EmotionTheme } from "@emotion/react";

// 색상 타입
type ColorScheme = {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
};

// 텍스트 스타일 타입
type TextStyle = {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
};

type TextStyles = {
  title: TextStyle;
  subtitle: TextStyle;
  body: TextStyle;
  caption: TextStyle;
};

// Theme 인터페이스 확장
declare module "@emotion/react" {
  export interface Theme {
    colors: ColorScheme;
    textStyles: TextStyles;
  }
}

// Theme 정의
const theme: EmotionTheme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    primary: "#FE80A2",
    secondary: "#FACCD9",
    grey100: "#F8F9FA",
    grey200: "#D0D5DD",
    grey300: "#667085",
    grey400: "#344054",
    grey500: "#000000",
  },
  textStyles: {
    title: {
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    subtitle: {
      fontSize: "18px",
      lineHeight: "28px",
      fontWeight: 600,
    },
    body: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    caption: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
    },
  },
};

export default theme;
