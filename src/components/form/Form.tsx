// import { useState } from "react";
// import styles from "@/styles/form/form.module.css";
// import add from "@/assets/images/add.svg";
// import stick from "@/assets/images/magicStick.svg";
// import cross from "@/assets/images/cross.svg";
// import { rollSizes } from "../../data/rollSizes";
// import { rapports } from "../../data/rapports";
// import { roomParams } from "../../data/roomParams";
// import { elements } from "../../data/elements";
// import Button from "../general/Button";

// function Form() {
//   const [rollSize, setRollSize] = useState(rollSizes[0]);
//   const [rapport, setRapport] = useState(Object.keys(rapports)[0]);
//   const [windows, setWindows] = useState<{ id: number; height: number; width: number }[]>([]);
//   const [doors, setDoors] = useState<{ id: number; height: number; width: number }[]>([]);
//   console.log("windows", windows);

//   //
//   const addWindow = () => {
//     setWindows([...windows, { id: Date.now(), height: 0, width: 0 }]);
//   };

//   const addDoor = () => {
//     setDoors([...doors, { id: Date.now(), height: 0, width: 0 }]);
//   };

//   const removeWindow = (id: number) => {
//     setWindows(windows.filter((win) => win.id !== id));
//   };

//   const removeDoor = (id: number) => {
//     setDoors(doors.filter((door) => door.id !== id));
//   };
//   //

//   return (
//     <section className={styles.container}>
//       <form>
//         <h2 className={styles.title}>Параметры комнаты</h2>
//         <div className={styles.grid}>
//           {roomParams.map(({ label, placeholder }) => (
//             <label key={label} className={styles.label}>
//               <span className={styles.paragraph}>{label}</span>
//               <input type="text" placeholder={placeholder} className={styles.input} />
//             </label>
//           ))}
//         </div>
//         <div className={styles.metrics}>
//           <div className={styles.parametrs}>
//             <h2 className={styles.title}>Параметры рулона</h2>
//             <div className={styles.buttonsGroup}>
//               {rollSizes.map((size) => (
//                 <Button
//                   type="button"
//                   key={size}
//                   isActive={rollSize === size}
//                   onClick={() => setRollSize(size)}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>
//           <div className={styles.parametrs}>
//             <h2 className={styles.title}>Раппорт</h2>
//             <div className={styles.buttonsGroup}>
//               {Object.entries(rapports).map(([size, className]) => {
//                 return (
//                   <Button
//                     type="button"
//                     className={styles[className]}
//                     key={size}
//                     isActive={rapport === size}
//                     onClick={() => setRapport(size)}
//                   >
//                     {size}
//                   </Button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {elements.map(({ title, label }) => (
//           <div key={title} className={styles.section}>
//             <h2 className={styles.title}>{title}</h2>

//             {/* карточка */}
//             <div className={styles.items}>
//               {(title === "Параметры окон" ? windows : doors).map(({ id, height, width }) => (
//                 <div key={id} className={styles.windowItem}>
//                   <div className={styles.windowSection}>
//                     <h3 className={styles.windowTitle}>
//                       {title === "Параметры окон" ? "Окно" : "Дверь"}
//                     </h3>
//                     <button
//                       className={styles.removeButton}
//                       onClick={() =>
//                         title === "Параметры окон" ? removeWindow(id) : removeDoor(id)
//                       }
//                     >
//                       <img src={cross} alt="cross" />
//                     </button>
//                   </div>
//                   <div className={styles.buttons}>
//                     <label>
//                       <span className={styles.paragraph}>Высота м</span>
//                       <input className={styles.windowField} type="text" value={height} />
//                     </label>
//                     <label>
//                       <span>Ширина м</span>
//                       <input className={styles.windowField} type="text" value={width} />
//                     </label>
//                   </div>
//                 </div>
//               ))}
//               <div className={styles.buttonSection}>
//                 <button
//                   type="button"
//                   onClick={title === "Параметры окон" ? addWindow : addDoor}
//                   className={styles.addButton}
//                 >
//                   <img src={add} alt="add" className={styles.icon} />
//                 </button>
//                 <span>{label}</span>
//               </div>
//             </div>
//           </div>
//         ))}

//         <Button type="submit" isActive>
//           <img src={stick} alt="stick" className={styles.icon} />
//           <span>Рассчитать кол-во материалов</span>
//         </Button>
//         {/* кнопка расчета */}
//       </form>
//     </section>
//   );
// }

// export default Form;

// import { useState } from "react";
// import styles from "@/styles/form/form.module.css";
// import add from "@/assets/images/add.svg";
// import stick from "@/assets/images/magicStick.svg";
// import cross from "@/assets/images/cross.svg";
// import { rollSizes } from "../../data/rollSizes";
// import { rapports } from "../../data/rapports";
// import { roomParams } from "../../data/roomParams";
// import { elements } from "../../data/elements";
// import Button from "../general/Button";

// function Form() {
//   const [rollSize, setRollSize] = useState(rollSizes[0]); // Размер рулона
//   const [rapport, setRapport] = useState(Object.keys(rapports)[0]); // Раппорт
//   const [windows, setWindows] = useState<{ id: number; height: number; width: number }[]>([]);
//   const [doors, setDoors] = useState<{ id: number; height: number; width: number }[]>([]);
//   const [room, setRoom] = useState<{ length: number; width: number; height: number }>({
//     length: 0,
//     width: 0,
//     height: 0,
//   });

