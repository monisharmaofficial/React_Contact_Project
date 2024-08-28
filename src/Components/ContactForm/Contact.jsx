import styles from './Contact.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { useState } from 'react';

const Contact = () => {

const[name, setName] = useState("Mona");
const[email, setEamil] = useState("mona2002@gmail.com")
const[text, setText] = useState("i'm frontend devloper")

  // let name;
  // let email;
  // let text;

// const onClickfunction = ()=> {
//   console.log("i'm from call")
// };

const onSubmit = (event)=>{
  console.log(event)
  event.preventDefault()

setName(event.target[0].value);
setEamil(event.target[1].value);
setText(event.target[2].value);

console.log(name, email, text)

}

  return (
    <section className={styles.container}>

        <div className={styles.contact_from}>
            <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize='24px'/>}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt  fontSize='22px'/>}/>
            </div>

            {/* <button onClick={onClickfunction}>Hello</button> */}

            <Button isOutline={true} text="VIA EMAIL FORM" icon={<IoMdMailUnread fontSize='22px'/>}/>

            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
            </div>

            <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
            </div>

            <div className={styles.form_control}>
                    <label htmlFor="text">TEXT</label>
                    <textarea name="name" rows='7'/>
            </div>

            <div style={{display:'flex', justifyContent:'flex-end'}}>
            <Button  text="SUBMIT BUTTON"/>
            </div>

            <div>{name + " " + email + " " + text}</div>

            </form>

        </div>

        <div className={styles.contactImage}>
            <img src="/images/contact.svg" alt="" />
        </div>
      
    </section>
  )
}

export default Contact
