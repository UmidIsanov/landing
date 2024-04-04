import React, { FC } from "react";
import Input from "@/src/shared/ui/Input";
import SearchIcon from "@/src/shared/assets/searchIcon.svg";
import { Box, styled } from "@mui/material";

interface ISearchInputProps {
  placeholder: string;
}

const SearchInput: FC<ISearchInputProps> = ({ placeholder }) => {
  const StyledWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });
  const InputStyled = styled(Input)({
    width: "440px",
    height: "44px",
    borderRadius: "8px !important",
    paddingLeft: "36px !important",
    "::placeholder": {
      color: "#667085",
    },
  });

  const StyledSearchIcon = styled(SearchIcon)({
    position: "absolute",
    marginLeft: "13px",
    color: "#667085",
    zIndex: 4,
  });

  return (
    <StyledWrapper>
      <StyledSearchIcon />

      <InputStyled
        type="text"
        name="search"
        placeholder={placeholder}
        className="pl-34"
        style={{ width: "100%", height: "100%" }}
      />
    </StyledWrapper>
  );
};

export default SearchInput;
