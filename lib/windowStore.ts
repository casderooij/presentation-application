import { atom } from "jotai";

export interface IWindow {
  id: number;
}

export const windowsAtom = atom<IWindow[]>([{ id: 0 }, { id: 1 }]);

export const readWindowsAtom = atom((get) => get(windowsAtom));

export const windowInFocus = atom<IWindow | null>(null);

export const reorderWindowToTop = (
  windows: IWindow[],
  window: IWindow
): IWindow[] => {
  const indexOfId = windows.indexOf(window);
  windows.splice(indexOfId, 1);
  return windows.concat(window);
};
