const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

export const ColorList = props => {
  return (
    <ul>
      {/* check before to ensure the map fn() not break */}
        {isEmpty(props.colors)
          ? <li>No Colors</li> 
          : props.colors.map(color => 
          <li key={color.id}>
            {color.id} {color.name} {color.hexcode}
            <button type="button" onClick={() => props.onDeleteColor(color.id)}>X</button>
          </li>)}
      </ul>
  );
}

ColorList.defaultProps = {
  colors: [],
};