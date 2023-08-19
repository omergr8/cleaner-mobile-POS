import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import yellowReload from "../assets/yellow-reload.png";
import blueReload from "../assets/blue-reload.png";
import bucket from "../assets/bucket.png";

// - Products State Setup
const products = [
  {
    id: 0,
    title: "QUICK $8",
    subCategories: [
      {
        id: 0,
        title: "Detergent-Mountain Fresh",
        icon: yellowReload,
        type: "CHANGE",
      },
      {
        id: 1,
        title: "Cold Water",
        icon: yellowReload,
        type: "CHANGE",
      },
      {
        id: 2,
        title: "Time Dry 45 min",
        icon: blueReload,
        type: "CHANGE",
      },
      {
        id: 3,
        title: "Softner-None",
        icon: yellowReload,
      },
    ],
  },
  {
    id: 1,
    title: "Colors $9",
    subCategories: [
      {
        id: 0,
        title: "Detergent-Mountain Fresh",
        icon: yellowReload,
        type: "CHANGE",
      },
      {
        id: 1,
        title: "Warm Water",
        icon: yellowReload,
        type: "CHANGE",
      },
      {
        id: 2,
        title: "Very Dry",
        icon: blueReload,
        type: "CHANGE",
      },
      {
        id: 3,
        title: "Softner-Downey",
        icon: yellowReload,
      },
    ],
  },
  {
    id: 2,
    title: "Whites$10",
    subCategories: [
      {
        id: 0,
        title: "Detergent-Mountain Fresh",
        icon: yellowReload,
        type: "CHANGE",
      },
      {
        id: 1,
        title: "Warm Water",
        icon: yellowReload,
        type: "CHANGE",
      },
      {
        id: 2,
        title: "Very Dry",
        icon: blueReload,
        type: "CHANGE",
      },
      {
        id: 3,
        title: "Softner-Downey",
        icon: yellowReload,
      },
    ],
  },
  {
    id: 3,
    title: "Deep $12",
    subCategories: [
      {
        id: 0,
        title: "Detergent-Mountain Fresh",
        icon: yellowReload,
        type: "CHANGE",
      },
      {
        id: 1,
        title: "Warm Water",
        icon: yellowReload,
        type: "CHANGE",
      },
      {
        id: 2,
        title: "Very Dry",
        icon: blueReload,
        type: "CHANGE",
      },
      {
        id: 3,
        title: "Softner-Downey",
        icon: yellowReload,
      },
    ],
  },
];

export const useStore = create((set) => ({
  products: products,
}));

// - Bucket Image Setup
const bucketData = [
  // {
  //   id: 0,
  //   img: bucket,
  //   count: 82,
  // },
  // {
  //   id: 1,
  //   img: bucket,
  //   count: 83,
  // },
];

export const useBuckettStore = create((set) => ({
  bucketData,
}));
