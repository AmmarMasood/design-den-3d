import { proxy } from "valtio";
import { ClothTypes } from "../config/constants";

const state = proxy({
  intro: true,
  color: `#EFBD4E`,
  isLogoTexture: true, //are we displaying logo on shirt
  isFullTexture: false,
  logoDecal: "/zev-log.png",
  fulldecal: "/zev-log.png",
  clothingSelected: ClothTypes[0].name,
});

export default state;
