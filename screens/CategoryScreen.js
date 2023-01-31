import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

export const CategoryScreen = () => {
  return <FlatList data={CATEGORIES} />;
};
