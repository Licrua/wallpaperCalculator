export type Room = {
  length: string;
  width: string;
  height: string;
};

export type Element = { id: number; height: string; width: string };

export type Results = {
  wallpaperArea: string;
  rollsNeeded: number;
  wallpaperM2: string;
};

export const calculateMaterials = (
  room: Room,
  windows: Element[],
  doors: Element[],
  rollSize: string,
  rapport: string,
): Results => {
  const roomLength = parseFloat(room.length) || 0;
  const roomWidth = parseFloat(room.width) || 0;
  const roomHeight = parseFloat(room.height) || 0;
  const rapportValue = parseFloat(rapport) || 0;

  if (roomLength === 0 || roomWidth === 0 || roomHeight === 0) {
    return {
      wallpaperArea: "0.00",
      rollsNeeded: 0,
      wallpaperM2: "0.00",
    };
  }

  const wallArea = 2 * roomHeight * (roomLength + roomWidth);

  const windowArea = windows.reduce(
    (acc, w) => acc + (parseFloat(w.height) || 0) * (parseFloat(w.width) || 0),
    0,
  );

  const doorArea = doors.reduce(
    (acc, d) => acc + (parseFloat(d.height) || 0) * (parseFloat(d.width) || 0),
    0,
  );

  const wallpaperArea = wallArea - (windowArea + doorArea);

  const [rollWidth, rollHeight] = rollSize.split("x").map(parseFloat);

  const stripsPerRoll = rollHeight / (roomHeight + rapportValue);
  const wallpaperPerRoll = rollWidth * rollHeight;
  const stripsNeeded = wallpaperArea / (roomHeight * rollWidth);
  const rollsNeeded = Math.ceil(stripsNeeded / stripsPerRoll);

  return {
    wallpaperArea: wallpaperArea.toFixed(2),
    rollsNeeded,
    wallpaperM2: (rollsNeeded * wallpaperPerRoll).toFixed(2),
  };
};
