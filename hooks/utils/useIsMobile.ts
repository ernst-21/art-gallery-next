import {useEffect, useState} from 'react';
// @ts-ignore
import {enquireScreen} from 'enquire-js';

let _isMobile: any;

enquireScreen((b: any) => {
    _isMobile = b;
});

export const useIsMobile = () => {
    const [isMobile, setMobile] = useState(_isMobile);
    useEffect(() => {
        enquireScreen((b: any) => {
            setMobile(!!b);
        });
    }, []);

    return isMobile;
};