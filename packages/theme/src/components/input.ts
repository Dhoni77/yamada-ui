import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import { getColor, isArray } from "@yamada-ui/utils"

export const Input: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    field: {
      width: "100%",
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _placeholder: {
        color: "blackAlpha.600",
      },
      _dark: {
        _placeholder: {
          color: "whiteAlpha.400",
        },
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
    element: {
      color: ["blackAlpha.600", "whiteAlpha.700"],
    },
  },

  variants: {
    outline: ({
      theme: t,
      colorMode: m,
      focusBorderColor: fc = "focus",
      errorBorderColor: ec = ["danger.500", "danger.400"],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, m), getColor(fc[1], fc[1])(t, m))(m)
        : getColor(fc, fc)(t, m)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        field: {
          border: "1px solid",
          borderColor: "inherit",
          bg: "inherit",
          _hover: {
            borderColor: ["blackAlpha.500", "whiteAlpha.400"],
          },
          _readOnly: {
            boxShadow: "none !important",
            userSelect: "all",
          },
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0 0 0 1px ${errorBorderColor}`,
          },
          _active: {
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
          _focusVisible: {
            zIndex: "yamcha",
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
        },
        addon: {
          border: "1px solid",
          borderColor: ["inherit", "whiteAlpha.50"],
          bg: ["blackAlpha.300", "whiteAlpha.300"],
        },
      }
    },
    filled: ({
      theme: t,
      colorMode: m,
      focusBorderColor: fc = "focus",
      errorBorderColor: ec = ["danger.500", "danger.400"],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, m), getColor(fc[1], fc[1])(t, m))(m)
        : getColor(fc, fc)(t, m)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        field: {
          border: "2px solid",
          borderColor: "transparent",
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _hover: {
            bg: ["blackAlpha.100", "whiteAlpha.100"],
          },
          _readOnly: {
            boxShadow: "none !important",
            userSelect: "all",
          },
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0 0 0 1px ${errorBorderColor}`,
          },
          _active: {
            bg: "transparent",
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
          _focusVisible: {
            bg: "transparent",
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
        },
        addon: {
          border: "2px solid transparent",
          bg: ["blackAlpha.300", "whiteAlpha.300"],
        },
      }
    },
    flushed: ({
      theme: t,
      colorMode: m,
      focusBorderColor: fc = "focus",
      errorBorderColor: ec = ["danger.500", "danger.400"],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, m), getColor(fc[1], fc[1])(t, m))(m)
        : getColor(fc, fc)(t, m)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        field: {
          borderBottom: "1px solid",
          borderColor: "inherit",
          rounded: "0",
          px: "0",
          bg: "transparent",
          _hover: {
            borderColor: ["blackAlpha.500", "whiteAlpha.400"],
          },
          _readOnly: {
            boxShadow: "none !important",
            userSelect: "all",
          },
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0px 1px 0px 0px ${errorBorderColor}`,
          },
          _active: {
            borderColor: focusBorderColor,
            boxShadow: `0px 1px 0px 0px ${focusBorderColor}`,
          },
          _focusVisible: {
            borderColor: focusBorderColor,
            boxShadow: `0px 1px 0px 0px ${focusBorderColor}`,
          },
        },
        addon: {
          borderBottom: "1px solid",
          borderColor: "inherit",
          bg: "transparent",
          rounded: "0",
        },
      }
    },
    unstyled: {
      field: {
        bg: "transparent",
        minH: "auto",
        px: "0",
      },
      addon: {
        bg: "transparent",
        minH: "auto",
        px: "0",
      },
    },
  },

  sizes: {
    xs: {
      field: {
        fontSize: "xs",
        px: "2",
        minH: "6",
        rounded: "sm",
      },
      addon: {
        fontSize: "xs",
        px: "2",
        minH: "6",
        rounded: "sm",
      },
    },
    sm: {
      field: {
        fontSize: "sm",
        px: "2",
        minH: "8",
        rounded: "md",
      },
      addon: {
        fontSize: "sm",
        px: "2",
        minH: "8",
        rounded: "md",
      },
    },
    md: {
      field: {
        fontSize: "md",
        px: "3",
        minH: "10",
        rounded: "md",
      },
      addon: {
        fontSize: "md",
        px: "3",
        minH: "10",
        rounded: "md",
      },
    },
    lg: {
      field: {
        fontSize: "lg",
        px: "4",
        minH: "12",
        rounded: "md",
      },
      addon: {
        fontSize: "lg",
        px: "4",
        minH: "12",
        rounded: "md",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
}
