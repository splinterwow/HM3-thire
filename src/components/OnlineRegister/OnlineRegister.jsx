import React, { useRef } from 'react';
import styles from './OnlineRegister.module.css';

const OnlineRegister = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      company: companyRef.current.value,
      address: addressRef.current.value,
      dob: {
        month: monthRef.current.value,
        day: dayRef.current.value,
        year: yearRef.current.value,
      },
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Data saved to localStorage:', userData);
  };

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const addressRef = useRef();
  const monthRef = useRef();
  const dayRef = useRef();
  const yearRef = useRef();


  return (
    <div className={styles.formRegister}>
      <h2 className={styles.title}>Online Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>First Name</label>
          <input type="text" placeholder="First Name" className={styles.input} ref={firstNameRef}/>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" className={styles.input} ref={lastNameRef}/>
        </div>
        <div className={styles.formGroup}>
          <label>Email Address</label>
          <input type="email" placeholder="Email Address" className={styles.input} ref={emailRef}/>
        </div>
        <div className={styles.formGroup}>
          <label>Company (if applicable)</label>
          <input type="text" placeholder="Company" className={styles.input} ref={companyRef}/>
        </div>
        <div className={styles.formGroup}>
          <label>Physical Address</label>
          <input type="text" placeholder="Physical Address" className={styles.input} ref={addressRef}/>
        </div>
        <div className={styles.formGroup}>
          <label>Date of Birth</label>
          <div className={styles.dob}>
            <select className={styles.select} ref={monthRef}>
              <option>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <select className={styles.select} ref={dayRef}>
              <option>Day</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
             </select>
           <select className={styles.select} ref={yearRef}>
              <option>Year</option>
              <option>1989</option>
              <option>1990</option>
              <option>1991</option>
              <option>1992</option>
              <option>1993</option>
              <option>1994</option>
              <option>1995</option>
              <option>1996</option>
              <option>1997</option>
              <option>1998</option>
              <option>1999</option>
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
              <option>2003</option>
              <option>2004</option>
              <option>2005</option>
              <option>2006</option>
              <option>2007</option>
              <option>2008</option>
              <option>2009</option>
              <option>2010</option>
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>
            <button type="button" className={styles.calendarBtn}>
              <i className={`${styles.calendarIcon} fas fa-calendar-alt`}></i>
            </button>
          </div>
        </div>
        <button type="submit" className={styles.submitBtn}>Register</button>
      </form>
    </div>
  );
};

export default OnlineRegister;
