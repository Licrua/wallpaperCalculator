type Props = {
  results: { wallpaperArea: string; rollsNeeded: number; wallpaperM2: string } | null;
  resetForm: () => void;
  onClick: () => void;
};

export default Props;
