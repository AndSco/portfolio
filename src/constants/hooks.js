import { useState } from "react"

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = (content = false) => {
    setIsModalOpen(!isModalOpen)
  }

  return { isModalOpen, handleModal }
}
