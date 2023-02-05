function Table({ data, config, keyFn }) {

    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
        });
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {/* we can have dynamic table data, it's hard corded so td need some config. 
                we can fix it up with mapping funciton , solve it with mapping rendered fn*/}
                {renderedCells}
            </tr>
        );
    });
    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {/* <th>Fruit</th>
                <th>Color</th>
                <th>Score</th> */}
                {renderedHeaders}
            </tr>
        </thead>

        <tbody>
            {renderedRows}
        </tbody>
    </table>
}

export default Table;

