import React, { Component } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductList from "../components/productList/productList";
import { localServer } from '../support/urlAPI/localServer';
import Axios from "axios";
import swal from 'sweetalert';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom'


class ProductDetail extends Component {
  state = {
    product: {
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
    role: '',
    qty: 1
       
    },
    modal: false,
    toggle : this.toggle.bind(this)
    
}

toggle() {
  this.setState(prevState => ({
    modal: !prevState.modal
  }));
}

componentDidMount(){
  this.getDetailProduct()
  this.getAllProduct()
  window.scrollTo(0, 0)
}

getDetailProduct = () => {
  let id = this.props.match.params.id

  Axios.get(localServer +`product/productDetail/${id}`).then(res =>{
      let productlist = res.data.result[0]
      console.log('jangkrik bos',res)
      this.setState({
          product:{
            id: productlist.id_product,
            productName: productlist.productName,
            prize: productlist.prize,
            rating: productlist.rating,
            img: productlist.img,
            discount: productlist.discount,
            lapakName: productlist.lapakName,
            lapakImg: productlist.lapakImg,
            qty : productlist.qty,
            lapakType: productlist.lapakType,
            category: productlist.category,
            create_at: productlist.create_at,
            role: productlist.role
          }
      })
  })
}

getAllProduct = () => {
  Axios.get(localServer + 'product')
  .then((res) => {
      this.setState({productList : res.data.result})
  })
  .catch((err) => {
      console.log(err)
  })
}

addToCart = () => {
  Axios.post(localServer + 'cart/' , this.state.product)
  .then((res) => {
    let { cart } = this.state;
    this.setState({cart})
    swal(`produk berhasil masuk ke keranjang`, "You clicked the button!", "success");
  })
}

onBuy = () => {
  console.log(`lkjaljalds`, this.state.product)
  Axios.post(localServer + 'cart/' , this.state.product)
  .then((res) => {
console.log(`adsajdslkajdlkad`, res)
    let { cart } = this.state;
    this.setState({cart})
  })
}

handlePlus = () => {
  this.setState({
    product : this.state.product.qty + 1
  })
}

handleMin = () => {
  this.setState({
    product : this.state.product.qty - 1
  })
}

handleChange = (event) => {
  this.setState({qty: event.target.value});
}

