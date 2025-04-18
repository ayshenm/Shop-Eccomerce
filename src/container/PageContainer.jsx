import React from "react";
import Container from "@mui/material/Container";

const PageContainer = ({ children }) => {
  return (
    <div>
      <Container maxWidth="xl">
        {children}
      </Container>
    </div>
  );
};

export default PageContainer;
