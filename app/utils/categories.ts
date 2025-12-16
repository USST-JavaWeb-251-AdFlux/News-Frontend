export const CATEGORIES = [
  { name: '科技', slug: 'tech' },
  { name: '财经', slug: 'finance' },
  { name: '体育', slug: 'sports' },
  { name: '娱乐', slug: 'entertainment' },
  { name: '生活', slug: 'lifestyle' },
];

export const getCategoryNameBySlug = (slug: string) => {
  const category = CATEGORIES.find(c => c.slug === slug);
  return category ? category.name : '';
};

export const getCategorySlugByName = (name: string) => {
  const category = CATEGORIES.find(c => c.name === name);
  return category ? category.slug : '';
};
