import Switch from '@mui/material/Switch';
import type { MySwitchProps } from '../../App';

function InfoSwitch({ label, IsChecked, HandleChange }: MySwitchProps) {
    return (
        <div>
            <Switch checked={IsChecked} onChange={HandleChange} />
            <label style={{ marginRight: '8px' }}>{label}</label>
        </div>
    );
}

export default InfoSwitch;
