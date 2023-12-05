import { useState } from 'react'


function App() {
  
  const initialFormData = {
    title : ''
  };
  
  const [formData, setFormData] = useState(initialFormData);
  const [articleTitleList, setArticleTitleList] = useState([]);
  
  function updateFormData(newValue, fieldName) {
  
    const newFormData = { ...formData };
  
    newFormData[fieldName] = newValue;
  
    setFormData(newFormData);
  
  }

  function handleFormSubmit(e) {
    // Evita il refresh della pagina come normalmente farebbe il form
    e.preventDefault();

    // Aggiungo l'utente alla lista usersList
    // Aggiorno lo state
    setArticleTitleList([...articleTitleList, {
      ...formData,
      id: crypto.randomUUID(),
    }]);

    // Resetto il form
    setFormData(initialFormData);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>  

        <div>
          <label htmlFor="name_article" className='block font-bold mb-2'>Tile</label>
          <input type="text" name='title' placeholder="Enter article's title" className="border px-3 py-4 w-full" value={formData.title} onChange={(e) => updateFormData(e.target.value, 'title')}/>
        </div>

        <button className="mt-2 px-4 py-3 bg-green-300 hover:bg-green-600">Submit</button>

      </form>

      <div>
        <ul>
          {articleTitleList.map((article) => (
            <li key={article.id}>
              {article.title} - {article.id}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