//   // Добавление окон и дверей
//   const addWindow = () => setWindows([...windows, { id: Date.now(), height: 0, width: 0 }]);
//   const addDoor = () => setDoors([...doors, { id: Date.now(), height: 0, width: 0 }]);
//   const removeWindow = (id: number) => setWindows(windows.filter((win) => win.id !== id));
//   const removeDoor = (id: number) => setDoors(doors.filter((door) => door.id !== id));

//   // Функция расчета параметров
//   const calculateMaterials = () => {
//     const wallArea =
//       2 * room.height * (room.length + room.width); // Площадь стен (2 высоты × (длина + ширина))
//     const windowArea = windows.reduce((acc, w) => acc + w.height * w.width, 0);
//     const doorArea = doors.reduce((acc, d) => acc + d.height * d.width, 0);
//     const wallpaperArea = wallArea - (windowArea + doorArea); // Площадь оклейки

//     const rollWidth = parseFloat(rollSize.split("x")[0]); // Ширина рулона (например, "1.06x10" → 1.06)
//     const rollHeight = parseFloat(rollSize.split("x")[1]); // Длина рулона

//     const stripsPerRoll = Math.floor(rollHeight / (room.height + parseFloat(rapport))); // Количество полос в рулоне
//     const stripWidth = rollWidth;
//     const stripsNeeded = Math.ceil(wallpaperArea / room.height / stripWidth); // Количество полос для оклейки
//     const rollsNeeded = Math.ceil(stripsNeeded / stripsPerRoll); // Количество рулонов

//     return {
//       wallpaperArea: wallpaperArea.toFixed(2),
//       rollsNeeded,
//       wallpaperM2: (rollsNeeded * rollWidth * rollHeight).toFixed(2),
//     };
//   };

//   const { wallpaperArea, rollsNeeded, wallpaperM2 } = calculateMaterials();

//   return (
//     <section className={styles.container}>
//       <form>
//         <h2 className={styles.title}>Параметры комнаты</h2>
//         <div className={styles.grid}>
//           {Object.keys(room).map((key) => (
//             <label key={key} className={styles.label}>
//               <span className={styles.paragraph}>{key === "length" ? "Длина" : key === "width" ? "Ширина" : "Высота"} м</span>
//               <input
//                 type="text"
//                 value={room[key as keyof typeof room]}
//                 onChange={(e) =>
//                   setRoom({ ...room, [key]: parseFloat(e.target.value) || 0 })
//                 }
//                 className={styles.input}
//               />
//             </label>
//           ))}
//         </div>

//         <div className={styles.metrics}>
//           <div className={styles.parametrs}>
//             <h2 className={styles.title}>Параметры рулона</h2>
//             <div className={styles.buttonsGroup}>
//               {rollSizes.map((size) => (
//                 <Button
//                   type="button"
//                   key={size}
//                   isActive={rollSize === size}
//                   onClick={() => setRollSize(size)}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>
//           <div className={styles.parametrs}>
//             <h2 className={styles.title}>Раппорт</h2>
//             <div className={styles.buttonsGroup}>
//               {Object.entries(rapports).map(([size, className]) => (
//                 <Button
//                   type="button"
//                   className={styles[className]}
//                   key={size}
//                   isActive={rapport === size}
//                   onClick={() => setRapport(size)}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {elements.map(({ title, label }) => (
//           <div key={title} className={styles.section}>
//             <h2 className={styles.title}>{title}</h2>
//             <div className={styles.items}>
//               {(title === "Параметры окон" ? windows : doors).map(({ id, height, width }) => (
//                 <div key={id} className={styles.windowItem}>
//                   <div className={styles.windowSection}>
//                     <h3 className={styles.windowTitle}>
//                       {title === "Параметры окон" ? "Окно" : "Дверь"}
//                     </h3>
//                     <button
//                       className={styles.removeButton}
//                       onClick={() =>
//                         title === "Параметры окон" ? removeWindow(id) : removeDoor(id)
//                       }
//                     >
//                       <img src={cross} alt="cross" />
//                     </button>
//                   </div>
//                   <div className={styles.buttons}>
//                     <label>
//                       <span className={styles.paragraph}>Высота м</span>
//                       <input
//                         className={styles.windowField}
//                         type="number"
//                         value={height}
//                         onChange={(e) =>
//                           setWindows(
//                             windows.map((win) =>
//                               win.id === id ? { ...win, height: parseFloat(e.target.value) || 0 } : win
//                             )
//                           )
//                         }
//                       />
//                     </label>
//                     <label>
//                       <span>Ширина м</span>
//                       <input
//                         className={styles.windowField}
//                         type="number"
//                         value={width}
//                         onChange={(e) =>
//                           setWindows(
//                             windows.map((win) =>
//                               win.id === id ? { ...win, width: parseFloat(e.target.value) || 0 } : win
//                             )
//                           )
//                         }
//                       />
//                     </label>
//                   </div>
//                 </div>
//               ))}
//               <div className={styles.buttonSection}>
//                 <button
//                   type="button"
//                   onClick={title === "Параметры окон" ? addWindow : addDoor}
//                   className={styles.addButton}
//                 >
//                   <img src={add} alt="add" className={styles.icon} />
//                 </button>
//                 <span>{label}</span>
//               </div>
//             </div>
//           </div>
//         ))}

