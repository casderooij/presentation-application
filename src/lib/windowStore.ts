import { atom } from "jotai";

export interface IWindow {
  id: number;
}

const reorderWindowToTop = (windowArray: IWindow[], window: IWindow | null) => {
  if (window === null) return windowArray;

  const indexOfWindow = windowArray.indexOf(window);
  return windowArray.splice(
    windowArray.length - 1,
    0,
    windowArray.splice(indexOfWindow, 1)[0]
  );
};

export const windowListAtom = atom<IWindow[]>([{ id: 0 }, { id: 1 }]);

export const focussedWindowAtom = atom<IWindow | null>(null);

export const orderedWindowListAtom = atom((get) =>
  reorderWindowToTop(get(windowListAtom), get(focussedWindowAtom))
);

// export const reorderWindowToTopAtom = atom(null, (get, set) => {
//   set(windowsAtom, reorderWindowToTop(get(windowsAtom), get(windowInFocus)));
// });
