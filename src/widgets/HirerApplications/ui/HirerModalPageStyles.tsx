import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const StyledMopalPageWrapper: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 978,

  boxShadow: 24,
  backgroundColor: "white",
  padding: "24px",
  borderRadius: "8px",
};
export const StyledMopalPageWrapper2: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 978,

  boxShadow: 24,
  backgroundColor: "white",
  padding: "24px",
  borderRadius: "8px",
};
export const StyledLine: SxProps<Theme> = {
  borderBottom: "1px solid #ccc",
  margin: "19px 0",
  marginLeft: "-20px",
  width: "calc(100% + 40px)",
};
export const StyledHeadWrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
};
export const StyledHeadTitle: SxProps<Theme> = {
  display: "flex",
  fontSize: "26px",
  fontWeight: "bold",
  textWrap: "nowrap",
};
export const StyledHeadButtons: SxProps<Theme> = {
  display: "flex",
  gap: "16px",
};

export const StyledApplicationItemsBox: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export const StyledFeatApplicationInfoBox: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  width: "63%",
};
export const StyledGenderApplicationInfoBox: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  width: "67%",
};
export const StyleApplicationData: SxProps<Theme> = {
  border: "1px solid #ccc",
  padding: "5px 20px",
  width: "60%",
  display: "inline-flex",
  borderRadius: "8px",
};
export const StyledCityApplicationData: SxProps<Theme> = {
  border: "1px solid #ccc",
  paddingTop: "13px",
  paddingBottom: "13px",
  paddingLeft: "15px",
  width: "70%",
  display: "inline-flex",
  borderRadius: "8px",
};
export const StyledLanguagesApplicationData: SxProps<Theme> = {
  border: "1px solid #ccc",
  paddingTop: "13px",
  paddingBottom: "13px",
  paddingLeft: "15px",
  width: "70%",
  display: "inline-flex",
  borderRadius: "8px",
};
export const StyledExtraInfoApplicationData: SxProps<Theme> = {
  border: "1px solid #ccc",
  paddingTop: "13px",
  paddingBottom: "20px",
  paddingRight: "20px",
  paddingLeft: "15px",
  borderRadius: "8px",
  width: "70%",
  boxSizing: "border-box",
  textWrap: "nowrap",
};

export const StyledRadioGroup: SxProps<Theme> = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
};
export const StyledSpan: SxProps<Theme> = {
  backgroundColor: "#D9D9D9",
  borderRadius: "8px",
  padding: "2px 14px",
};
export const StyledFeatures: SxProps<Theme> = {
  display: "flex",
  gap: "10px",
};
export const StyledApplicationInfoBox: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
};
