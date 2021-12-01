// purpose of colorForm is to collect color data
import { useForm } from '../hooks/useForm';

export const ColorForm = props => {

  /* const [colorForm, setColorForm ] = useState({
    name: '',
    hexcode: '',
  }); */
  // custom hook
  const [ colorForm, change, resetColorForm ] = useForm({
    name: '',
    hexcode: '',
  });

  // we want to pass from child component -> parent ==> callback
  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });
    
    // clear colorForm
    /* setColorForm({
      name:'', hexcode:''
    }); */
    resetColorForm();
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        HexCode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor} >{props.buttonText}</button>
    </form>
  );
};