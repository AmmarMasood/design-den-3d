import {
  swatch,
  fileIcon,
  ai,
  logoShirt,
  stylishShirt,
  tshirt,
  pants,
  shorts,
  coats,
} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const ClothTypes = [
  {
    name: "tshirt",
    icon: tshirt,
  },
  {
    name: "pants",
    icon: pants,
  },
  {
    name: "shorts",
    icon: shorts,
  },
  {
    name: "coats",
    icon: coats,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fulldecal",
    filterTab: "stylishShirt",
  },
};
