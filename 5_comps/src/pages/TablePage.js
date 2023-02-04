import Table from '../components/Table';

function TablePage() {
    // Created data  witth list of obj to populate later.
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 },

    ];
    return <div>
        {/* Passing data as prob Name data */}
        <Table data={data} />
    </div>
}

export default TablePage;