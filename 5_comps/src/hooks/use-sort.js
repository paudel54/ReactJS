import { useState } from 'react';
// expect to receive data and config as parameter from SortableTable.js
function useSort(data, config) {
    // by Default Null indicates we are not sorting by default it's unsorted
    // To Keep Track of set order. 
    const [sortOrder, setSortOrder] = useState(null);
    // TO keep track of which column we are sorting by
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

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
    // fn return to erase up the errors 
    return {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    }
}

export default useSort;