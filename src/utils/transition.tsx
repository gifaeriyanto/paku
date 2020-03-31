const Transition = (property: string[], effect: string): string => {
  const result = property.map((item) => {
    return `${item} ${effect}`;
  });
  return result.toString();
};

export default Transition;
