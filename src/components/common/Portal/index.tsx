import { createPortal } from "react-dom";
import * as S from "./styles.ts";

interface PortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  return createPortal(
    <S.Portal id="portal">{children}</S.Portal>,
    document.body
  );
};

export default Portal;
