import { useState } from "react";
export default function Pricing(){
    const [selectedDays, setSelectedDays] = useState([]);
  const [pricingOption, setPricingOption] = useState('');

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const toggleDay = (day) => {
    setSelectedDays(prevDays =>
      prevDays.includes(day)
        ? prevDays.filter(d => d !== day)
        : [...prevDays, day]
    );
  };
    return(
        <div className="weeklySchedule">
      <h2>Select working days from Monday - Sunday or choose all days</h2>
      <h3>Choose Working time on each days or 
      Choose anytime</h3>
      <div className="daysList">
        {days.map(day => (
          <div key={day} className="dayItem">
            <label>
              <input
                type="checkbox"
                className="days-box"
                checked={selectedDays.includes(day)}
                onChange={() => toggleDay(day)}
              />
              <span>{day}</span>
            </label>
            <div>
               
               <select>
                 <option>12 am </option>
                 <option>9am </option>
                 <option>11am </option>
                 <option>1pm </option>
                 <option>3pm </option>
                 <option>5pm </option>
                 <option>7pm </option>
                 <option>9pm </option>
                 <option>11pm </option>
               </select>
               <select>
                 <option>12 am </option>
                 <option>9am </option>
                 <option>11am </option>
                 <option>1pm </option>
                 <option>3pm </option>
                 <option>5pm </option>
                 <option>7pm </option>
                 <option>9pm </option>
                 <option>11pm </option>
               </select>
            </div>
          </div>
        ))}
      </div>

      <div className="pricingOptions">
      <h2>How do you want to charge for your services</h2>
      <div className="optionsList">
        <label>
          <input
            type="radio"
            value="fixed"
            checked={pricingOption === 'fixed'}
            onChange={() => setPricingOption('fixed')}
          />
          Fixed Price
        </label>
        <label>
          <input
            type="radio"
            value="discuss"
            checked={pricingOption === 'discuss'}
            onChange={() => setPricingOption('discuss')}
          />
          Discuss pricing
        </label>
        <label>
          <input
            type="radio"
            value="service"
            checked={pricingOption === 'service'}
            onChange={() => setPricingOption('service')}
          />
          Service price
        </label>
        <label>
          <input
            type="radio"
            value="hourly"
            checked={pricingOption === 'hourly'}
            onChange={() => setPricingOption('hourly')}
          />
          Hourly Price
        </label>
      </div>
    </div>
    </div>
    )
}