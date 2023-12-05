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

  function removeArticle(idToRemove) {
    // const newUsersList = [...usersList]

    // newUsersList.splice(newUsersList.findIndex((user) => user.id === idToRemove), 1)

    setArticleTitleList(articleTitleList.filter((article) => article.id !== idToRemove));
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
            <li key={article.id} className="flex py-4 border-b">
              {article.title} - {article.id}

              <button onClick={() => removeArticle(article.id)} className="w-6 h-6 flex items-center justify-center ml-auto bg-red-500 text-white font-bold">
                X
              </button>

            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
