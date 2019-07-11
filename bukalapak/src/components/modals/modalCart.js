import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../support/styles/modalCart.css';
import Axios from 'axios';
import { localServer } from '../../support/urlAPI/localServer'

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      cart : {       
        id: '',
        productName: '',
        prize: '',
        rating: '',
        img: '',
        discount: '',
        lapakName: '',
        lapakImg: '',
        lapakType: '',
        category: '',
        create_at: '',
        role: ''
      }
    };

    this.toggle = this.toggle.bind(this);
  }


  componentDidMount() {
    this.getDetailProduct()
  }
  
  getDetailProduct = () => {
    let id = this.props.match.params.id
    Axios.get(localServer +`/product/${id}`).then(res =>{
      let productlist = res.data
      console.log(res)
      this.setState({
          product:{
            id: productlist.id,
            productName: productlist.productName,
            prize: productlist.prize,
            rating: productlist.rating,
            img: productlist.img,
            discount: productlist.discount,
            lapakName: productlist.lapakName,
            lapakImg: productlist.lapakImg,
            lapakType: productlist.lapakType,
            category: productlist.category,
            create_at: productlist.create_at,
            role: productlist.role
          }
      })
    })
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle} style={{width:"100%"}}> Tambah Keranjang{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Keranjang Belanja</ModalHeader>
          <ModalBody>
            <div className="row">
                <div className="col-sm-6 text-left">
                    <div className="row">
                        <div className="col sm 4 gambar">
                            <img src="https://s1.bukalapak.com/img/69429388811/small/data.png.webp" alt=""/>
                        </div>
                        <div className="col sm 7">
                            <div className="row">
                                <p>pradia batik pekalongan</p>
                            </div>
                            <div className="row">
                                <input type="button" value="-"/>
                                <input style={{width:"50px"}} className="text-center" type="text"/>
                                <input type="button" value="+"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 offset-md-2 text-right align-self-center">
                    Rp.80.000
                </div>
                <div className="col-sm-1 align-self-center">
                    <i style={{cursor:"pointer"}} className="fa fa-times" aria-hidden="true" />
                </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Lanjut ke Pembayaran</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;