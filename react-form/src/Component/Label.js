import React, {useState,useCallback} from 'react';
import classes from './Form.module.css'
const Label = ({children}) =>{

    return(<><label className={classes.label} for={children}>{children}</label></>)
}

export default Label