import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './PayModal.css';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  
  const dispatch = useDispatch()
  
  let user = useSelector(store => store.userReducer.user)
  let carrito = useSelector(store => store.productReducer.carrito)
  
  const handleOpen = () =>  {
    console.log(user)
    if (user){
        setOpen(true)
    } else {
        toast.error('Login para realizar la compra', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
}

  const handleClose = () => setOpen(false);


  const enviarFactura = async (email) => {
    if (window.confirm('Desea realizar la compra?')) {
      await dispatch(userActions.enviarBoleta(email, carrito))
      dispatch({ type: 'MESSAGE', payload: { view: true, message: "GRACIAS POR SU COMPRA, LE ENVIAMOS UN EMAIL CON EL RESUMEN", success: true } });
      setOpen(false)
    }
    else {
      dispatch({ type: 'MESSAGE', payload: { view: true, message: "LO ESPERAMOS PRONTO", success: false } });
    }
  }

  return (
    <div classname="container-modal">
      <Button className='button-compra' onClick={handleOpen}>Iniciar Compra</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  style={{backgroundColor: "#101010"}}>
            <h1 style={{textAlign: 'center', marginBottom: 20, color: "#88d317"}}>Datos de pago</h1>
         <form className='form-modal'>
            <label style={{fontSize: 20}} for="tarjetas">Elegi tu tarjeta:</label>
            <input style={{color: "black"}} list='tarjetas' name="tarjeta" id="tarjeta"/>
            <datalist id="tarjetas">
                <option value="Visa"/>
                <option value="Mastercard"/>
                <option value="AMEX"/>
            </datalist>
            <input placeholder='Nombre en tarjeta' type="text"/>
            <input placeholder='0000 0000 0000 0000' type="number"/>
            <input placeholder='Vencimiento mm/aa' type="text"/>
            <input placeholder='Codigo de Seguridad' type="number"/>
         </form>
            <button className="button-compra" onClick={() => enviarFactura(user.email, carrito)}>
              Comprar
            </button>
        </Box>
      </Modal>
    </div>
  );
}