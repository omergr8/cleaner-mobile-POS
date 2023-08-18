import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

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

export default bucketStore;
