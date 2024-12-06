import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../Helpers/Button'
import { donationCourse } from '../../data/donationCourse'

function OnlineGiving({setSelectedCard}) {
    const { currentUser } = useSelector(state => state.user)
    const user = currentUser?.data
    const [ loading, setLoading ] = useState(false)
    const [ formData, setFormData ] = useState({})
    const [ error, setError ] = useState()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleDonation = () => {rn
        if(!formData.amount){
            setError('Enter amount')
            setTimeout(() => {
                setError()
            }, 2000)
            return
        }
        try {
            setLoading(true)
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className=''>
                <div>
                    <div className="inputGroup">
                        <label className="label focusText border-b-0">Giving Amount:</label>
                        <input type="number" id='amount' className="input p-3" placeholder='Enter Givivng amount' onChange={handleChange} />
                    </div>
                    
                    <p className='errorText text-center mt-6'>{error}</p>

                    <Button disabled={loading} onClick={handleDonation} text={ loading ? 'Please Wait...' : 'Proceed with Giving'} style={'p-1 mt-8'} />
                </div>
    </div>
  )
}

export default OnlineGiving