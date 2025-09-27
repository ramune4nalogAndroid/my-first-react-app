
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TaskTable from "../table/TaskTable";
import Button from '../commons/Button';
import type { ColumnTaskTable, MyButtonProps, DataTaskTable  } from "../../App";
import { useNavigate } from "react-router-dom";


function TablePage() {
        const columns: ColumnTaskTable[] =[
            { id: 'task_id', label: 'Task ID', minWidth: 50, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
            { id: 'task', label: 'Task', minWidth: 100, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
            { id: 'task_description', label: 'Task Description', minWidth: 170, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
            { id: 'task_status', label: 'Task Status', minWidth: 70, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
            { id: 'file', label: 'File', minWidth: 100, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
            { id: 'task_date', label: 'Task Date', minWidth: 100, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
            { id: 'user_id', label: 'User ID', minWidth: 70, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
            { id: 'user_name', label: 'User Name', minWidth: 100, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
            { id: 'user_email', label: 'User Email', minWidth: 200, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
            { id: 'user_regional_department', label: 'User Regional Department', minWidth: 70, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
            { id: 'user_phone_extension', label: 'User Phone Extension', minWidth: 70, align: 'left', format: (value: number) => value.toLocaleString('en-US') },
        ];

        const rows: DataTaskTable[] = [
                { task_id: 1, task: 'Update record', task_description: 'Account update for customer OD123', task_status: 'Pending', file: 'Customers', task_date: '2025-04-01', user_id: 234, user_name: 'John Doe', user_email: 'john.doe@example.com', user_regional_department: 'North', user_phone_extension: 201, label: 'Task 1', minWidth: 70, align: 'right', format: (value: number) => value.toLocaleString('en-US') },
                { task_id: 2, task: 'Delete record', task_description: 'Remove outdated provider PR456', task_status: 'Completed', file: 'Providers', task_date: '2025-04-01', user_id: 567, user_name: 'Jane Doe', user_email: 'jane.doe@example.com', user_regional_department: 'South-East', user_phone_extension: 305, label: 'Task 2', minWidth: 70, align: 'right', format: (value: number) => value.toLocaleString('en-US') },
                { task_id: 3, task: 'Create record', task_description: 'New invoice for client IN789', task_status: 'Pending', file: 'Invoices', task_date: '2025-04-02', user_id: 890, user_name: 'John Smith', user_email: 'john.smith@example.com', user_regional_department: 'North-West', user_phone_extension: 248, label: 'Task 3', minWidth: 70, align: 'right', format: (value: number) => value.toLocaleString('en-US') },
                { task_id: 4, task: 'Create record', task_description: 'Credit note for order CN321', task_status: 'Canceled', file: 'Credit', task_date: '2025-04-03', user_id: 123, user_name: 'Jane Smith', user_email: 'jane.smith@example.com', user_regional_department: 'North-East', user_phone_extension: 467, label: 'Task 4', minWidth: 70, align: 'right', format: (value: number) => value.toLocaleString('en-US') },
                { task_id: 5, task: 'Update record', task_description: 'Purchase order update PO654', task_status: 'Authorized', file: 'Purchases', task_date: '2025-04-05', user_id: 456, user_name: 'John Williams', user_email: 'john.williams@example.com', user_regional_department: 'North', user_phone_extension: 527, label: 'Task 5', minWidth: 70, align: 'right', format: (value: number) => value.toLocaleString('en-US') },
        ];
        
        const navigate = useNavigate();
        
        const handlePreviousPage = () => {
            navigate("/");
        };
        
        const darkTheme = createTheme({
            palette: {
                mode: 'dark',
                },
        });


        const previousPageButton: MyButtonProps = {
            Description: "Previous Page",
            HandleClick: handlePreviousPage,
            ButtonColor: 'slateblue',
        };

        return (
            <ThemeProvider theme={darkTheme}>
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Table Page</h1>
                <TaskTable columns={columns} rows={rows} />
                <div style={{ position: 'fixed', top: 24, left: 24, zIndex: 1200 }}>
                    <Button {...previousPageButton} />
                </div>
            </ThemeProvider>
        );
}

export default TablePage;