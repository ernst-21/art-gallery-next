import React,{createContext, useContext} from 'react';
import { ChildrenProps } from '../../types/common.types';

// Data value of the provider context
type FormContextValue = {
    isLoading?: boolean
    disabled?: boolean
    readOnly ?: boolean
    size ?: 'small'| 'middle' |'large'
    control?: any,
}
// default value of the context
const defaultValue: FormContextValue = {
    isLoading: false, disabled: false,readOnly: false
}

// create context
const FormContext = createContext<FormContextValue>(defaultValue);

// Proptypes of Provider component
type FormContextProps = FormContextValue & ChildrenProps &
    React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

/**
 * Provider component
 * */
const Form = ({isLoading,size, disabled,readOnly,control,...props}: FormContextProps) => {

    return (
        <FormContext.Provider value={{isLoading, disabled,readOnly , control, size}}>
            <form {...props}/>
        </FormContext.Provider>
    );
}


// Default hook to retrieve context data
const useEForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        return defaultValue;
    }
    return context;
}

export {Form, useEForm};
