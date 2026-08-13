"use client";

import { FaXmark } from "react-icons/fa6";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

import styles from "./styles.module.css";
import JoinUSModal from "./join-us";
import { closeModal } from "../redux/slices/modals";

type ModalKey = "JOIN_US" | "PARTNER_US";

interface ModalItem {
  id: number;
  key: ModalKey;
  component: React.ReactNode;
}

const ModalData: ModalItem[] = [
  {
    id: 1,
    key: "JOIN_US",
    component: <JoinUSModal />,
  },
  {
    id: 2,
    key: "PARTNER_US",
    component: <>Partner US</>,
  },
];

const Modal: React.FC = () => {
  const { activeModal } = useAppSelector((state) => state.modals);
      const dispatch = useAppDispatch();
  
  
  const currentModal = ModalData.find(
      (modal) => modal.key === activeModal
    );
    
    const handleModalClose = () => {
        dispatch(closeModal())
    }
    
    if (!activeModal) return null;

  return (
    <div className={styles["modal-main"]}>
      <div className={styles["modal-body"]}>
        <FaXmark className={styles["close-modal"]} onClick={handleModalClose} />
        {currentModal?.component}
      </div>
    </div>
  );
};

export default Modal;