//         <Button type="submit" isActive>
//           <img src={stick} alt="stick" className={styles.icon} />
//           <span>Рассчитать кол-во материалов</span>
//         </Button>

//         {/* Вывод результатов */}
//         <div className={styles.results}>
//           <p>Площадь оклейки: {wallpaperArea} м²</p>
//           <p>Кол-во рулонов: {rollsNeeded}</p>
//           <p>Кол-во м² обоев: {wallpaperM2} м²</p>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default Form;

// import { useState } from "react";
// import styles from "@/styles/form/form.module.css";
// import add from "@/assets/images/add.svg";
// import stick from "@/assets/images/magicStick.svg";
// import cross from "@/assets/images/cross.svg";
// import { rollSizes } from "../../data/rollSizes";
// import { rapports } from "../../data/rapports";
// import { roomParams } from "../../data/roomParams";
// import { elements } from "../../data/elements";
// import Button from "../general/Button";

// function Form() {
//   const [rollSize, setRollSize] = useState(rollSizes[0]);
//   const [rapport, setRapport] = useState(Object.keys(rapports)[0]);
//   const [windows, setWindows] = useState<{ id: number; height: string; width: string }[]>([]);
//   const [doors, setDoors] = useState<{ id: number; height: string; width: string }[]>([]);
//   const [room, setRoom] = useState({
//     length: roomParams[0].placeholder,
//     width: roomParams[1].placeholder,
//     height: roomParams[2].placeholder,
//   });
//   const [results, setResults] = useState<{
//     wallpaperArea: string;
//     rollsNeeded: number;
//     wallpaperM2: string;
//   } | null>(null);

//   const addWindow = () => setWindows([...windows, { id: Date.now(), height: "0", width: "0" }]);
//   const addDoor = () => setDoors([...doors, { id: Date.now(), height: "0", width: "0" }]);
//   const removeWindow = (id: number) => setWindows(windows.filter((win) => win.id !== id));
//   const removeDoor = (id: number) => setDoors(doors.filter((door) => door.id !== id));

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setter: React.Dispatch<React.SetStateAction<any>>,
//     key?: string,
//     id?: number,
//   ) => {
//     const value = e.target.value;
//     if (/^\d*\.?\d*$/.test(value)) {
//       setter((prev: any) =>
//         id !== undefined
//           ? prev.map((item: any) => (item.id === id ? { ...item, [key as string]: value } : item))
//           : { ...prev, [key as string]: value },
//       );
//     }
//   };
//   const calculateMaterials = () => {
//     const roomLength = 14.2; // длина комнаты
//     const roomWidth = 28.5; // ширина комнаты
//     const roomHeight = 18.5; // высота комнаты
//     const rapportValue = 0; // раппорт

//     // Площадь стен: 2 * (длина + ширина) * высота
//     const wallArea = 2 * (roomLength + roomWidth) * roomHeight;

//     // Площадь окон: два окна по 2.5 м (высота) и 3.2 м (ширина)
//     const windowArea = 2 * (2.5 * 3.2); // два окна

//     // Площадь для оклейки (вычитаем площадь окон)
//     const wallpaperArea = wallArea - windowArea;

//     // Размер рулона
//     const rollWidth = 1.06; // ширина рулона в метрах
//     const rollHeight = 10; // высота рулона в метрах

//     // Количество полос на рулоне: высота рулона / (высота комнаты + раппорт)
//     const stripsPerRoll = rollHeight / (roomHeight + rapportValue);

//     // Площадь, которую покроет 1 рулон
//     const wallpaperPerRoll = rollWidth * rollHeight; // площадь покрытия одного рулона

//     // Количество полос, которые понадобятся для поклейки
//     const stripsNeeded = wallpaperArea / (roomHeight * rollWidth);

//     // Количество рулонов, необходимых для покрытия всей площади
//     const rollsNeeded = Math.ceil(stripsNeeded / stripsPerRoll);

//     setResults({
//       wallpaperArea: wallpaperArea.toFixed(2), // площадь оклейки
//       rollsNeeded, // количество рулонов
//       wallpaperM2: (rollsNeeded * wallpaperPerRoll).toFixed(2), // площадь покрытия в m²
//     });
//   };
 

//   return (
//     <section className={styles.container}>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <h2 className={styles.title}>Параметры комнаты</h2>
//         <div className={styles.grid}>
//           {Object.keys(room).map((key, index) => (
//             <label key={key} className={styles.label}>
//               <span className={styles.paragraph}>{roomParams[index].label}</span>
//               <input
//                 type="text"
//                 value={room[key as keyof typeof room]}
//                 onChange={(e) => handleInputChange(e, setRoom, key)}
//                 className={styles.input}
//               />
//             </label>
//           ))}
//         </div>

