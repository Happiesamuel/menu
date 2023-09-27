import './App.css'
import {pizzaData} from './data.jsx'
import {useState} from 'react'
export default function App() {
  const [count,setCount] = useState(1)
 const resultPerPage = 2;
  const pages = Math.ceil(pizzaData.length / resultPerPage)
console.log(count);
function increase() {
 setCount(i => i + 1)
}
function decrease() {
  setCount(i => i - 1) 
}

  return (
    <div className="app">
<Header/>
      <Menu decrease={decrease} resultPerPage={resultPerPage} pages={pages} count={count} increase={increase}/>
<Footer />
      </div>
  )
}
function Header() {
   return <h1 className="header">🍕 Fast React Pizza co.🍕</h1>
}
function Menu({increase,decrease,count,resultPerPage,pages}) {
  const start = count * resultPerPage - resultPerPage
    const stop = count * resultPerPage
  const sli = pizzaData.slice(start, stop)
   return <div className="menu-content">
<h2>OUR MENU 📜</h2>
     {sli.length === 0? <p>We're are under construction...Check back later</p>: <>
     <p>Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.</p>
     <div className='ul'>
     <ul>
       {sli.map(x => <List data={x} key={x.name}/>)}
     </ul>
       <div className='buts'>
         {count > 1?<Buttons onclick={decrease}>Page {count - 1}</Buttons> : ''}
         {count < pages ?<Buttons onclick={increase}>Page {count + 1}</Buttons> :''}
     </div>
     </div>
     </>
}
   </div>
}
function Buttons({children,onclick}) {
   return <button onClick={onclick}>{children}</button>
}

function List({data}) {
   return <li className={data.soldOut? 'gray': ''}>
<img src={data.photoName} alt={data.name} />

     <div className='three'>
       <div className='both'>
<div className='h4'>{data.name}</div>
   <p>{data.ingredients}</p>
         </div>
       <div className='price'>{data.soldOut?'SOLD OUT':data.price}</div>
       </div>
     </li>
}
function Footer() {
  const open = 12
  const close = 22
 const hours= new Date(Date.now()).getHours()
  console.log(hours);
   return <p>
     {hours <= close && hours >= open? `We're open from ${open}:00 to ${close}:00. Come visit us or order
        online.`:`We're happy to welcome you between ${open}:00 and ${close}:00.`}
   </p>
}
