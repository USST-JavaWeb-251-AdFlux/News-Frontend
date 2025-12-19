import categoriesData from '~~/data/categories.json';

export const CATEGORIES = categoriesData;

export const getCategoryNameBySlug = (slug: string) => {
  const category = CATEGORIES.find(c => c.slug === slug);
  return category ? category.name : '';
};

export const getCategorySlugByName = (name: string) => {
  const category = CATEGORIES.find(c => c.name === name);
  return category ? category.slug : '';
};
