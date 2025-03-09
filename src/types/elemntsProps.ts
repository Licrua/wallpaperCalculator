type Props = {
  title: string;
  label: string;
  elements: { id: number; height: string; width: string }[];
  addElement: () => void;
  removeElement: (id: number) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: any,
    key: string,
    id: number,
  ) => void;
  setElements: React.Dispatch<React.SetStateAction<any>>;
};
export default Props