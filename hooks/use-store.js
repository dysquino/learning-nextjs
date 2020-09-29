import React from 'react';
import { storesContext } from '../context/todo-context';

export const useStores = () => React.useContext(storesContext);
