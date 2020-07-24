import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCategories = createSelector(
  [selectShop],
  shop => shop.categories
);

export const selectCategoriesForPreview = createSelector(
  [selectCategories],
  categories => Object.keys(categories).map(key => categories[key])
);

export const selectCategory = categoryUrlParam =>
  createSelector(
    [selectCategories],
    categories => categories[categoryUrlParam]
  );
