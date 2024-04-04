import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const innerModalInfp: SxProps<Theme> = {
  marginTop: "25px",
  paddingTop: "51px",
  paddingLeft: "48px",
  paddingRight: "98px",
  paddingBottom: "30px",
  boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.25)",
  borderRadius: "8px",
  width: "672px",
};
export const ModalPageStyles: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 824,
  height: 583,
  backgroundColor: "white",
  overflow: "auto",
  boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.25)",

  paddingTop: "60px",
  paddingLeft: "70px",
  paddingRight: "51px",
  paddingBottom: "50px",
};

export const TitleModalTextStyles: SxProps<Theme> = {
  fontSize: "28px",
  display: "flex",
  marginBottom: "18px",
  justifyContent: "center",
  fontWeight: "bold",
};

export const headInfoBox: SxProps<Theme> = {
  display: "flex",
  gap: "10px",
  marginLeft: "51px",
};

export const headInfoTextBox: SxProps<Theme> = {
  marginTop: "70px",
  marginLeft: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const headInfoBoxRow: SxProps<Theme> = {
  display: "flex",
  gap: "23px",
};

export const youTubeFrameStyles: SxProps<Theme> = {
  marginBottom: "35px",
};
export const sollutionButtonsStyles: SxProps<Theme> = {
  marginTop: "31px",
  marginLeft: "60%",
  display: "flex",
  gap: "20px",
};
export const StyledInfoText: SxProps<Theme> = {
  border: "1px solid #ccc",
  paddingTop: "13px",
  paddingBottom: "13px",
  paddingLeft: "15px",
  width: "350px",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  borderRadius: "8px",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
};
export const StyledExtraInfoText: SxProps<Theme> = {
  border: "1px solid #ccc",
  paddingTop: "13px",
  paddingBottom: "13px",
  paddingLeft: "15px",
  width: "350px",
  height: "128px",
  borderRadius: "8px",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
};
export const InnerStyledBox: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  fontSize: "16px",
};
export const styledUserFile: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};
