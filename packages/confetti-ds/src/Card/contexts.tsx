import { createContext } from "react";

export const CardContext = createContext<{
  color: string;
  skin?: string;
  cardType?: string;
}>(null);
