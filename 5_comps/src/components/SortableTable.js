import { useState } from 'react';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go"

function SortableTable(props) {
    // by Default Null indicates we are not sorting by default it's unsorted
    // To Keep Track of set order. 
    const [sortOrder, setSortOrder] = useState(null);
    // TO keep track of which column we are sorting by
    const [sortBy, setSortBy] = useState(null);

    const { config, data } = props;

    const handleClick = (label) => {
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

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(column.label)}>
                {/* 3 things , which colum,  weather or not we sorting, sort dir*/}

                <div className='flex items-center'>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
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
        {/* {sortOrder} - {sortBy} */}
        <Table {...props} data={sortedData} config={updatedConfig} />;
    </div>

}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        // return 'Show both icons';
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    }

    if (sortOrder === null) {
        // return 'show both icons';
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    } else if (sortOrder === 'asc') {
        // return 'show up icon'
        return <div>
            <GoArrowSmallUp />
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <GoArrowSmallDown />
        </div>
    }
}




export default SortableTable;