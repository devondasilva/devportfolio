import { forwardRef } from "react";

// @mui material components
import Box from "@mui/material/Box";
import type { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

// 1. Définition de l'interface des propriétés personnalisées
interface MKBoxProps extends BoxProps {
  variant?: "contained" | "gradient";
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
  coloredShadow?: string;
}

// 2. Style personnalisé : On extrait ownerState ici
// Création du composant stylisé qui réagit au thème du Kit
const MKBoxRoot = styled(Box, { shouldForwardProp: (prop) => prop !== "ownerState" })<{
  ownerState?: {
    variant?: "contained" | "gradient";
    bgColor?: string;
    color?: string;
    opacity?: number;
    borderRadius?: string;
    shadow?: string;
    coloredShadow?: string;
  };
}>(({ theme, ownerState }: any) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState || {};

  const { gradients, transparent, white } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;

  // Logique pour déterminer le fond (couleur unie ou dégradé)
  let backgroundValue = bgColor;

  if (variant === "gradient") {
    backgroundValue = gradients && gradients[bgColor]
      ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
      : white.main;
  } else if (variant === "contained") {
    backgroundValue = palette[bgColor] ? palette[bgColor].main : bgColor;
  }

  return {
    opacity,
    background: backgroundValue,
    color: palette[color] ? palette[color].main : color,
    borderRadius: borderRadius === "none" ? "0" : radius[borderRadius] || borderRadius,
    boxShadow: shadow || (boxShadows && boxShadows[coloredShadow]) || "none",
  };
});

// 3. Le composant final
const MKBox = forwardRef<HTMLDivElement, MKBoxProps>(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => (
    <MKBoxRoot
      {...rest}
      ref={ref}
      // On passe les props à ownerState séparément
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);

// Valeurs par défaut


export default MKBox;