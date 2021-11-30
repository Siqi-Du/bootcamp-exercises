import PropTypes from 'prop-types';

export const ToolHeader = (props) => {

  return (
    <header>
      <h1>{props.headerText}</h1>
    </header>
  );
};

// default value is ther's no prop value
ToolHeader.defaultProps = {
  headerText: "The Tool",
};

// at Intuit, all prop should have a prop type
ToolHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};