//         <div className={styles.metrics}>
//           <div className={styles.parametrs}>
//             <h2 className={styles.title}>Параметры рулона</h2>
//             <div className={styles.buttonsGroup}>
//               {rollSizes.map((size) => (
//                 <Button
//                   type="button"
//                   key={size}
//                   isActive={rollSize === size}
//                   onClick={() => setRollSize(size)}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>
//           <div className={styles.parametrs}>
//             <h2 className={styles.title}>Раппорт</h2>
//             <div className={styles.buttonsGroup}>
//               {Object.entries(rapports).map(([size, className]) => (
//                 <Button
//                   type="button"
//                   className={styles[className]}
//                   key={size}
//                   isActive={rapport === size}
//                   onClick={() => setRapport(size)}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>
//         {elements.map(({ title, label }) => (
//           <div key={title} className={styles.section}>
//             <h2 className={styles.title}>{title}</h2>
//             <div className={styles.items}>
//               {(title === "Параметры окон" ? windows || [] : doors || []).map(
//                 ({ id, height, width }) => (
//                   <div key={id} className={styles.windowItem}>
//                     <div className={styles.windowSection}>
//                       <h3 className={styles.windowTitle}>
//                         {title === "Параметры окон" ? "Окно" : "Дверь"}
//                       </h3>
//                       <button
//                         className={styles.removeButton}
//                         onClick={() =>
//                           title === "Параметры окон" ? removeWindow(id) : removeDoor(id)
//                         }
//                       >
//                         <img src={cross} alt="cross" />
//                       </button>
//                     </div>
//                     <div className={styles.buttons}>
//                       <label>
//                         <span className={styles.paragraph}>Высота м</span>
//                         <input
//                           className={styles.windowField}
//                           type="text"
//                           value={height}
//                           onChange={(e) =>
//                             handleInputChange(
//                               e,
//                               title === "Параметры окон" ? setWindows : setDoors,
//                               "height",
//                               id,
//                             )
//                           }
//                         />
//                       </label>
//                       <label>
//                         <span>Ширина м</span>
//                         <input
//                           className={styles.windowField}
//                           type="text"
//                           value={width}
//                           onChange={(e) =>
//                             handleInputChange(
//                               e,
//                               title === "Параметры окон" ? setWindows : setDoors,
//                               "width",
//                               id,
//                             )
//                           }
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 ),
//               )}
//               <div className={styles.buttonSection}>
//                 <button
//                   type="button"
//                   onClick={title === "Параметры окон" ? addWindow : addDoor}
//                   className={styles.addButton}
//                 >
//                   <img src={add} alt="add" className={styles.icon} />
//                 </button>
//                 <span>{label}</span>
//               </div>
//             </div>
//           </div>
//         ))}

//         <Button type="button" isActive onClick={calculateMaterials}>
//           <img src={stick} alt="stick" className={styles.icon} />
//           <span>Рассчитать кол-во материалов</span>
//         </Button>

//         {results && (
//           <div className={styles.results}>
//             <h2 className={styles.resultsTitle}>Результаты</h2>
//             <div className={styles.resultSection}>
//               <div className={styles.resultContainer}>
//                 <h3 className={styles.resultsText}>{results.rollsNeeded}</h3>
//                 <p className={styles.resultsSubtitle}>Кол-во рулонов</p>
//               </div>
//               <div className={styles.resultContainer}>
//                 <h3 className={styles.resultsText}>{results.wallpaperArea}</h3>
//                 <p className={styles.resultsSubtitle}>Кол-во m² обоев</p>
//               </div>
//               <div className={styles.resultContainer}>
//                 <h3 className={styles.resultsText}>{results.wallpaperM2} м²</h3>
//                 <p className={styles.resultsSubtitle}>Площадь оклейки</p>
//               </div>
//             </div>
//             <div className={styles.buttonsContainer}>
//               <button className={styles.resetButton}>Сбросить параметры</button>
//               <button className={styles.catalogButton}>Перейти в каталог</button>
//             </div>
//           </div>
//         )}
//       </form>
//     </section>
//   );
// }

// export default Form;



// import { useState } from "react";
// import styles from "@/styles/form/form.module.css";
// import add from "@/assets/images/add.svg";
// import stick from "@/assets/images/magicStick.svg";
// import cross from "@/assets/images/cross.svg";
// import { rollSizes } from "../../data/rollSizes";
// import { rapports } from "../../data/rapports";
// import { roomParams } from "../../data/roomParams";
// import { elements } from "../../data/elements";
// import Button from "../general/Button";

// function Form() {
//   const [rollSize, setRollSize] = useState(rollSizes[0]);
//   const [rapport, setRapport] = useState(Object.keys(rapports)[0]);
//   const [windows, setWindows] = useState<{ id: number; height: string; width: string }[]>([]);
//   const [doors, setDoors] = useState<{ id: number; height: string; width: string }[]>([]);
//   const [room, setRoom] = useState({
//     length: "",
//     width: "",
//     height: "",
//   });
//   const [results, setResults] = useState<{
//     wallpaperArea: string;
//     rollsNeeded: number;
//     wallpaperM2: string;
//   } | null>(null);

//   const addWindow = () => setWindows([...windows, { id: Date.now(), height: "0", width: "0" }]);
//   const addDoor = () => setDoors([...doors, { id: Date.now(), height: "0", width: "0" }]);
//   const removeWindow = (id: number) => setWindows(windows.filter((win) => win.id !== id));
//   const removeDoor = (id: number) => setDoors(doors.filter((door) => door.id !== id));

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setter: React.Dispatch<React.SetStateAction<any>>,
//     key?: string,
//     id?: number,
//   ) => {
//     const value = e.target.value;
//     if (/^\d*\.?\d*$/.test(value)) {
//       setter((prev: any) =>
//         id !== undefined
//           ? prev.map((item: any) => (item.id === id ? { ...item, [key as string]: value } : item))
//           : { ...prev, [key as string]: value },
//       );
//     }
//   };

