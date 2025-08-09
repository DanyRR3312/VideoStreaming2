// src/hooks/usePreloadImages.js

import { slideData } from "../data/slideData.js";

export const usePreloadImages = () => {
  React.useEffect(() => {
    slideData.forEach(({ img }) => {
      const image = new Image();
      image.src = img;
    });
  }, []);
};
