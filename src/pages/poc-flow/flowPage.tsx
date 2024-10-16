import { ReactFlowProvider } from "@xyflow/react";
import { DnDProvider } from "./components/dndProvider";
import FlowTable from "./components/flow";
import './flowPage.css';

function FlowPage() {
    return (
        <ReactFlowProvider>
            <DnDProvider>
                <div className='flowTable'>
                    <FlowTable></FlowTable>
                </div>
            </DnDProvider>
        </ReactFlowProvider>
    );
}

export default FlowPage;
