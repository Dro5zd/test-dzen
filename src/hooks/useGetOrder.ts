interface HasId {
  id: number;
}

interface UseGetOrderProps<T> {
  elements: T[];
  selected: number | null;
}

export const useGetOrder = <T extends HasId>({
  elements,
  selected,
}: UseGetOrderProps<T>) => {
  const getOrder = () => {
    return elements.find((element) => element.id === selected);
  };

  const currentOrder = getOrder();

  return { currentOrder };
};
