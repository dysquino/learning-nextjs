import React from 'react';
import CCsStore from '../stores/cc-store';

export const storesContext = React.createContext({
  ccStore: new CCsStore(),
});
