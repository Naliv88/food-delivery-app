// У папці "context" містяться файли, пов'язані з контекстом, який використовується для передачі даних між компонентами.
import React, { createContext } from 'react';



// Створюємо контекст для передачі даних між компонентами
export const NotesContext = createContext();

// Створюємо провайдер для забезпечення доступу до даних в контексті
export const NotesProvider = ({ children }) => {
  // Створюємо стейти для зберігання нотаток, поточної нотатки, рядка пошуку, фільтрованого масиву нотаток
  // const [notes, setNotes] = useState([]);

  // const [shope, setShope] = useState([]);


  // Виконуємо запит до бази даних для отримання всіх shops при монтуванні компонента
  // useEffect(() => {}, [shope]);

  // Оновлюємо фільтрований масив нотаток при зміні рядка пошуку або нотаток
  // useEffect(() => {}, [searchFilter, notes]);

  // Оновлюємо фільтрований масив нотаток при зміні рядка пошуку або нотаток
  // const filteredNotesMemo = useMemo(() => {
  //   return notes.filter(
  //     note =>
  //       note.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
  //       note.body.toLowerCase().includes(searchFilter.toLowerCase())
  //   );
  // }, [searchFilter, notes]);



  return (
    <NotesContext.Provider
      value={{
        // notes,
        // setNotes,
        // currentNote,
        // setCurrentNote,
        // searchFilter,
        // setSearchFilter,
        // filteredNotes,
        // allowEditing,
        // setAllowEditing,
        // selectDB,
        // setSelectDB,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
