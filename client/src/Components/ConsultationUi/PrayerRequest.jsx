import { useEffect, useState } from "react";
import Button from "../Helpers/Button";

function PrayerRequest() {
    const [formData, setFormData] = useState({ gender: 'male' }); 
    const [ error, setError ] = useState({})
    const [ loading, setLaoding ] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        console.log(formData);
        console.log(error)
    }, [formData, error]);

    const handleGender = (e) => {
        const selectedGender = e.target.value;
        setFormData({ ...formData, gender: selectedGender });
    };

    const handleSubmit = async () => {
        if(loading){
            return;
        }
        if(!formData?.name){
            setError({ name: 'Please Enter your name' })
            setTimeout(() => {
                setError({ name: '' })
                return;
            }, 3000)
        }
        if(!formData?.gender){
            setError({ gender: 'Please Select a gender' })
            setTimeout(() => {
                setError({ gender: '' })
                return;
            }, 3000)
        }
        if(!formData?.prayerRequest){
            setError({ prayerRequest: 'Please Enter your prayer request' })
            setTimeout(() => {
                setError({ prayerRequest: '' })
                return;
            }, 3000)
        }
        try {
            setLaoding(true)
            //const res = await sendPrayerRequest(formData)
        } catch (error) {
            
        } finally {
            setLaoding(false)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <form className="w-[500px] phone:w-[94%] shadow-xl rounded-[10px] p-5">
                <h2 className="w-full text-[21px] font-semibold text-main-color mb-7">My Prayer Request Card</h2>

                <div className="inputGroup gap-[6px] mb-6">
                    <label className="label font-semibold text-main-color">Name</label>
                    <input id="name" onChange={handleChange} type="text" className="input p-2" />
                    <p className="text-[14px] font-semibold text-main-color-dark">{error?.name}</p>
                </div>

                <div className="inputGroup gap-[6px] mb-6">
                    <label className="label font-semibold text-main-color">Gender</label>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-[2px]">
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleGender}
                            />
                            <label htmlFor="male" className="label font-semibold text-main-color">Male</label>
                        </div>

                        <div className="flex items-center gap-[2px]">
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleGender}
                            />
                            <label htmlFor="female" className="label font-semibold text-main-color">Female</label>
                        </div>
                    </div>
                    <p className="text-[14px] font-semibold text-main-color-dark">{error?.gender}</p>

                </div>

                <div className="inputGroup gap-[6px] mb-6">
                    <label className="label font-semibold text-main-color">Prayer Request</label>
                    <textarea 
                        id="prayerRequest" 
                        onChange={handleChange} 
                        className="input resize-none p-2 h-[150px]"
                    >
                        
                    </textarea>
                    <p className="text-[14px] font-semibold text-main-color-dark">{error?.prayerRequest}</p>
                </div>

                <Button onClick={handleSubmit} text={'Submit'} />
            </form>
        </div>
    );
}

export default PrayerRequest;
