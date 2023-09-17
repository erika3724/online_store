import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

export default function Categores() {
  const [categore, setCategore] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const a = await getCategories();
      setCategore(a);
    };
    fetch();
  }, []);
  return (
    <main>
      { categore ? categore.map((a) => (

        <button key={ a.id } data-testid="category">{ a.name }</button>

      )) : <div /> }
    </main>
  );
}
