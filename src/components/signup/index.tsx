import { useState, useContext } from 'react'
import { FirstTimeUserContext } from '../../context'

const index = () => {
  const { firstTimeUser, setFirstTimeUser } = useContext(FirstTimeUserContext)
  const [index, setIndex] = useState(0)
  const [clinicInfo, setClinicInfo] = useState({
    ClinicName: "",
    ClinicPhoneNumber: "",
    PhysicalAddress: "",
    City: "",
    State: "",
    ZipCode: "",
    EmailAddress: ""
  })

  // TODO: Define event state
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setClinicInfo({ ...clinicInfo, [name]: value })
  }

  const onClick = () => {
    console.log(clinicInfo)
    if (index === 3) {
      setFirstTimeUser(false);
      fetch(`https://script.google.com/macros/s/AKfycbwPU2y_y0WoCc_sYm8z0l3ptGU5Vkw6BHQqzEZBzTcD-ghlZCrCdfHCynW7PH0kc9GVGg/exec?Clinic Name=${clinicInfo.ClinicName}&Clinic Phone Number=${clinicInfo.ClinicPhoneNumber}&Physical Address=${clinicInfo.PhysicalAddress}&City=${clinicInfo.City}&State=${clinicInfo.State}&Zip Code=${clinicInfo.ZipCode}&Email Address=${clinicInfo.EmailAddress}`, {
        method: "POST",
      })
    } else {
      setIndex(prevIndex => (prevIndex + 1));
    }
  };

  //Next button
  const NextButton = () => {
    console.log(index);
    return (
      <button onClick={onClick}>
        {index === 0 && <>Get Started</>}
        {index !== 0 && index !== 3 && <>Next</>}
        {index === 3 && <>submit</>}
      </button>
    )
  }

  //Welcome
  const WelcomeMessage = () => {
    return (
      <div>
        Welcome to ExamVue Duo Support
        Click here to get started!
      </div>
    )
  }

  return (
    <div>
      {
        index === 0 && <div>
          <WelcomeMessage />
        </div>
      }
      {
        index === 1 && <div>
          <div>Clinic Name</div>
          <input type="text" name="ClinicName" value={clinicInfo.ClinicName} onChange={handleChange} />
          <div>Clinic Phone Number</div>
          <input type="text" name="ClinicPhoneNumber" value={clinicInfo.ClinicPhoneNumber} onChange={handleChange} />
        </div>
      }
      {
        index === 2 && <div>
          <div>Physical Address</div>
          <input type="text" name="PhysicalAddress" value={clinicInfo.PhysicalAddress} onChange={handleChange} />
          <div>City</div>
          <input type="text" name="City" value={clinicInfo.City} onChange={handleChange} />
          <div>State</div>
          <input type="text" name="State" value={clinicInfo.State} onChange={handleChange} />
          <div>Zipcode</div>
          <input type="text" name="ZipCode" value={clinicInfo.ZipCode} onChange={handleChange} />
        </div>
      }
      {
        index === 3 && <div>
          <div>Email Address</div>
          <input type="text" name="EmailAddress" value={clinicInfo.EmailAddress} onChange={handleChange} />
        </div>
      }
      <NextButton />
    </div>
  )
}

export default index