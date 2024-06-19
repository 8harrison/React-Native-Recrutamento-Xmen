import { useState, createContext } from 'react';

const ContextValue = createContext();

export default function Context({ children }) {
  const [cityList, setCityList] = useState([]);
  const deltas = { latitudeDelta: 0.5, longitudeDelta: 0.5 };
  const [mutants, setMutants] = useState([])
  const [xmen, setXmen] = useState({
    name: '',
    photo: '',
    power: '',
    description: '', 
    location: null, 
  });

  return (
    <ContextValue.Provider
      value={{ cityList, setCityList, deltas, mutants, setMutants, xmen, setXmen }}>
      {children}
    </ContextValue.Provider>
  );
}

export { ContextValue };
