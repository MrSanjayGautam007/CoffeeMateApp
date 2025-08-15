import AsyncStorage from "@react-native-async-storage/async-storage";
import { produce } from "immer";
import { create } from "zustand";
import CoffeeData from "../data/CoffeeData";
import BeansData from "../data/BeansData";
import { createJSONStorage, persist } from "zustand/middleware";
// console.log('CoffeeList in store',CoffeeData);
// console.log('BeanList in store',BeansData);
export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeanList: BeansData,
            CartPrice: 0,
            FavoritesList: [],
            CartList: [],
            OrderHistoryList: []
        }),
        {
            name: 'Coffee-Mate',
            storage: createJSONStorage(() => AsyncStorage)
        }
    ),
)