//   const calculateMaterials = () => {
//     // Получаем введенные данные
//     const roomLength = parseFloat(room.length) || 0;
//     const roomWidth = parseFloat(room.width) || 0;
//     const roomHeight = parseFloat(room.height) || 0;
//     const rapportValue = parseFloat(rapport) || 0;

//     // Площадь стен
//     const wallArea = 2 * roomHeight * (roomLength + roomWidth);

//     // Площадь окон
//     const windowArea = windows.reduce(
//       (acc, w) => acc + (parseFloat(w.height) || 0) * (parseFloat(w.width) || 0),
//       0,
//     );

//     // Площадь дверей
//     const doorArea = doors.reduce(
//       (acc, d) => acc + (parseFloat(d.height) || 0) * (parseFloat(d.width) || 0),
//       0,
//     );

//     // Площадь для оклейки
//     const wallpaperArea = wallArea - (windowArea + doorArea);

//     // Размер рулона (взяли выбранный размер)
//     const [rollWidth, rollHeight] = rollSize.split("x").map(parseFloat);

//     // Количество полос на рулоне: высота рулона / (высота комнаты + раппорт)
//     const stripsPerRoll = rollHeight / (roomHeight + rapportValue);

//     // Площадь, которую покроет 1 рулон
//     const wallpaperPerRoll = rollWidth * rollHeight; // площадь покрытия одного рулона

//     // Количество полос, которые понадобятся для поклейки
//     const stripsNeeded = wallpaperArea / (roomHeight * rollWidth);

//     // Количество рулонов, необходимых для покрытия всей площади
//     const rollsNeeded = Math.ceil(stripsNeeded / stripsPerRoll);

//     setResults({
//       wallpaperArea: wallpaperArea.toFixed(2), // площадь оклейки
//       rollsNeeded, // количество рулонов
//       wallpaperM2: (rollsNeeded * wallpaperPerRoll).toFixed(2), // площадь покрытия в m²
//     });
//   };

//   return (
//     <section className={styles.container}>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <h2 className={styles.title}>Параметры комнаты</h2>
//         <div className={styles.grid}>
//           {Object.keys(room).map((key, index) => (
//             <label key={key} className={styles.label}>
//               <span className={styles.paragraph}>{roomParams[index].label}</span>
//               <input
//                 type="text"
//                 value={room[key as keyof typeof room]}
//                 onChange={(e) => handleInputChange(e, setRoom, key)}
//                 className={styles.input}
//               />
//             </label>
//           ))}
//         </div>

//         <div className={styles.metrics}>
//           <div className={styles.parametrs}>
//             <h2 className={styles.title}>Параметры рулона</h2>
//             <div className={styles.buttonsGroup}>
//               {rollSizes.map((size) => (
//                 <Button
//                   type="button"
//                   key={size}
//                   isActive={rollSize === size}
//                   onClick={() => setRollSize(size)}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>
//           <div className={styles.parametrs}>
//             <h2 className={styles.title}>Раппорт</h2>
//             <div className={styles.buttonsGroup}>
//               {Object.entries(rapports).map(([size, className]) => (
//                 <Button
//                   type="button"
//                   className={styles[className]}
//                   key={size}
//                   isActive={rapport === size}
//                   onClick={() => setRapport(size)}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>
//         {elements.map(({ title, label }) => (
//           <div key={title} className={styles.section}>
//             <h2 className={styles.title}>{title}</h2>
//             <div className={styles.items}>
//               {(title === "Параметры окон" ? windows || [] : doors || []).map(
//                 ({ id, height, width }) => (
//                   <div key={id} className={styles.windowItem}>
//                     <div className={styles.windowSection}>
//                       <h3 className={styles.windowTitle}>
//                         {title === "Параметры окон" ? "Окно" : "Дверь"}
//                       </h3>
//                       <button
//                         className={styles.removeButton}
//                         onClick={() =>
//                           title === "Параметры окон" ? removeWindow(id) : removeDoor(id)
//                         }
//                       >
//                         <img src={cross} alt="cross" />
//                       </button>
//                     </div>
//                     <div className={styles.buttons}>
//                       <label>
//                         <span className={styles.paragraph}>Высота м</span>
//                         <input
//                           className={styles.windowField}
//                           type="text"
//                           value={height}
//                           onChange={(e) =>
//                             handleInputChange(
//                               e,
//                               title === "Параметры окон" ? setWindows : setDoors,
//                               "height",
//                               id,
//                             )
//                           }
//                         />
//                       </label>
//                       <label>
//                         <span>Ширина м</span>
//                         <input
//                           className={styles.windowField}
//                           type="text"
//                           value={width}
//                           onChange={(e) =>
//                             handleInputChange(
//                               e,
//                               title === "Параметры окон" ? setWindows : setDoors,
//                               "width",
//                               id,
//                             )
//                           }
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 ),
//               )}
//               <div className={styles.buttonSection}>
//                 <button
//                   type="button"
//                   onClick={title === "Параметры окон" ? addWindow : addDoor}
//                   className={styles.addButton}
//                 >
//                   <img src={add} alt="add" className={styles.icon} />
//                 </button>
//                 <span>{label}</span>
//               </div>
//             </div>
//           </div>
//         ))}

//         <Button type="button" isActive onClick={calculateMaterials}>
//           <img src={stick} alt="stick" className={styles.icon} />
//           <span>Рассчитать кол-во материалов</span>
//         </Button>

