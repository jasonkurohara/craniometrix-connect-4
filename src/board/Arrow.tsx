import { Box } from "@mui/system";

const ARROW_SIZE = 30;

export function Arrow() {
  return (
    <Box
      sx={{
        width: 0,
        height: 0,
        borderLeft: `${ARROW_SIZE / 2}px solid transparent`,
        borderRight: `${ARROW_SIZE / 2}px solid transparent`,
        borderTop: `30px solid black`,
        margin: "auto",
      }}
    />
  );
}
