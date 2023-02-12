import useInputForm from '../hooks/useInputForm';

function ProductForm({handleSubmit}) {
    //form
    const inputTitle = useInputForm();
    const inputPrice = useInputForm();
    const inputType = useInputForm();

    const onHandleSubmit = (event) => {
        event.preventDefault();
        const data = {
            inputTitle: inputTitle.value,
            inputPrice: inputPrice.value,
            inputType: inputType.value,
        }

        handleSubmit(data)
    }

    return ( 
        <form onSubmit={onHandleSubmit}>
            <div className='product-form'>
            <h3 style={{textAlign: 'center'}}>Thông tin sản phẩm</h3>

            <div>
                <label>Tên sản phẩm: </label>
                <input placeholder='Nhập tên sản phẩm' type="text" value={inputTitle.value} onChange={inputTitle.onChange} />
            </div>

            <div>
                <label>Giá sản phẩm: </label>
                <input type="text" placeholder='Nhập giá sản phẩm'  value={inputPrice.value} onChange={inputPrice.onChange} />
            </div>

            <div>
                <label>Loại sản phẩm: </label>
                <input type="text" placeholder='Nhập loại sản phẩm'  value={inputType.value} onChange={inputType.onChange} />
            </div>
    
            <button type="submit">Thêm sản phẩm</button>
            </div>
		</form>
     );
}

export default ProductForm;