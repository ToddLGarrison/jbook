import './cell-list.css';
import { Fragment, useEffect } from "react";
import { useTypedSelector } from "../hooks/use-type-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import { useActions } from '../hooks/use-actions';

const CellList: React.FC = () => {
    const cells = useTypedSelector(({ cells: { order, data } }) => order.map((id) => data[id]));

    const { fetchCells, saveCells } = useActions();

    useEffect(() => {
        fetchCells();
    }, []);

    useEffect(() => {
        saveCells();
    }, []);

    const renderedCells = cells.map((cell) => (
        <Fragment key={cell.id}>
            <CellListItem key={cell.id} cell={cell}/>
            <AddCell previousCellId={cell.id} />
        </Fragment>
        ));
    
    return (
        <div className='cell-list'>
            <AddCell forceVisible={cells.length === 0} previousCellId={null} />
            {renderedCells}
        </div>
    )
};

export default CellList