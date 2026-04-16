import React, { useState, useMemo, useCallback } from 'react';
import './FilteredList.css'; 

const initialUsers = [
  { id: 1, name: 'V' },
  { id: 2, name: 'Johnny Silverhand' },
  { id: 3, name: 'Morrigan' },
  { id: 4, name: 'Alistair' },
  { id: 5, name: 'Jackie Welles' }
];

const FilteredList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log('[LOG] Ререндер FilteredList');

  const filteredUsers = useMemo(() => {
    console.log('[LOG] --- вычисляем отфильтрованный список (useMemo) ---');
    return users.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [users, searchQuery]);

  const handleAddUser = useCallback(() => {
    const newUser = { 
      id: Date.now(), 
      name: `Новый наёмник ${Math.floor(Math.random() * 100)}` 
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }, []);

  const themeClass = isDarkTheme ? 'dark' : 'light';

  return (
    <div className={`filtered-list-container ${themeClass}`}>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск по имени..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="buttons-container">
        <button className="btn-add" onClick={handleAddUser}>
          добавить пользователя
        </button>
        <button className="btn-toggle" onClick={() => setIsDarkTheme(prev => !prev)}>
          переключить тему
        </button>
      </div>

      <ul className="users-list">
        {filteredUsers.map(user => (
          <li key={user.id} className="user-item">
            {user.name}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default FilteredList;