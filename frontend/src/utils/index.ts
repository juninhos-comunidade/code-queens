
export type Choose = {
  id: string | number;
};

export const isSelected = <T extends Choose>(id: T["id"],items: T[]): boolean => {
  return items.some((item) => item.id === id);
};

export const toggleSelection = <T extends Choose>(item: T,items: T[]): T[] => {
  return isSelected(item.id, items)
    ? items.filter(({ id }) => id !== item.id)
    : [...items, item];
};

export const getYear = new Date().getFullYear();