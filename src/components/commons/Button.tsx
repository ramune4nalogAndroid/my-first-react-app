import type { MyButtonProps } from '../../App';

function Button({ Description, HandleClick, ButtonColor }: MyButtonProps) {
  return (
    <div>
      <button className="button" style={{ backgroundColor: ButtonColor, color: 'white', minWidth: '51.48px' }} onClick={HandleClick}>
        {Description}
      </button>
    </div>
  )
}

export default Button
