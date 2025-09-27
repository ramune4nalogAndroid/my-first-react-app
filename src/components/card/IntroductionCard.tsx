import Button from '../commons/Button';
import SelectInput from '../commons/SelectInput';
import IntroductionDialog from '../dialogs/IntroductionDialog';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import type { IntroductionCardProps } from '../../App';

function IntroductionCard({ count, incrementButton, decrementButton, selectIncrementColorButton, selectDecrementColorButton, dialogButton }: IntroductionCardProps) {
  return(
    <Card> 
        <CardContent>
            <Typography variant = 'h4' sx = {{ color: 'dimgrey', fontWeight: 'bold' }}>Let's count</Typography>
            <Typography variant= 'h5' sx = {{ color: 'yellowgreen', fontWeight: 'lighter' }}>Count: {count}</Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'left', gap: '10px' }}>
            <SelectInput {...selectDecrementColorButton} />
            <SelectInput {...selectIncrementColorButton} />
            <Button {...decrementButton} />
            <Button {...incrementButton} />
            <IntroductionDialog {...dialogButton} />
        </CardActions>
    </Card>
  )
}

export default IntroductionCard