import Button from 'react-bootstrap/Button';
import './Button.sass';


function ButtonOutline({className, children}) {
  return (
    <>
      <Button variant="outline" className={`universal_button ${className}`}>{children}</Button>
    </>
  );
}

export default ButtonOutline;