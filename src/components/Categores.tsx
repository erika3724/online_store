import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

export default function Categores({ prop }:any) {
  const [categore, setCategore] = useState<string[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const a = await getCategories();
      setCategore(a);
    };

    fetch();
  }, []);

  return (
    <main>
      { categore ? categore.map((a:any) => (

        <button
          key={ a.id }
          onClick={ () => prop(a.id, a.name) }
          data-testid="category"
        >
          { a.name }
          {' '}
        </button>

      )) : <div /> }
    </main>
  );
}
