import { create } from "zustand";
import Element from "../model/Element";
import ElementList from "../service/ElementApi";

interface useElementStoreProps {
  opened: boolean;
  handleOpen: (element?: Element) => void;
  handleClose: () => void;
  elements: Element[];
  deleteElement: (elementId: number) => void;
  addElement: (element: Element) => void;
  selectedElement: Element;
  editElement: (element: Element) => void;
}

const useElementStore = create<useElementStoreProps>((set) => ({
  opened: false,
  selectedElement: {} as Element,
  handleOpen: (element?: Element) =>
    set({ opened: true, selectedElement: element }),
  editElement: (element: Element) => {
    set((state) => ({
      elements: state.elements.map((d) =>
        d.number === element.number ? element : d
      ),
    }));
  },
  handleClose: () => set({ opened: false, selectedElement: {} as Element }),
  elements: ElementList,
  addElement: (element: Element) =>
    set((state) => ({ elements: [...state.elements, element] })),
  deleteElement: (elementId: number) =>
    set((state) => ({
      elements: state.elements.filter((d) => d.number !== elementId),
    })),
}));

export default useElementStore;
