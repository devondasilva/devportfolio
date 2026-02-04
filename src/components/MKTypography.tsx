import { forwardRef } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const MKTypographyRoot = styled(Typography)(({ theme, ownerState }: any) => {
  const { palette, functions, typography } = theme;
  const { color, textGradient, opacity } = ownerState;

  const { gradients, transparent } = palette;
  const { linearGradient } = functions;

  return {
    opacity: opacity,
    textTransform: "none",
    verticalAlign: "middle",
    textDecoration: "none",
    // Logique pour le dégradé de texte
    ...(textGradient && {
      background: linearGradient(gradients[color].main, gradients[color].state),
      display: "inline-block",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: transparent.main,
      position: "relative",
      zIndex: 1,
    }),
  };
});

const MKTypography = forwardRef(({ color, textGradient, opacity, children, ...rest }: any, ref) => (
  <MKTypographyRoot
    {...rest}
    ref={ref}
    ownerState={{ color, textGradient, opacity }}
  >
    {children}
  </MKTypographyRoot>
));

export default MKTypography;