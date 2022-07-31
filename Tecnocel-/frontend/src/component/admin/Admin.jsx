import React, { useState, useEffect } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import productActions from '../../redux/actions/productActions';
import { Link as LinkRouter } from 'react-router-dom';
import './admin.css';

const Admin = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState('')
  const [reload, setReload] = useState(false)
  useEffect(() => {

    dispatch(productActions.getAllProducts())


  }, [reload]);

  const createProduct = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      description: e.target[1].value,
      price: e.target[2].value,
      brand: e.target[3].value,
      color: e.target[4].value,
      sizeTv: e.target[5].value,
      RAM: e.target[6].value,
      category: e.target[7].value,
      stock: e.target[8].value,
      system: e.target[9].value,
      disc: e.target[10].value,
      processor: e.target[11].value,
      images: e.target[12].value

    }
    console.log(data)

    await dispatch(productActions.createProduct(data))
    setReload(!reload)
  }

  const deleteProduct = async (id) => {

    await dispatch(productActions.deleteProduct(id))
    setReload(!reload)
  }


  let products = useSelector(store => store.productReducer.products)
  let filter = products.filter(product => product.name.toLowerCase().startsWith(search.trim().toLocaleLowerCase()))



  return (
    <div className='container-all'>
      <div className="container">

        <div className="admin-product-form-container">

          <form className='fromulario' onSubmit={createProduct}>
            <h3>Agregar producto</h3>
            <input type="text" placeholder="Ingrese el nombre del producto" name="producto_nombre" className="box" required />
            <input type="text" placeholder="Ingrese la descripcion del producto" name="producto_descrep" className="box" required />
            <input type="number" placeholder="Ingrese el precio del producto" name="producto_precio" className="box" required />
            <input type="text" placeholder="Ingrese la marca del producto" name="producto_marca" className="box" />
            <input type="text" placeholder="Ingrese el color del producto" name="producto_color" className="box" />
            <input type="text" placeholder="Ingrese las pulgadas " name="producto_pulgadas" className="box" />
            <input type="number" placeholder="Ingrese capacidad de memoria RAM" name="producto_RAM" className="box" />
            <input type="text" placeholder="Ingrese la categoria del producto" name="producto_cat" className="box" required />
            <input type="number" placeholder="Ingrese el stock" name="producto_stock" className="box" required />
            <input type="text" placeholder="Ingrese el sistema operativo" name="producto_system" className="box" />
            <input type="text" placeholder="Ingrese el disco del producto" name="producto_disco" className="box" />
            <input type="text" placeholder="Ingrese el procesador del producto" name="producto_prosser" className="box" />

            <input type="text" placeholder="Ingrese la imagen del producto" name="producto_imagen" className="box" required />
            {/* <input type="file" accept="image/png, image/jpeg, image/jpg"  name="producto_image" className="box" /> */}
            <input id="agregar-btn" type="submit" className="btn" name="add_product" value="AGREGAR" />
          </form>

        </div>



        <div className="product-display">
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', paddingTop: '8rem' }}>
          <div className='searchConteiner'>
            <input className='search' onKeyUp={(e) => { setSearch(e.target.value) }} placeholder='Buscar producto' type='text'></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg></div>
        </Box>
          <table className="product-display-table">
            <thead>
              <tr>
                <td>IMAGEN</td>
                <td>PRODUCTO</td>
                <td>PRECIO</td>
                <td colspan="2">ACCION</td>
              </tr>
            </thead>
            {products &&
              <>
                {
                  search == "" ? products.map((product, index) => <tr key={index}>
                    <td><img src={product.images} alt="img" className="img-product" /></td>
                    <td>{product.name}</td>
                    <td>USD {product.price}</td>
                    <td colspan="2">
                      {/* <LinkRouter to={`/product/${product._id}`}><button className="btn btn-edit"><BorderColorIcon sx={{ fontSize: '2rem', marginRight: '5px' }} /> EDITAR</button></LinkRouter> */}
                      <LinkRouter to={`/product/${product._id}`}><button className="btn-edit"><span class="text">Editar</span><span class="icon">🖍️</span></button></LinkRouter>
                      {/* <button onClick={() => deleteProduct(product._id)} className="btn"><DeleteIcon sx={{ fontSize: '2rem', marginRight: '5px' }} /> ELIMINAR</button> */}
                      <button onClick={() => deleteProduct(product._id)} className="btn-delete"><span class="text">Eliminar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 34 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                    </td>
                  </tr>)
                    :
                    <>
                      {filter.length > 0 ? <>{filter.map((product, index) => <tr key={index}>
                        <td><img src={product.images} alt="img" className="img-product" /></td>
                        <td>{product.name}</td>
                        <td>USD {product.price}</td>
                        <td colspan="2">
                          {/* <LinkRouter to={`/product/${product._id}`}><button className="btn btn-edit"><BorderColorIcon sx={{ fontSize: '2rem', marginRight: '5px' }} /> EDITAR</button></LinkRouter> */}
                          <LinkRouter to={`/product/${product._id}`}><button className="btn-edit"><span class="text">Editar</span><span class="icon">🖍️</span></button></LinkRouter>
                          {/* <button onClick={() => deleteProduct(product._id)} className="btn"><DeleteIcon sx={{ fontSize: '2rem', marginRight: '5px' }} /> ELIMINAR</button> */}
                          <button onClick={() => deleteProduct(product._id)} className="btn-delete"><span class="text">Eliminar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 34 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                          
                        </td>
                      </tr>)}</>
                        : <td>NO SE ENCONTRARON RESULTADOS</td>

                      }
                    </>
                }



              </>}

          </table>

        </div>

      </div>
    </div>
  )
}

export default Admin