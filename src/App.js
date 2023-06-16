
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import HomePage from './pages/HomePage';
import SingleBookPage from './components/SingleBookPage';
import About from './pages/About';
import Error from './pages/Error';
import HorrorRelease from './pages/Horror';
import FantasyRelease from './pages/Fantasy';
import HistoryRelease from './pages/History';
import RomanceRelease from './pages/Romance';
import ScifiRelease from './pages/Scifi';
import { useState } from 'react';
import allbooks from './json/allbooks.json';

function App() {
  const [books, setBooks] = useState('')
  const filteredBooks = allbooks.filter((book) =>
  book.title.toLowerCase().includes(books.toLowerCase())
);
function handleChangeInput(value) {
  setBooks(value)
}

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar handleChangeInput={handleChangeInput}/>
        <Routes>
          <Route index element={<HomePage handleChangeInput={handleChangeInput} filteredBooks={filteredBooks} />} />
          {/* {/* <Route path='/new-post' element={<NewPost />} /> */}
          <Route path=':category/:asin' element={<SingleBookPage />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/horror' element={<HorrorRelease />} />
          <Route path='/fantasy' element={<FantasyRelease />} />
          <Route path='/history' element={<HistoryRelease />} />
          <Route path='/romance' element={<RomanceRelease />} />
          <Route path='/scifi' element={<ScifiRelease />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>

    </div>
  );
}

export default App;
