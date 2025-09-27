import type { SelectChangeEvent } from '@mui/material';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import TablePage from './components/pages/TablePage';


export interface MyButtonProps {
  Description: string;
  HandleClick: () => void;
  ButtonColor: string;
}

export interface MySelectProps {
  Label: string;
  Options: string[];
  SelectedValue: string;
  HandleChange: (event: SelectChangeEvent) => void;
}

export interface MyDialogProps{
  Open: boolean;
  HandleOpen: () => void;
  HandleClose: () => void;
  HandleAccept : () => void;
}

export interface IntroductionCardProps {
  count: number;
  incrementButton: MyButtonProps;
  decrementButton: MyButtonProps;
  selectDecrementColorButton: MySelectProps;
  selectIncrementColorButton: MySelectProps;
  dialogButton: MyDialogProps;
}

export interface ColumnTaskTable {
  id: 'task_id' | 'task' | 'task_description' | 'task_status' | 'file' | 'task_date' | 'user_id' | 'user_name' | 'user_email' | 'user_regional_department' | 'user_phone_extension';
  label: string;
  minWidth?: number;
  align?: 'center' | 'right' | 'left';
  format?: (value: number) => string;
}

export interface DataTaskTable {
    task_id: number;
    task: string;
    task_description: string;
    task_status: string;
    file: string;
    task_date: string;
    user_id: number;
    user_name: string;
    user_email: string;
    user_regional_department: string;
    user_phone_extension: number;
    label?: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  );
}

export default App
