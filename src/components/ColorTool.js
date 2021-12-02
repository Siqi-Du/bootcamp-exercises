import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSordtedList';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {
  
  // create an array of objects
  // object: key is always string, value can be any type
  // passed through props
  /* const colors = [
    { id: 1, name : 'red', hexcode: 'ff0000'},
    { id: 2, name : 'green', hexcode: '00ff00'},
    { id: 3, name : 'blue', hexcode: '0000ff'},
  ]; */

  // to transfer array to react list items(callback fn called on each element of array)
  // to display value in jsx, wrap it in {}
 /*  const colorListItem = colors.map(color => {
    return <li key={color.id}>{color.name} {color.hexcode}</li>;
  }); */

  // if just a simgle expression, can delete the return and {}
  // map(color => <li key={color.id}>{color.name} {color.hexcode}</li>)

  // ------------------------------------

  // props should not be changeable through the component using it !!!!!!!!!!

  // Never do this!!!! worst line of code ever
  // NOT change the original array, only consumes
  // every reuse of this compoennt will push a new color to array
  /* props.colors.push({
    id: 4, name: 'purple', hexcode: 'ff00ff',
  }); */

  // wrong => cannot modify props object, its frozen
  // console.log(Object.isFrozen(props));
  // props.newProp = 'add new prop';

  // state is changeable
  // usetate is a function call, passing an object
  // useState returns a tuple(array), first be assigned to colorForm, second ...
  /* const [colorForm, setColorForm ] = useState({
    name: '',
    hexcode: '',
  }); */
  // colorForm has the initial value: { name: '', hexcode: ''}
  
  // mapr a copy of colors array to state
  // use , to skip replaceColor
  const [ 
    sortedColors, appendColor, , deleteColor, 
    sortCol, setSortCol, sortDir, setSortDir 
  ] = useSortedList([...props.colors], 'id', SORT_ASC);

  const sortColors = () => {
    if(sortCol === 'name' && sortDir === SORT_DESC){
      setSortCol('id');
      setSortDir(SORT_ASC);
    } else if (sortCol === 'id') {
      setSortCol('name');
    } else {
      setSortDir(SORT_DESC);
    }
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <button type="button" onClick={sortColors}>Sort {sortCol}:{sortDir}</button>
      <ColorList colors={sortedColors} onDeleteColor={deleteColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
      <ToolFooter />
      {/* <ToolHeader headerText={100} />  --> for propTypes */}

      {/* <header>
        <h1>Color Tool</h1>
      </header> */}

      {/* build a list of colors */}

      {/* static */}
      {/* <ul>
        <li>green</li>
        <li>red</li>
        <li>blue</li>
      </ul> */}

      {/* dynamic */}
      {/* <ul>{colorListItem}</ul> */}
      {/* OR */}
      {/* <ul>
        {colors.map(color => 
          <li key={color.id}>
            {color.name} {color.hexcode}
          </li>)}
      </ul> */}

      {/* accessibility */}
      {/* <form>
        <label>
          Name:
          <input type="text" name="name" value={colorForm.name} onChange={change} />
        </label>
        <label>
          HexCode:
          <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </label>
        <button type="button" onClick={addColor} >Add Color</button>
      </form> */}
    </>
  )
};


// add default props if it is an array
ColorTool.defaultProps = {
  colors: [],
};