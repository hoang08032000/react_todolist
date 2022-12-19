import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledLabel } from "./styles";
import PropTypes from "prop-types";

const { forwardRef } = require("react");

const Label = forwardRef(
    (
        {
            children,
            color = "default",
            variant = "soft",
            startIcon,
            endIcon,
            sx,
            ...other
        },
        ref
    ) => {
        const theme = useTheme();

        const iconStyle = {
            width: 16,
            height: 16,
            "& sg, img": { width: 1, height: 1, objectFit: "cover" },
        };

        return (
            <StyledLabel
                ref={ref}
                component="span"
                ownerState={{ color, variant }}
                sx={{
                    ...(startIcon && { pl: 0.75 }),
                    ...(endIcon && { pr: 0.75 }),
                    ...sx,
                }}
                theme={theme}
                {...other}
            >
                {startIcon && (
                    <Box sx={{ mr: 0.75, ...iconStyle }}>{startIcon}</Box>
                )}
                {children}
                {endIcon && (
                    <Box sx={{ mr: 0.75, ...iconStyle }}>{endIcon}</Box>
                )}
            </StyledLabel>
        );
    }
);

Label.displayName = "Label";

Label.propTypes = {
    sx: PropTypes.object,
    endIcon: PropTypes.node,
    startIcon: PropTypes.node,
    children: PropTypes.node,
    variant: PropTypes.oneOf(["filled", "outlined", "ghost", "soft"]),
    color: PropTypes.oneOf([
        "default",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
    ]),
};

export default Label;
