import { useEffect, useState } from "react";
import { atom, selector, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const defaultValue = "";

export const productDetails = atom({
  key: "productDetails",
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});

export const productQuantity = atom({
  key: "productQuantity",
  default: [],
  // effects_UNSTABLE: [persistAtom]
})

export function useSSR(atom) {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(atom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? defaultValue : value, setValue] as const;
}
