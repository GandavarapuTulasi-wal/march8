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
    {
        id: 7,
        title: 'Avengers',
        year: '2012',
    },
    {
        id: 8,
        title: 'Thor the dark world',
        year: '2013',
    },
    {
        id: 9,
        title: 'Iron man 3',
        year: '2013',
    },
    {
        id: 10,
        title: 'Caption America:The winter Soldier',
        year: '2014',
    },
    {
        id: 11,
        title: 'Guardians of the Galaxy',
        year: '2014',
    },
    {
        id: 12,
        title: 'Guardians of the Galaxy vol.2',
        year: '2014',
    },
    {
        id: 13,
        title: 'Avengers:Age of Ultron',
        year: '2015',
    },
    {
        id: 14,
        title: 'Ant-man',
        year: '2015',
    },
    {
        id: 15,
        title: 'Caption-America:Civil war',
        year: '2016',
    },
    {
        id: 16,
        title: 'Spider-man:Home Coming',
        year: '2017',
    },
    {
        id: 17,
        title: 'Black Panther',
        year: '2018',
    },
    {
        id: 18,
        title: 'Doctor Strange',
        year: '2016',
    },
    {
        id: 19,
        title: 'Thor:Ragnarok',
        year: '2017',
    },
    {
        id: 20,
        title: 'Avengers:Infinity war',
        year: '2018',
    },
    {
        id: 21,
        title: 'Avengers:Endgame',
        year: '2019',
    },
    {
        id: 22,
        title: 'Spiderman:Far from home',
        year: '2019',
    },
    {
        id: 23,
        title: 'Eternals',
        year: '2021',
    },
    {
        id: 24,
        title: 'Spiderman:No from home',
        year: '2021',
    },
]

function Pagination() {
    return (
        <div>
            <h1>Pagination tables</h1>
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        </div>
    );
};
export default Pagination