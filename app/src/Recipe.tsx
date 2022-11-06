import { Container } from "@mui/system";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "./Recipes";
import { MDXProvider } from "@mdx-js/react";
import { Box } from "@mui/material";

const components = {
  Timer: ({ seconds }: { seconds: number }) => {
    const [timeleft, setTimeleft] = useState(seconds);
    const [active, setActive] = useState(false);

    useEffect(() => {
      let interval: any = null;
      if (active) {
        interval = setInterval(() => {
          setTimeleft((seconds) => seconds - 1);
        }, 1000);
      } else if (!active || seconds <= 0) {
        interval && clearInterval(interval);
      }
      return () => interval && clearInterval(interval);
    }, [active, timeleft]);

    if (!active) {
      return <button onClick={() => setActive(true)}>start timer</button>;
    }
    return (
      <Box>
        <p>{timeleft} seconds to go!</p>
        <button
          onClick={() => {
            setActive(false);
            setTimeleft(seconds);
          }}
        >
          reset timer
        </button>
      </Box>
    );
  },
};

export function Recipe() {
  const { name } = useParams();

  const Rec = getRecipe(name || "");

  return (
    <Container sx={{ overflow: "auto", paddingBottom: "50px" }}>
      <MDXProvider components={components}>
        <Suspense fallback={<div>Loading...</div>}>{Rec && <Rec components={components} />}</Suspense>
      </MDXProvider>
    </Container>
  );
}
