"use client";

import React, { FC } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

import { styled } from "@mui/material";

import { FaqAccordionProps } from "../types";

const StyledAccordion = styled(Accordion)({
  backgroundColor: "rgba(204, 255, 144, 0.4)",
  maxWidth: "1024px",
  borderRadius: "15px !important",
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
});

const StyledAccordionSummary = styled(AccordionSummary)({
  fontWeight: "bold",
  padding: "20px",
  fontSize: "36px",
  paddingLeft: "57px",
});

const StyledAccordionDetails = styled(AccordionDetails)({
  fontSize: "20px",
  marginTop: "-35px",
  paddingLeft: "57px",
  paddingBottom: "35px",
});

const FaqAccordion: FC<FaqAccordionProps> = ({ title, defaultExpanded = false, desc }) => {
  return (
    <StyledAccordion defaultExpanded={defaultExpanded}>
      <StyledAccordionSummary
        expandIcon={
          defaultExpanded ? (
            <ArrowCircleUpIcon sx={{ fontSize: 47 }} />
          ) : (
            <ArrowCircleDownIcon sx={{ fontSize: 47, color: "black" }} />
          )
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </StyledAccordionSummary>
      <StyledAccordionDetails>{desc}</StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default FaqAccordion;
