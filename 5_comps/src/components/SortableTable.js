import { useState } from 'react';
import Table from './Table';

function SortableTable(props) {
    // by Default Null indicates we are not sorting by default it's unsorted
    // To Keep Track of set order. 
    const [sortOrder, setSortOrder] = useState(null);
    // TO keep track of which column we are sorting by
    const [sortBy, setSortBy] = useState(null);

    const { config, data } = props;

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
    // Only sort data if sortOrder && sortBy are not null. unsorted
    // MAKE a copy of the 'data prop
    // FInd the correct sortValue function and use it for sorting. 
    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }
    return <div>
        {sortOrder} - {sortBy}
        <Table {...props} data={sortedData} config={updatedConfig} />;
    </div>

}

export default SortableTable;