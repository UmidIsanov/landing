import { FC, MouseEvent, memo, useMemo, useState } from "react";
import { SelectInput } from "../styles";
import useClickOutsideListener from "@/src/shared/lib/useClickOutsideListener";
import { SelectIProps } from "../types";
import selectStyles from "../styles/select.module.scss";
import Option from "./Option";
import { SelectWithIcon } from "./SelectWithIcon";
import { useDropdownContext } from "../providers/DropdownContext";
const Select: FC<SelectIProps> = ({ width, Icon, addItem, removeItem, id, isMultiple, title, selected, data }) => {
  const val = useDropdownContext();
  const [search, setSearch] = useState<string>("");

  const closeHandler = () => {
    val?.closeAllDropdowns();
  };

  const isOpen = val?.currDropdownId === id;

  const filteredArray = useMemo(() => {
    const newArray = data.filter(el => el.name.includes(search ? search[0].toUpperCase() + search.slice(1) : ""));
    return newArray;
  }, [search]);

  const setIsOpenHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isOpen) {
      val?.setCurrDropdownId(id);
    } else {
      val?.closeAllDropdowns();
    }
  };
  useClickOutsideListener({ isOpen, handler: closeHandler, id });

  return (
    <div className="relative">
      {Icon && <Icon className="absolute top-[14px] left-[15px]" />}
      <SelectWithIcon
        width={width}
        isMultiple={isMultiple}
        setIsOpenHandler={setIsOpenHandler}
        Icon={Icon}
        title={title}
        isOpen={isOpen}
        selected={selected}
        isSingle={false}
      />
      <div className={`${selectStyles.container} ${isOpen ? selectStyles["container-not-hidden"] : ""}`}>
        <ul className={selectStyles.ul}>
          <SelectInput
            value={search}
            onChange={e => {
              setSearch(e.target.value);
            }}
            onClick={e => e.stopPropagation()}
            placeholder={title}
            disableUnderline
          />
          {filteredArray.map(single_data => {
            return (
              <Option
                closeHandler={closeHandler}
                isMultiple={isMultiple}
                removeItem={removeItem}
                addItem={addItem}
                isChecked={Boolean(selected && selected[single_data.id])}
                data={single_data}
                key={single_data.id}
              />
            );
          })}
        </ul>
        <hr className={selectStyles.hor_rule} />
      </div>
    </div>
  );
};

export default memo(Select);