//         {results && (
//           <div className={styles.results}>
//             <h2 className={styles.resultsTitle}>Результаты</h2>
//             <div className={styles.resultSection}>
//               <div className={styles.resultContainer}>
//                 <h3 className={styles.resultsText}>{results.rollsNeeded}</h3>
//                 <p className={styles.resultsSubtitle}>Кол-во рулонов</p>
//               </div>
//               <div className={styles.resultContainer}>
//                 <h3 className={styles.resultsText}>{results.wallpaperArea}</h3>
//                 <p className={styles.resultsSubtitle}>Кол-во m² обоев</p>
//               </div>
//               <div className={styles.resultContainer}>
//                 <h3 className={styles.resultsText}>{results.wallpaperM2} м²</h3>
//                 <p className={styles.resultsSubtitle}>Площадь оклейки</p>
//               </div>
//             </div>
//             <div className={styles.buttonsContainer}>
//               <button className={styles.resetButton}>Сбросить параметры</button>
//               <button className={styles.catalogButton}>Перейти в каталог</button>
//             </div>
//           </div>
//         )}
//       </form>
//     </section>
//   );
// }

// export default Form;




// import { useState } from "react";
// import styles from "@/styles/form/form.module.css";
// import add from "@/assets/images/add.svg";
// import stick from "@/assets/images/magicStick.svg";
// import cross from "@/assets/images/cross.svg";
// import { rollSizes } from "../../data/rollSizes";
// import { rapports } from "../../data/rapports";
// import { roomParams } from "../../data/roomParams";
// import { elements } from "../../data/elements";
// import Button from "../general/Button";

// function Form() {
//   const [rollSize, setRollSize] = useState(rollSizes[0]);
//   const [rapport, setRapport] = useState(Object.keys(rapports)[0]);
//   const [windows, setWindows] = useState<{ id: number; height: string; width: string }[]>([]);
//   const [doors, setDoors] = useState<{ id: number; height: string; width: string }[]>([]);
//   const [room, setRoom] = useState({
//     length: "14.2",
//     width: "28.5",
//     height: "18.5",
//   });
//   const [results, setResults] = useState<{
//     wallpaperArea: string;
//     rollsNeeded: number;
//     wallpaperM2: string;
//   } | null>(null);

//   const addWindow = () => setWindows([...windows, { id: Date.now(), height: "0", width: "0" }]);
//   const addDoor = () => setDoors([...doors, { id: Date.now(), height: "0", width: "0" }]);
//   const removeWindow = (id: number) => setWindows(windows.filter((win) => win.id !== id));
//   const removeDoor = (id: number) => setDoors(doors.filter((door) => door.id !== id));

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setter: React.Dispatch<React.SetStateAction<any>>,
//     key?: string,
//     id?: number,
//   ) => {
//     const value = e.target.value;
//     if (/^\d*\.?\d*$/.test(value)) {
//       setter((prev: any) =>
//         id !== undefined
//           ? prev.map((item: any) => (item.id === id ? { ...item, [key as string]: value } : item))
//           : { ...prev, [key as string]: value },
//       );
//     }
//   };

//   const calculateMaterials = () => {
//     // Получаем введенные данные
//     const roomLength = parseFloat(room.length) || 0;
//     const roomWidth = parseFloat(room.width) || 0;
//     const roomHeight = parseFloat(room.height) || 0;
//     const rapportValue = parseFloat(rapport) || 0;

//     if (roomLength === 0 || roomWidth === 0 || roomHeight === 0) {
//       setResults(null);
//       return; // Не продолжаем расчет, если хотя бы одно значение равно 0
//     }

//     // Площадь стен
//     const wallArea = 2 * roomHeight * (roomLength + roomWidth);

//     // Площадь окон
//     const windowArea = windows.reduce(
//       (acc, w) => acc + (parseFloat(w.height) || 0) * (parseFloat(w.width) || 0),
//       0,
//     );

//     // Площадь дверей
//     const doorArea = doors.reduce(
//       (acc, d) => acc + (parseFloat(d.height) || 0) * (parseFloat(d.width) || 0),
//       0,
//     );

//     // Площадь для оклейки
//     const wallpaperArea = wallArea - (windowArea + doorArea);

//     // Размер рулона (взяли выбранный размер)
//     const [rollWidth, rollHeight] = rollSize.split("x").map(parseFloat);

//     // Количество полос на рулоне: высота рулона / (высота комнаты + раппорт)
//     const stripsPerRoll = rollHeight / (roomHeight + rapportValue);

//     // Площадь, которую покроет 1 рулон
//     const wallpaperPerRoll = rollWidth * rollHeight; // площадь покрытия одного рулона

//     // Количество полос, которые понадобятся для поклейки
//     const stripsNeeded = wallpaperArea / (roomHeight * rollWidth);

//     // Количество рулонов, необходимых для покрытия всей площади
//     const rollsNeeded = Math.ceil(stripsNeeded / stripsPerRoll);

//     setResults({
//       wallpaperArea: wallpaperArea.toFixed(2), // площадь оклейки
//       rollsNeeded, // количество рулонов
//       wallpaperM2: (rollsNeeded * wallpaperPerRoll).toFixed(2), // площадь покрытия в m²
//     });
//   };

