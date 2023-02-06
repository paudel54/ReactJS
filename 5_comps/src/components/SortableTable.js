import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go"
import useSort from '../hooks/use-sort';

function SortableTable(props) {
    const { config, data } = props;
    // Destructuring out the return form use-sort hooks 

    const {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => setSortColumn(column.label)}>
                {/* 3 things , which colum,  weather or not we sorting, sort dir*/}

                <div className='flex items-center'>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        };

    });

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