  render() {
    return (
      <div className="container-fluid">
      <div className="row">
          <div className="col-9">
            <div className="card" style={{ width: "100%", height: "100%" }}>
              <div
                className="row"
                style={{ marginLeft: 8, marginTop: 8, marginBottom: 8 }}
              >
                <div className="col-4">
                  <div className="row" style={{ marginBottom: 8 }}>
                    <div className="col-sm">
                      <img
                        style={{ width: "100%" }}
                        src={this.state.product.img}
                        className="img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-sm">
                      <img
                      alt="..."
                        style={{ width: "100%" }}
                        src={this.state.product.img}
                      />
                    </div>
                    <div className="col-sm">
                      <img
                      alt="..."
                        style={{ width: "100%" }}
                        src={this.state.product.img}
                      />
                    </div>
                    <div className="col-sm">
                      <img
                      alt="..."
                        style={{ width: "100%" }}
                        src="https://s0.bukalapak.com/img/0854396813/thumb/pompa_galon_air_electric_recharge___dispenser_air_electric.jpg.webp"
                      />
                    </div>
                    <div className="col-sm">
                      <img
                      alt="..."
                        style={{ width: "100%" }}
                        src="https://s0.bukalapak.com/img/5441961404/thumb/pompa_galon_air_electric_recharge___dispenser_air_electric.jpg.webp"
                      />
                    </div>
                  </div>
                  <img
                    src={this.state.product.img}
                    className="img-fluid"
                    alt="..."
                    style={{ width: "100%" }}
                  />
                  <div className="row" style={{ marginTop: 10 }}>
                    <div className="col-4" style={{ paddingRight: 0 }}>
                      <img
                      alt="..."
                        src="https://s1.bukalapak.com/qr/product/1ek5ioh"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-8">
                      <text style={{ fontSize: 12 }}>
                        <b>Kode QR untuk transaksi di aplikasi Bulakapak</b>{" "}
                        Temukan fitur scan kode QR di kolom pencarian aplikasi
                        Bulakapak. 
                      </text>
                    </div>
                  </div>
                </div>
                <div className="col-8" style={{ marginTop: "1%" }}>
                  <p className="font-weight-bold" style={{ fontSize: 20 }}>
                  {this.state.product.productName}
                  </p>
                  <p>ini bintang</p>
                  <div className="dropdown-divider" />
                  <text className="font-weight-bolder" style={{ fontSize: 35 }}>
                    <CurrencyFormat value={this.state.product.prize} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                  </text>
                  <div className="row ml-3 mt-3 mb-3">
                    <input type="button" value="-" onClick={() => {}} />
                    <input style={{width:"50px"}} className="text-center" value={this.state.product.qty} onChange={this.handleChange} type="text"/>
                    <input type="button" value="+" onClick={() => {}} />
                  </div>
                  <div className="col" style={{ paddingLeft: 0 }}>
                    <Link to='/payment'><button
                      type="button"
                      className="btn btn-success font-weight-bold"
                      style={{ width: "100%", borderRadius: 2 }}
                      onClick={this.onBuy}
                    >
                      Beli Sekarang
                    </button></Link>
                  </div>
                  <div
                    className="row justify-content-md-center"
                    style={{ paddingLeft: 0, marginTop: 8}}
                  >
                  <div className="col-sm-6">
                    <input type="button" className="btn btn-outline-danger" value="Tambah ke Keranjang" onClick={this.addToCart} style={{width:"95%"}}/>
                  </div>
                  <div className="col-sm-6">
                    <input type="button" value="Chat Pelapak" className="btn btn-outline-success" style={{width:"95%"}} />
                  </div>                        
                    
                  </div>
                  <div
                    className="col col-md-offset-8"
                    style={{ paddingLeft: 0, marginTop: 8 }}
                  >
                    <button
                      type="button"
                      className="btn btn-light"
                      style={{
                        borderRadius: 50,
                        width: "25%",
                        marginRight: 8,
                        fontSize: 10,
                        color: "black",
                        borderColor: "#e7e7e7"
                      }}
                    >
                      Apakah stok masih ada?
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-outline-secondary"
                      style={{
                        borderRadius: 50,
                        width: "25%",
                        fontSize: 10,
                        color: "black",
                        borderColor: "#e7e7e7"
                      }}
                    >
                      Saya pesan sekarang ya!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3" style={{padding:0}} >
            <div
                className="row"
                style={{ marginLeft: 4, marginTop: 8, marginBottom: 8, marginRight:16 }}
              >
              <text style={{fontSize:13}} >PELAPAK</text>
              
              </div>
              <div className="row" style={{ marginLeft: 4, marginTop: 8, marginBottom: 8, marginRight:16 }} >
              <img style={{width:"20%", borderRadius:50}} src={this.state.product.lapakImg}/>
              <div className="col">
              <div className="row" style={{marginLeft:4}} >
              <text className="font-weight-bold">{this.state.product.lapakName}</text>  
              </div>
              <div className="row" style={{marginLeft:4}} >
              <text style={{fontSize: 12}} >100% (2048 feedback)</text>  
              </div>
              <div className="row" style={{marginLeft:4}} >
              <text style={{fontSize: 12, color: "red"}} >Nusantara Raya</text>  
              </div>
              </div>
              
              </div>
              <button
                      type="button"
                      className="btn btn-light font-weight-bold"
                      style={{
                        borderRadius: 2,
                        width: "95%",
                        borderColor: "#e7e7e7"
                      }}
                    >
                      Ikuti
                    </button>
          </div>
        </div>

        <div class="row" style={{ marginTop: "2%" }}>
          <div class="col-2" style={{ paddingRight: 0 }}>
            <button
              type="button"
              className="btn btn-light font-weight-bold "
              style={{
                borderRadius: 2,
                width: "100%",
                height: 70,
                color: "grey",
                borderColor: "#e7e7e7"
              }}
            >
              Detail Barang
            </button>
          </div>
          <div class="col-2" style={{ padding: 0 }}>
            <button
              type="button"
              className="btn btn-light font-weight-bold "
              style={{
                borderRadius: 2,
                width: "100%",
                height: 70,
                color: "grey",
                borderColor: "#e7e7e7"
              }}
            >
              Estimasi Ongkos Kirim
            </button>
          </div>
          <div class="col-2" style={{ padding: 0 }}>
            <button
              type="button"
              className="btn btn-light font-weight-bold "
              style={{
                borderRadius: 2,
                width: "100%",
                height: 70,
                color: "grey",
                borderColor: "#e7e7e7"
              }}
            >
              2019 Feedback
            </button>
          </div>
          <div class="col-2" style={{ padding: 0 }}>
            <button
              type="button"
              className="btn btn-light font-weight-bold "
              style={{
                borderRadius: 2,
                width: "100%",
                height: 70,
                color: "grey",
                borderColor: "#e7e7e7"
              }}
            >
              666 Ulasan Barang
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
          <div className="card" style={{ width: "100%", height: "100%" }}>
            <div className="row" style={{margin:64}}>
            <div className="col-2">
              <text>
                Deskripsi
              </text>
            </div>
            <div className="col-10">
              <text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl. Enim eu turpis egestas pretium aenean pharetra magna. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum nibh tellus molestie nunc non blandit massa. Enim tortor at auctor urna nunc id cursus metus. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Ac turpis egestas maecenas pharetra. Purus in massa tempor nec feugiat nisl pretium fusce id. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nisi scelerisque eu ultrices vitae auctor eu augue. Adipiscing at in tellus integer feugiat scelerisque. Praesent elementum facilisis leo vel fringilla est ullamcorper. In nulla posuere sollicitudin aliquam. Mauris pharetra et ultrices neque ornare aenean euismod. Velit aliquet sagittis id consectetur purus ut. Amet luctus venenatis lectus magna fringilla urna. Tincidunt vitae semper quis lectus nulla at volutpat diam. Mattis aliquam faucibus purus in massa tempor nec.
              </text>
            </div>
            </div>
          </div>

          </div>
        </div>
        <ProductList/>
      </div>        
    );
  }
}

export default ProductDetail;
