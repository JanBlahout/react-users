import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.css';

const ErrorModal = props => {
  return (
    <div className={classes.modal} onClick={props.modalWindowConfirm}>
      <Card className={classes.modalContent}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.modalWindowConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