//   return (
//     <section className={styles.container}>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <h2 className={styles.title}>Параметры комнаты</h2>
//         <div className={styles.grid}>
//           {Object.keys(room).map((key, index) => (
//             <label key={key} className={styles.label}>
//               <span className={styles.paragraph}>{roomParams[index].label}</span>
//               <input
//                 type="text"
//                 value={room[key as keyof typeof room]}
//                 onChange={(e) => handleInputChange(e, setRoom, key)}
//                 className={styles.input}
//                 placeholder={roomParams[index].placeholder}
//               />
//             </label>
//           ))}
//         </div>

//         <div className={styles.metrics}>
//           <div className={styles.parametrs}>
//             <h2 className={styles.title}>Параметры рулона</h2>
//             <div className={styles.buttonsGroup}>
//               {rollSizes.map((size) => (
//                 <Button
//                   type="button"
//                   key={size}
//                   isActive={rollSize === size}
//                   onClick={() => setRollSize(size)}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>
//           <div className={styles.parametrs}>
//             <h2 className={styles.title}>Раппорт</h2>
//             <div className={styles.buttonsGroup}>
//               {Object.entries(rapports).map(([size, className]) => (
//                 <Button
//                   type="button"
//                   className={styles[className]}
//                   key={size}
//                   isActive={rapport === size}
//                   onClick={() => setRapport(size)}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>
//         {elements.map(({ title, label }) => (
//           <div key={title} className={styles.section}>
//             <h2 className={styles.title}>{title}</h2>
//             <div className={styles.items}>
//               {(title === "Параметры окон" ? windows || [] : doors || []).map(
//                 ({ id, height, width }) => (
//                   <div key={id} className={styles.windowItem}>
//                     <div className={styles.windowSection}>
//                       <h3 className={styles.windowTitle}>
//                         {title === "Параметры окон" ? "Окно" : "Дверь"}
//                       </h3>
//                       <button
//                         className={styles.removeButton}
//                         onClick={() =>
//                           title === "Параметры окон" ? removeWindow(id) : removeDoor(id)
//                         }
//                       >
//                         <img src={cross} alt="cross" />
//                       </button>
//                     </div>
//                     <div className={styles.buttons}>
//                       <label>
//                         <span className={styles.paragraph}>Высота м</span>
//                         <input
//                           className={styles.windowField}
//                           type="text"
//                           value={height}
//                           onChange={(e) =>
//                             handleInputChange(
//                               e,
//                               title === "Параметры окон" ? setWindows : setDoors,
//                               "height",
//                               id,
//                             )
//                           }
//                           placeholder="0"
//                         />
//                       </label>
//                       <label>
//                         <span>Ширина м</span>
//                         <input
//                           className={styles.windowField}
//                           type="text"
//                           value={width}
//                           onChange={(e) =>
//                             handleInputChange(
//                               e,
//                               title === "Параметры окон" ? setWindows : setDoors,
//                               "width",
//                               id,
//                             )
//                           }
//                           placeholder="0"
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 ),
//               )}
//               <div className={styles.buttonSection}>
//                 <button
//                   type="button"
//                   onClick={title === "Параметры окон" ? addWindow : addDoor}
//                   className={styles.addButton}
//                 >
//                   <img src={add} alt="add" className={styles.icon} />
//                 </button>
//                 <span>{label}</span>
//               </div>
//             </div>
//           </div>
//         ))}

//         <Button type="button" isActive onClick={calculateMaterials}>
//           <img src={stick} alt="stick" className={styles.icon} />
//           <span>Рассчитать кол-во материалов</span>
//         </Button>

//         {results && (
//           <div className={styles.results}>
//             <h2 className={styles.resultsTitle}>Результаты</h2>
//             <div className={styles.resultSection}>
//               <div className={styles.resultContainer}>
//                 <h3 className={styles.resultsText}>{results.rollsNeeded}</h3>
//                 <p className={styles.resultsSubtitle}>Кол-во рулонов</p>
//               </div>
//               <div className={styles.resultContainer}>
//                 <h3 className={styles.resultsText}>{results.wallpaperArea}</h3>
//                 <p className={styles.resultsSubtitle}>Кол-во m² обоев</p>
//               </div>
//               <div className={styles.resultContainer}>
//                 <h3 className={styles.resultsText}>{results.wallpaperM2} м²</h3>
//                 <p className={styles.resultsSubtitle}>Площадь оклейки</p>
//               </div>
//             </div>
//             <div className={styles.buttonsContainer}>
//               <button className={styles.resetButton}>Сбросить параметры</button>
//               <button className={styles.catalogButton}>Перейти в каталог</button>
//             </div>
//           </div>
//         )}
//       </form>
//     </section>
//   );
// }

// export default Form;




import { useState } from "react";
import styles from "@/styles/form/form.module.css";
import add from "@/assets/images/add.svg";
import stick from "@/assets/images/magicStick.svg";
import cross from "@/assets/images/cross.svg";
import { rollSizes } from "../../data/rollSizes";
import { rapports } from "../../data/rapports";
import { roomParams } from "../../data/roomParams";
import { elements } from "../../data/elements";
import Button from "../general/Button";

