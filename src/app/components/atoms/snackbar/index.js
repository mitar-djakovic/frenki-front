import React from 'react';
import { Snackbar } from './style';

export default ({
  message, error, snackbarActive, icon,
}) => (
  <Snackbar className={snackbarActive && 'notification snackbarActive'} error={error}>
    {icon}
    {message}
  </Snackbar>
);
