import { create } from "zustand";

type User = {
  name: string | null;
  image: string | null;
};

type TicketStore = {
  user: User;
  setUser(user: User): void;
};

const useTicketStore = create<TicketStore>((set) => ({
  user: {
    name: null,
    image: null,
  },
  setUser(user: User) {
    set(() => ({ user }));
  },
}));

export { useTicketStore };
