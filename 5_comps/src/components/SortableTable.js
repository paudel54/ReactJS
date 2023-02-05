import { useState } from 'react';
import Table from './Table';

function SortableTable(props) {
    // by Default Null indicates we are not sorting by default it's unsorted
    // To Keep Track of set order. 
    const [sortOrder, setSortOrder] = useState(null);
    // TO keep track of which column we are sorting by
    const [sortBy, setSortBy] = useState(null);

    const { config } = props;

    const handleClick = (label) => {
        // console.log(label);
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th onClick={() => handleClick(column.label)}>{column.label} IS SORTABLE</th>
        };

    });

    return <div>
        {sortOrder} - {sortBy}
        <Table {...props} config={updatedConfig} />;
    </div>

}

export default SortableTable;