import logo from './logo.svg';
import './App.css';
import Table from './Table'
import ExpandableTable from './ExpandableTable'
import SortingTable from './SortingTable'
import SelectableTable from './SelectableTable'
import PaginationTable from './PaginationTable'

function App() {
  return (
    <div className="App">
      <Table />
      <ExpandableTable />
      <SortingTable />
      <SelectableTable />
      <PaginationTable />
    </div>
  );
}

export default App;
