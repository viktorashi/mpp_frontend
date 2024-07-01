import { create } from "zustand";
import Element from "../model/Element";
// import ElementList from "../service/ElementApi";

type State = {
  opened: boolean;
  elements: Element[];
  selectedElement: Element;
};

type Actions = {
  setElements: (elements: Element[]) => void;
  handleOpen: (element?: Element) => void;
  handleClose: () => void;
  deleteElement: (elementId: number) => void;
  addElement: (element: Element) => void;
  editElement: (element: Element) => void;
  resetElements: () => void;
};

const useElementStore = create<State & Actions>((set) => ({
  opened: false,
  selectedElement: {} as Element,
  elements: [] as Element[],
  resetElements: () => set({ elements: [] }),
  setElements: (elems: Element[]) => set({ elements: elems }),
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
  addElement: (element: Element) =>
    set((state) => ({ elements: [...state.elements, element] })),
  deleteElement: (elementId: number) =>
    set((state) => ({
      elements: state.elements.filter((d) => d.number !== elementId),
    })),
}));

export default useElementStore;
