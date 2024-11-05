import { useNavigate } from 'react-router-dom'
import BooksImg from '../../assests/roc.jpg'
import Button from './Button'

function QuickResource() {
  const navigate = useNavigate()
  const data = resourceData[0]
  const handleRequestResource = async (id) => {
    try {
      navigate('/consultations')
    } catch (error) {
      
    }
  }
  return (
    <div className='pad1 flex items-center justify-center gap-3 tablet:flex-col'>
      <div className=' flex-1 w-full'>
        <div className='relative w-[85%] h-[400px] rounded-[20px] overflow-hidden'>
          <img 
            src={data?.image}
            alt='' 
            className=' w-full h-full  object-contain object-center' 
          />
          <div className="absolute z-20  w-full h-full left-0 top-0 bg-transparent-bg"></div>
        </div>
      </div>  

      <div className='flex-1 text-text-black flex flex-col gap-7'>
        <h2 className='text-[32px] tablet:text-[28px] font-extralight'>{data.title}</h2>
        <p className='text-[18px] tablet:text-[16px] phone:text-[15px] font-extralight'>
          {data.description}
        </p>
        <div className='w-[50%] phone:w-full'>
          <Button text={'Request Now'} onClick={handleRequestResource} style={'uppercase w-fit p-2 rounded-[0px] bg-main-color text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 hover:bg-main-color-dark transition-all shadow-lg hover:shadow-xl group'}/>
        </div>
      </div>
    </div>
  )
}

export default QuickResource

export const resourceData = [
  {
    id: '1',
    image: "https://plus.unsplash.com/premium_photo-1678233035763-5ddf32e2f75b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'Empty Out the Negative',
    description: 'Joy, peace, creativity, advancement, a spouse, healing—God wants to bless you! It’s time to let go of the old, empty out the negative, and make room for all that He is going to do in your life. Our ministry thank you will inspire you to create space so God can fill your life with good things!'
  }
]
