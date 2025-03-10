const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setter: React.Dispatch<React.SetStateAction<any>>,
  key?: string,
  id?: number,
) => {
  const value = e.target.value;
  if (/^\d*\.?\d*$/.test(value)) {
    setter((prev: any) =>
      id !== undefined
        ? prev.map((item: any) => (item.id === id ? { ...item, [key as string]: value } : item))
        : { ...prev, [key as string]: value },
    );
  }
};

export default handleInputChange;
