import Card from './Card'
import { useState, useEffect } from 'react'
function Products() {
  const datas = [
    {
      id: 1,
      gambar: "Sepatu-1.jpg",
      merk: "Adidas",
      harga: 5000
    },
    {
      id: 2,
      gambar: "Sepatu-1.jpg",
      merk: "Nike",
      harga: 2000
    },
    {
      id: 3,
      gambar: "Sepatu-1.jpg",
      merk: "Puma",
      harga: 3000
    }
  ]

  function userName() {
    let nama = localStorage.getItem("email")
    return nama
  }

  const [barang, setBarang] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(() => {
      return (
        barang.reduce((acc, curr) => {
          const produk = datas.find((produks) => produks.id === curr.id)
          return acc + produk.harga * curr.qty
        }, 0)
      )
    })
  }, [barang])

  function handleBarang(id) {
    setBarang(prevBarang => {
      const itemYangAda = prevBarang.find(item => item.id === id);
      if (itemYangAda) {
        return prevBarang.map(item =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevBarang, { id, qty: 1 }];
      }
    });
  }

  return (
    <>
      <div className='flex justify-between p-2 bg-slate-400 '>
        <div>Products</div>
        <p>Hello <span className='text-white'>{userName()}</span></p>
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-2'>
          {datas.map((data) => {
            return (
              <Card
                key={data.id}
                handleClick={() => handleBarang(data.id)}
                gambar={data.gambar}
                text={data.merk}
                harga={data.harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
              />
            )
          })}
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Nama_Product</th>
                <th>Harga_Product</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {barang.map((items) => {
                const produk = datas.find((produks) => produks.id === items.id)
                return (
                  <tr key={items.id}>
                    <td>{produk.merk}</td>
                    <td>{(produk.harga * items.qty).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                    <td>{items.qty}</td>
                  </tr>
                )
              })}
              <tr>
                <td>total : {total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Products