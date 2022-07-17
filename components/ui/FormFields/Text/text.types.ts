import {TextFieldProps} from "@mui/material";

export type PasswordFieldProps = TextFieldProps & {
    hideIcon?: boolean;
    strong?: number;
    value?: any;
};
