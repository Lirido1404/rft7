import { create } from "zustand";

type DateStore = {
  date: string | undefined;
  newDate: any[] | undefined;
  rechercheTag: string;
  nomProprio: string | undefined;
  srcImage: string | undefined;
  srcImage2: string | undefined;
  userId: string | undefined;
  setDate: (newDate: string) => void;
  setNewDate: (newData: any[]) => void;
  setRechercheTag: (tag: string) => void;
  setNomProprio: (tag: string) => void;
  setSrcImage: (tag: string) => void;
  setSrcImage2: (tag: string) => void;
  setUserId: (tag: string) => void;
};

export const useDateStore = create<DateStore>((set) => ({
  date: undefined,
  newDate: undefined,
  rechercheTag: "",
  nomProprio: undefined,
  srcImage: undefined,
  srcImage2: undefined,
  userId: undefined,
  setDate: (newDate) => set({ date: newDate }),
  setNewDate: (newData) => set({ newDate: newData }),
  setRechercheTag: (tag) => set({ rechercheTag: tag }),
  setNomProprio: (nom) => set({ nomProprio: nom }),
  setSrcImage: (src) => set({ srcImage: src }),
  setSrcImage2: (src) => set({ srcImage2: src }),
  setUserId: (id) => set({ userId: id }),
}));
