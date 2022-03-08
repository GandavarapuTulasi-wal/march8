import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 3,
        title: 'iron man 1',
        year: '2008',
    },
    {
        id: 4,
        title: 'iron man 2',
        year: '2010',
    },
    {
        id: 5,
        title: 'Hulk',
        year: '2008',
    },
    {
        id: 6,
        title: 'Thor',
        year: '2011',
    },
]

function SortingTable() {
    return (
        <div>
            <h1>Sorting tables</h1>
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    );
};
export default SortingTable