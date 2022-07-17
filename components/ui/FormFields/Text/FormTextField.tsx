import React, {FC, memo} from "react";
import FormFieldControl, {FormFieldControlProps} from "../FormFieldControl";
import TextField from "./TextField";
import {TextFieldProps} from "@mui/material";
import createDarkComponentField from "./DarkField";

const FormTextField: FC<FormFieldControlProps & TextFieldProps> = (props) => {
    return <FormFieldControl {...props} Component={TextField}/>;
};

export const {DarkField: DarkTextField, FormDarkField: FormDarkTextField} = createDarkComponentField(TextField);

export default memo(FormTextField);

