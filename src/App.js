import logo from './logo.svg';
import './App.css';
import Table from './Table'
import Expandable from './Expandable'
import Sorting from './Sorting'
import Selectable from './Selectable'
import Pagination from './Pagination'

function App() {
  return (
    <div className="App">
      <Table />
      <Expandable />
      <Sorting />
      <Selectable />
      <Pagination />
    </div>
  );
}

export default App;
