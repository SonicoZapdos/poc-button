import { ReactFlowProvider } from "@xyflow/react";
import FlowTable from "./components/flow";
import './flowPage.css';

function FlowPage() {
    return (
        <ReactFlowProvider>
            <div className='flowTable'>
                <FlowTable></FlowTable>
            </div>
        </ReactFlowProvider>
    );
}

export default FlowPage;
