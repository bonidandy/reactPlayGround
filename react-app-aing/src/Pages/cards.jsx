import CardProducts from "../components/Fragments/Card"
import Trombol from "../components/Elements/Button/Button"
import { useEffect, useState } from "react"

const products = [
    {
        id: 1,
        merk: "Sepatu Nike",
        harga: 10000,
        gambar: "public/images/Sepatu-1.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid necessitatibus quo reprehenderit fuga porro animi ea a iusto dignissimos aspernatur maxime alias hic odit, modi, placeat corporis minus? Dolorum, quidem."
    },
    {
        id: 2,
        merk: "Sepatu Adibos",
        harga: 20000,
        gambar: "public/images/Sepatu-1.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        id: 3,
        merk: "Sepatu Pumah",
        harga: 20000,
        gambar: "public/images/Sepatu-1.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.kjabsdfas kjahsdfjkahsdf kljahsdfkjahsdf kjhasdfkjasdk kjahsdfkjasd ikjhasdjkfasd jhaskdjfhas kjahsdfjkas kashdf asdkfjhasd f kasjdfhaksdfhasd fkjashdfas dfkjasdhf"
    },
    {
        id: 4,
        merk: "Sepatu Brody",
        harga: 50000,
        gambar: "public/images/Sepatu-1.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. kjansdfjkasndf oijahsdlfihasdf lijbasdljfkblasdf liajhsdflijashd alsidfjhasdf lihuasdfhasd l asudfhialsdfh liasd fhilausdfhiasdf aisud fasidfhisadfh ias dfhiuas dfi"
    }
]

function Cards() {
    function LogoutHandle() {
        window.location.href = "/login"
        localStorage.removeItem("email")
        localStorage.removeItem("password")
    }
    let nama = localStorage.getItem("email")

    const [barang, setBarang] = useState([])
    const [total, setTotal] = useState([0])

    useEffect(() => {
        setBarang([{
            id : 1,
            qty : 1
        }])
    }, [])

    useEffect(() => {
        const theProduk = barang.reduce((acc, item)=>{
            const sum = products.find((produksi) => produksi.id === item.id)
            return acc + sum.harga * item.qty;
        }, 0)
        setTotal(theProduk)
    }, [barang])

    function handleBarang(id) {
        if (barang.find((item) => item.id === id)) {
            setBarang(
                barang.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            )
        } else {
            setBarang([
                ...barang,
                {
                    id,
                    qty: 1
                }
            ])
        }
    }

    return (
        <>
            <div onClick={LogoutHandle} className="bg-blue-500 text-white h-10 flex justify-end px-5 items-center">
                {nama}
                <Trombol lebar="w-28" >Log Out</Trombol>
            </div>
            <div className="flex justify-center">
                <div className="flex py-5 w-3/4 flex-wrap">
                    {products.map((product) => {
                        return (
                            <CardProducts key={product.id}>
                                <CardProducts.Header gambar={product.gambar}></CardProducts.Header>
                                <CardProducts.Body text={product.title} title={product.merk}></CardProducts.Body>
                                <CardProducts.Footer price={product.harga} id={product.id} handleBarang={handleBarang}></CardProducts.Footer>
                            </CardProducts>
                        )
                    })
                    }
                </div>
                <div className="w-1/4">
                    <p>Cart</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Nama_Produk</th>
                                <th>Quantity</th>
                                <th>Harga</th>
                            </tr>
                        </thead>

                        <tbody>
                            {barang.map((items) => {
                                const produk = products.find((produks) => produks.id === items.id)
                                return (
                                    <tr key={items.id}>
                                        <td>{produk.merk}</td>
                                        <td>{items.qty}</td>
                                        <td>{(produk.harga * items.qty).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                                    </tr>
                                )
                            }
                            )}
                            <tr>
                                <td colSpan={2}>Total Price</td>
                                <td>{(total).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Cards