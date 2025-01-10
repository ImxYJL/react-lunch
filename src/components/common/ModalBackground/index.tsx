import React, { PropsWithChildren, useRef } from "react";

import * as S from "./styles.ts";
import useModalClose from "../../../hooks/useModalClose.ts";

interface ModalBackgroundProps {
  closeModal: (() => void) | null;
}
const ModalBackground: React.FC<PropsWithChildren<ModalBackgroundProps>> = ({
  children,
  closeModal,
}) => {
  const modalBackgroundRef = useRef<HTMLDivElement>(null);
  useModalClose({ closeModal, modalBackgroundRef });

  return (
    <S.ModalBackground ref={modalBackgroundRef}>{children}</S.ModalBackground>
  );
};

export default ModalBackground;
