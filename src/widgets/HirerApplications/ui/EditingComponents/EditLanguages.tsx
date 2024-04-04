import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { HirerApplicationData } from "@/src/shared/MockData/hirerApplicationData";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface EditLanguagesProps {
  application: HirerApplicationData;
}

const languages = ["Английский", "Русский", "Казахский", "Французский", "Немецкий"];

const EditLanguages: React.FC<EditLanguagesProps> = ({ application }) => {
  const theme = useTheme();
  const [selectedLanguages, setSelectedLanguages] = React.useState<string[]>(application.languages);

  const handleChange = (event: SelectChangeEvent<typeof selectedLanguages>) => {
    const {
      target: { value },
    } = event;
    setSelectedLanguages(typeof value === "string" ? value.split(",") : value);
  };

  function getStyles(name: string, personName: string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
      backgroundColor: personName.indexOf(name) > -1 ? "#1BB234" : "inherit",
      padding: 1,
      borderRadius: "8px",
      margin: 10,
    };
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 360 }}>
        <InputLabel id="demo-simple-select-label">Язык</InputLabel>{" "}
        <Select
          labelId="demo-multiple-language-label"
          id="demo-multiple-language"
          multiple
          value={selectedLanguages}
          onChange={handleChange}
          input={<OutlinedInput label="Языки" />}
          MenuProps={MenuProps}
        >
          {languages.map(language => (
            <MenuItem key={language} value={language} style={getStyles(language, selectedLanguages, theme)}>
              <Checkbox
                checked={selectedLanguages.indexOf(language) > -1 || application.languages.includes(language)}
                style={{ color: "white" }}
              />
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default EditLanguages;
