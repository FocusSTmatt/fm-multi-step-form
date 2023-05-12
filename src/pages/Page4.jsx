import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




function Page4(){
  const cart = useSelector((state) => state.getCart.dollarsMonth);
  return (
        <>
        <div className='form-ctn'>
          <h1>{cart}</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
        </div>
        </>
      )
}

export default Page4