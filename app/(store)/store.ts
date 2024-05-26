import { create } from "zustand";

type DateStore = {
  date: string | undefined;
  newDate: any[] | undefined;
  rechercheTag: string;
  nomProprio: string | undefined;
  srcImage: string | undefined;
  srcImage2: string | undefined;
  userId: string | undefined;
  buyingdetails: any[];
  setDate: (newDate: string) => void;
  setNewDate: (newData: any[]) => void;
  setRechercheTag: (tag: string) => void;
  setNomProprio: (tag: string) => void;
  setSrcImage: (tag: string) => void;
  setSrcImage2: (tag: string) => void;
  setUserId: (tag: string) => void;
  setBuyingDetails: (details: any[]) => void;
  removeBuyingDetail: (index: number) => void; // Ajout de removeBuyingDetail
};

export const useDateStore = create<DateStore>((set) => ({
  date: undefined,
  newDate: undefined,
  rechercheTag: "",
  nomProprio: undefined,
  srcImage: undefined,
  srcImage2: undefined,
  userId: undefined,
  buyingdetails: [], // Initialisation de buyingdetails
  setDate: (newDate) => set({ date: newDate }),
  setNewDate: (newData) => set({ newDate: newData }),
  setRechercheTag: (tag) => set({ rechercheTag: tag }),
  setNomProprio: (nom) => set({ nomProprio: nom }),
  setSrcImage: (src) => set({ srcImage: src }),
  setSrcImage2: (src) => set({ srcImage2: src }),
  setUserId: (id) => set({ userId: id }),
  setBuyingDetails: (details) => set({ buyingdetails: details }),
  removeBuyingDetail: (index) => set((state) => ({
    buyingdetails: state.buyingdetails.filter((_, i) => i !== index)
  }))
}));
