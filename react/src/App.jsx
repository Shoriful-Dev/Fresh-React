
import Container from './components/Container'
import './App.css'
import Image from './components/Image'
import Fresh from '../src/assets/Fresh.png'
import Menu from './components/Menu'
import Flex from './components/Flex'
import Button from './components/Button'
import model from './assets/Model.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import woman from './assets/woman.png'
import Dot from './assets/Dot.png'
import Line1 from './assets/Line 1.png'
import sweter from './assets/Sweater shirt product.png'
import pant from './assets/Pantalon product.png'


function App() {

  return (
    <>
    {/* All Header Part Start */}
    <div className={"bg-[#FAE3B6]"}>
     <Container>
      <Flex>
      <div className='w-[10%] mt-12 mb-32'>
      <Image imgSrc={Fresh} imgAlt={"Logo"}/>
      </div>
      <div className='w-[70%]'>
      <Flex className={"gap-10 justify-center mt-14"}>
     <Menu menuName={"Men"}/>
      <Menu menuName={"Woman"}/>
      <Menu menuName={"Kids"}/>
      <Menu menuName={"Collection"}/>
      <Menu menuName={"Trends"}/>
     </Flex>
      </div>
      <div className='w-[20%]'>
        <Flex className={"gap-5 mt-10"}>
        <Button btnText={"Login"} className={"px-5 py-3 border shadow hover:bg-[#FDBB57] rounded-[10px]"}/>
        <Button btnText={"Sign Up"} className={"px-5 py-3 border shadow bg-[#FDBB57] rounded-[10px]"}/>
        </Flex>
      </div>
      </Flex>
     </Container>
     </div>
    {/* All Header Part End */}

   {/* All Banner Part Start */}
     <div className={"bg-[#FAE3B6]"}>
      <Container>
        <Flex>
          <div className={"w-[50%]"}>
            <h1 className={"text-[64px] font-poppins font-semibold w-[456px]"}>Find The Best Fashion Style 
            For You</h1>
            <p className={"text-[22px] font-poppins w-[456px] mt-5 leading-10 text-[#000000]"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
            <Button btnText={"SHOP NOW"} className={"px-20 py-5 bg-[#000000] text-white rounded-[10px] mt-10 mb-32 hover:bg-red-500 delay-100"}/>
          </div>
          <div className={"w-[50%]"}>
            <Image imgSrc={model} imgAlt={"Model"}/>
          </div>
        </Flex>
      </Container>
     </div>
   {/* All Banner Part End */}

    {/* New Collection Part Start */}
     <div className={"mt-[250px] mb-[100px]"}>
      <h3 className={"font-bold text-[64px] text-center font-ruhi mb-20"}>New Collection</h3>
      <Container>
        <Flex className={"grid grid-cols-3 gap-28"}>
        <div>
        <Image imgSrc={img1} imgAlt={"img1"}/>
        <Button btnText={"Sweater"} className={"px-[110px] py-3 absolute mt-[-100px] bg-white rounded-[20px] ml-4"}/>
        </div>
        <div>
        <Image imgSrc={img2} imgAlt={"img2"}/>
        <Button btnText={"Jeans"} className={"px-[110px] py-3 absolute mt-[-100px] bg-white rounded-[20px] ml-8"}/>
        </div>
        <div className={"h-[402px] w-[396px]"}>
        <Image imgSrc={img3} imgAlt={"img3"}/>
        <Button btnText={"Baskets"} className={"px-[110px] py-3 absolute mt-[-100px] bg-white rounded-[20px] ml-9"}/>
        </div>
        </Flex>
      </Container>
     </div>
    {/* New Collection Part End */}

     {/* Best Fashion Part Start*/}
     <div>
      <Container>
        <Flex>
      <div className={"w-[50%]"}>
        <Image imgSrc={woman} imgAlt={"woman"} className={"w-[660px] mt-[150px] absolute z-10"}/>
        <Image imgSrc={Dot} imgAlt={"Dot"} className={"mt-[90px] absolute ml-[570px]"}/>
      </div>
      <div className={"w-[50%] pl-24"}>
        <h3 className={"text-[64px] font-bold font-ruhi w-[437px] ml-20 mt-40"}>Best Fashion Since 2010</h3>
        <h3 className={"text-[24px] font-semibold font-poppins w-[443px] ml-20 mt-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </h3>
        <div className={"w-[793px] h-[280px] bg-[#FEECC8] rounded-[20px] grid grid-cols-3 ml-[-200px] mt-[200px] mb-[150px]"}>
        <div className={"pt-14 pl-14"}>
        <span className={"text-[64px] font-bold font-podkova"}>2010</span>
        <p className={"text-[28px] font-poppins font-medium"}>Founded</p>
        </div>
        <div className={"pl-[250px] mt-[60px] absolute"}>
          <Image imgSrc={Line1} imgAlt={Line1}/>
        </div>
        <div className={"pt-14 pl-14"}>
        <span className={"text-[64px] font-bold font-podkova"}>2010</span>
        <p className={"text-[28px] font-poppins font-medium"}>Founded</p>
        </div>
        <div className={"pl-[520px] mt-[60px] absolute"}>
          <Image imgSrc={Line1} imgAlt={Line1}/>
        </div>
        <div className={"pt-14 pl-14"}>
        <span className={"text-[64px] font-bold font-podkova"}>2010</span>
        <p className={"text-[28px] font-poppins font-medium"}>Founded</p>
        </div>
      </div>
      </div>
      </Flex>
      </Container>
     {/* Best Fashion Part End*/}
     </div>
   {/* Navber Part Start */}
  <div className={"bg-[#CFA485] h-[828px]"}>
    <Container>
      <Flex>
  <div className={"w-[457px] h-[601px]"}>
      <div>
        <h3 className={"text-[64px] font-ruhi font-bold text-white pt-[50px]"}>Best Seller Product</h3>
        <p className={"text-[24px] font-ruhi font-bold pt-6 w-[403px] h-[270px] leading-9 text-white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</p>
        <Button btnText={"Learn MORE"} className={"px-20 py-5 bg-[#000000] text-white rounded-[10px] mt-[100px] hover:bg-red-500 delay-100"}/>
      </div>
     </div>
     <div>
      <Flex className={"gap-14 mt-24 ml-16"}>
      <Image imgSrc={sweter} imgAlt={"sweter"}/>
      <Image imgSrc={pant} imgAlt={"pant"}/>
      </Flex>
     </div>
     </Flex>
     </Container>
  </div>
  {/* Navber Part End */}
    </>
  )
}

export default App
