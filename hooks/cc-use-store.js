import React from 'react';
import { storesContext } from '../context/cc-context';

export const useStores = () => React.useContext(storesContext);
