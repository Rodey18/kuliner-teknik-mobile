// RestaurantContext.tsx
import {restaurants_d} from 'data/dummy';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import {Restaurant} from 'utils/type'; // Adjust the import according to your project structure

type RestaurantContextType = {
  restaurants: Restaurant[];
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>;
};

const RestaurantContext = createContext<RestaurantContextType | null>(null);

type RestaurantProviderProps = {
  children: ReactNode;
};

export const RestaurantProvider: React.FC<RestaurantProviderProps> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const fetchRestaurants = () => {
    const data = restaurants_d;
    setRestaurants(data);
  };

  useEffect(() => {
    fetchRestaurants();
  });

  const contextValue = useMemo(
    () => ({
      restaurants,
      setRestaurants,
    }),
    [restaurants, setRestaurants],
  );

  return (
    <RestaurantContext.Provider value={contextValue}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error(
      'useRestaurantContext must be used within a RestaurantProvider',
    );
  }
  return context;
};
