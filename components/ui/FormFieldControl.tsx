import React, {FC, memo} from 'react';
import {Control, Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useDFLForm} from "./Form";
import {InputBaseComponentProps} from "@mui/material";

export type FormFieldControlProps = {
    Component?: any,
    control?: Control<any, any>,
    name: string,
    isLoading?: boolean,
    disabled?: boolean,
    readOnly?: boolean,
    inputProps?: InputBaseComponentProps | undefined
}

const FormFieldControl: FC<FormFieldControlProps> = ({control, name,Component, inputProps, ...props}) => {
    const {t} = useTranslation('errors');
    const {isLoading, readOnly, disabled, control: superControl, size} = useDFLForm();

    return (
        <Controller
            name={name}
            control={ superControl || control}
            render={({fieldState, field: {ref, ...rest}}) => (
                <Component
                    fullWidth
                    inputRef={ref}
                    disabled={isLoading || disabled || props.isLoading}
                    inputProps={{readOnly: readOnly || props.readOnly, ...inputProps}}
                    size={size}
                    {...rest}
                    {...props}
                    error={Boolean(fieldState.invalid)}
                    // @ts-ignore
                    helperText={t(fieldState?.error?.message)}
                />
            )}
        />
    );
};

export default memo(FormFieldControl);

FormFieldControl.propTypes = {};
