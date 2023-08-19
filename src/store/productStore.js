import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import yellowReload from "../assets/yellow-reload.png";
import blueReload from "../assets/blue-reload.png";
import bucket from "../assets/bucket.png";

const bucketStore = (set) => ({
  buckets: [],
  addBucket: (bucket) => {
    set((state) => ({
      buckets: [bucket, ...state.buckets],
    }));
  },
  removeBucket: (bucketId) => {
    set((state) => ({
      buckets: state.courses.filter((b) => b.id !== bucketId),
    }));
  },
});

const useBucketStore = create(
  devtools(
    persist(bucketStore, {
      name: "buckets",
    })
  )
);
// const productStore = (set) => ({});

// const useStore = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }));

// function Counter() {
//   const { count, inc } = useStore();
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   );
// }
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
  {
    id: 0,
    img: bucket,
    count: 82,
  },
  // {
  //   id: 1,
  //   img: bucket,
  //   count: 83,
  // },
];

export const useBuckettStore = create((set) => ({
  bucketData,
}));

export default bucketStore;
