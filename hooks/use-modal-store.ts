import { create } from "zustand";
import { Server } from "@prisma/client";

export type ModalType = "createServer" | "invite" | "editServer" | "members" | "createChannel";

interface ModalData {
  server?: Server;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: {},
  onOpen: (type, data = {}) => set({ isOpen: true, type: type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
