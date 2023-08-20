import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import yellowReload from "../assets/yellow-reload.png";
import blueReload from "../assets/blue-reload.png";
import bucket from "../assets/bucket.png";

// - Products State Setup
const products = [
  // {
  //   id: 0,
  //   img: bucket,
  //   count: 82,
  //   productData: [
  //     {
  //       id: 0,
  //       title: "QUICK $8",
  //       price: 8,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "Colors $9",
  //       price: 9,
  //       img: bucket,
  //       count: 83,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Whites$10",
  //       price: 10,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Deep $12",
  //       price: 12,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 1,
  //   img: bucket,
  //   count: 83,
  //   productData: [
  //     {
  //       id: 0,
  //       title: "QUICK $8",
  //       price: 8,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "Colors $9",
  //       price: 9,
  //       img: bucket,
  //       count: 83,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Whites$10",
  //       price: 10,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Deep $12",
  //       price: 12,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   img: bucket,
  //   count: 84,
  //   productData: [
  //     {
  //       id: 0,
  //       title: "QUICK $8",
  //       price: 8,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "Colors $9",
  //       price: 9,
  //       img: bucket,
  //       count: 83,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Whites$10",
  //       price: 10,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Deep $12",
  //       price: 12,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   img: bucket,
  //   count: 85,
  //   productData: [
  //     {
  //       id: 0,
  //       title: "QUICK $8",
  //       price: 8,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "Colors $9",
  //       price: 9,
  //       img: bucket,
  //       count: 83,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Whites$10",
  //       price: 10,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Deep $12",
  //       price: 12,
  //       img: bucket,
  //       count: 82,
  //       subCategories: [
  //         {
  //           id: 0,
  //           title: "Detergent-Mountain Fresh",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Cold Water",
  //           icon: yellowReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Time Dry 45 min",
  //           icon: blueReload,
  //           type: "CHANGE",
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Softner-None",
  //           icon: yellowReload,
  //           subCategoriesData: [
  //             {
  //               id: 0,
  //               title: "Mountain Fresh",
  //               price: 2,
  //             },
  //             {
  //               id: 1,
  //               title: "Tide - Itchy",
  //               price: 3,
  //             },
  //             {
  //               id: 2,
  //               title: "Gain-Smell Strong",
  //               price: 2,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
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
