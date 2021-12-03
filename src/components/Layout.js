import './Layout.css';

export const Layout = ({ children }) => {

  // has to use className !! since alss is a reserved word
  // React.createElement('div', {className: 'container' });
  return (
    <div className="container">
      {children}
    </div>
  );
}