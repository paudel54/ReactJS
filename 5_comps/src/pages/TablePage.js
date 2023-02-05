// Parent of Table is TablePage we add config file to create dynamic table 

// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
    // Created data  witth list of obj to populate later.
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 },

    ];
    // config data aray to make table header more dynamic passing to table.js child comp 
    const config = [
        {
            // For the first table column
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Color',
            // render: (fruit) => fruit.color
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
        // {
        //     label: 'Sansrit',
        //     render: (fruit) => fruit.score ** 2,
        //     header: () => <th className="bg-red-500">Score</th>,

        // }
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return <div>
        {/* Passing data as prob Name data */}
        {/* passing array of object as  prop ot table comp the child */}
        <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
}

export default TablePage;