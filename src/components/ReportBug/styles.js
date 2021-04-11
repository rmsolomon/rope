import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    textAlign: 'center',
    marginTop: '90px',
    paddingBottom: '30px',
  },
  title: {
    paddingBottom: '30px',
  },
  dropdown: {
    paddingTop: '20px',
  },
  input: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: '30px',
  },
}));