function Form() {
  const [rollSize, setRollSize] = useState(rollSizes[0]);
  const [rapport, setRapport] = useState(Object.keys(rapports)[0]);
  const [windows, setWindows] = useState<{ id: number; height: string; width: string }[]>([]);
  const [doors, setDoors] = useState<{ id: number; height: string; width: string }[]>([]);
  const [room, setRoom] = useState({
    length: "14.2",
    width: "28.5",
    height: "18.5",
  });
  const [results, setResults] = useState<{
    wallpaperArea: string;
    rollsNeeded: number;
    wallpaperM2: string;
  } | null>(null);

  const addWindow = () => setWindows([...windows, { id: Date.now(), height: "0", width: "0" }]);
  const addDoor = () => setDoors([...doors, { id: Date.now(), height: "0", width: "0" }]);
  const removeWindow = (id: number) => setWindows(windows.filter((win) => win.id !== id));
  const removeDoor = (id: number) => setDoors(doors.filter((door) => door.id !== id));

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

  const calculateMaterials = () => {
	
    const roomLength = parseFloat(room.length) || 0;
    const roomWidth = parseFloat(room.width) || 0;
    const roomHeight = parseFloat(room.height) || 0;
    const rapportValue = parseFloat(rapport) || 0;

    if (roomLength === 0 || roomWidth === 0 || roomHeight === 0) {
      setResults({
        wallpaperArea: "0.00",
        rollsNeeded: 0,
        wallpaperM2: "0.00",
      });
      return; // Не продолжаем расчет, если хотя бы одно значение равно 0
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

    setResults({
      wallpaperArea: wallpaperArea.toFixed(2), 
      rollsNeeded,
      wallpaperM2: (rollsNeeded * wallpaperPerRoll).toFixed(2),
    });
  };

  return (
    <section className={styles.container}>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2 className={styles.title}>Параметры комнаты</h2>
        <div className={styles.grid}>
          {Object.keys(room).map((key, index) => (
            <label key={key} className={styles.label}>
              <span className={styles.paragraph}>{roomParams[index].label}</span>
              <input
                type="text"
                value={room[key as keyof typeof room]}
                onChange={(e) => handleInputChange(e, setRoom, key)}
                className={styles.input}
                placeholder={roomParams[index].placeholder}
              />
            </label>
          ))}
        </div>

        <div className={styles.metrics}>
          <div className={styles.parametrs}>
            <h2 className={styles.title}>Параметры рулона</h2>
            <div className={styles.buttonsGroup}>
              {rollSizes.map((size) => (
                <Button
                  type="button"
                  key={size}
                  isActive={rollSize === size}
                  onClick={() => setRollSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div className={styles.parametrs}>
            <h2 className={styles.title}>Раппорт</h2>
            <div className={styles.buttonsGroup}>
              {Object.entries(rapports).map(([size, className]) => (
                <Button
                  type="button"
                  className={styles[className]}
                  key={size}
                  isActive={rapport === size}
                  onClick={() => setRapport(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        </div>
        {elements.map(({ title, label }) => (
          <div key={title} className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.items}>
              {(title === "Параметры окон" ? windows || [] : doors || []).map(
                ({ id, height, width }) => (
                  <div key={id} className={styles.windowItem}>
                    <div className={styles.windowSection}>
                      <h3 className={styles.windowTitle}>
                        {title === "Параметры окон" ? "Окно" : "Дверь"}
                      </h3>
                      <button
                        className={styles.removeButton}
                        onClick={() =>
                          title === "Параметры окон" ? removeWindow(id) : removeDoor(id)
                        }
                      >
                        <img src={cross} alt="cross" />
                      </button>
                    </div>
                    <div className={styles.buttons}>
                      <label>
                        <span className={styles.paragraph}>Высота м</span>
                        <input
                          className={styles.windowField}
                          type="text"
                          value={height}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              title === "Параметры окон" ? setWindows : setDoors,
                              "height",
                              id,
                            )
                          }
                          placeholder="0"
                        />
                      </label>
                      <label>
                        <span>Ширина м</span>
                        <input
                          className={styles.windowField}
                          type="text"
                          value={width}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              title === "Параметры окон" ? setWindows : setDoors,
                              "width",
                              id,
                            )
                          }
                          placeholder="0"
                        />
                      </label>
                    </div>
                  </div>
                ),
              )}
              <div className={styles.buttonSection}>
                <button
                  type="button"
                  onClick={title === "Параметры окон" ? addWindow : addDoor}
                  className={styles.addButton}
                >
                  <img src={add} alt="add" className={styles.icon} />
                </button>
                <span>{label}</span>
              </div>
            </div>
          </div>
        ))}

        <Button type="button" isActive onClick={calculateMaterials}>
          <img src={stick} alt="stick" className={styles.icon} />
          <span>Рассчитать кол-во материалов</span>
        </Button>

        {results && (
          <div className={styles.results}>
            <h2 className={styles.resultsTitle}>Результаты</h2>
            <div className={styles.resultSection}>
              <div className={styles.resultContainer}>
                <h3 className={styles.resultsText}>{results.rollsNeeded}</h3>
                <p className={styles.resultsSubtitle}>Кол-во рулонов</p>
              </div>
              <div className={styles.resultContainer}>
                <h3 className={styles.resultsText}>{results.wallpaperArea}</h3>
                <p className={styles.resultsSubtitle}>Кол-во m² обоев</p>
              </div>
              <div className={styles.resultContainer}>
                <h3 className={styles.resultsText}>{results.wallpaperM2} м²</h3>
                <p className={styles.resultsSubtitle}>Площадь оклейки</p>
              </div>
            </div>
            <div className={styles.buttonsContainer}>
              <button className={styles.resetButton}>Сбросить параметры</button>
              <button className={styles.catalogButton}>Перейти в каталог</button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}

export default Form;
