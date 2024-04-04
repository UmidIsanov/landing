import { ChangeEvent, ChangeEventHandler, FC } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchSvg from "../../../../shared/assets/search.svg";
import { InputLabel } from "@mui/material";

const mockCities = [
  "Алматы",
  "Нур-Султан",
  "Шымкент",
  "Караганда",
  "Актобе",
  "Тараз",
  "Павлодар",
  "Усть-Каменогорск",
  "Семей",
  "Атырау",
];

interface CitySelectProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: ChangeEventHandler<HTMLSelectElement>;
  id: string;
}

const CitySelect: FC<CitySelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <SearchSvg width={20} height={20} />
      <select value={value} onChange={onChange}>
        {mockCities.map(city => {
          return <option key={city}>{city}</option>;
        })}
      </select>
    </div>
  );
};

export default CitySelect;
