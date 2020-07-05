import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("test starting content");

  const handleModal = (content = false) => {
    setIsModalOpen(!isModalOpen);
    if (content) {
      setModalContent(content);
    }
  }

  return {isModalOpen, modalContent, handleModal};
}