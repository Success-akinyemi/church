import BooksImg from '../../assests/books.png'
import Button from './Button'

function QuickResource() {
  const data = resourceData[0]
  const handleRequestResource = async (id) => {
    try {
      
    } catch (error) {
      
    }
  }
  return (
    <div className='pad1 flex items-center justify-center gap-3 tablet:flex-col'>
      <div className='flex-1 w-full'>
        <img src={data.image} alt='' className=' w-[85%]' />
      </div>  

      <div className='flex-1 text-text-black flex flex-col gap-7'>
        <h2 className='text-[32px] tablet:text-[28px] font-extralight'>{data.title}</h2>
        <p className='text-[18px] tablet:text-[16px] phone:text-[15px] font-extralight'>
          {data.description}
        </p>
        <div className='w-[50%]'>
          <Button text={'Request Now'} onClick={handleRequestResource} style={'uppercase w-fit p-2'}/>
        </div>
      </div>
    </div>
  )
}

export default QuickResource

export const resourceData = [
  {
    id: '1',
    image: BooksImg,
    title: 'Empty Out the Negative',
    description: 'Joy, peace, creativity, advancement, a spouse, healing—God wants to bless you! It’s time to let go of the old, empty out the negative, and make room for all that He is going to do in your life. Our ministry thank you will inspire you to create space so God can fill your life with good things!'
  }
]
