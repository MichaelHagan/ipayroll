import "./Userform.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';


export default function Userform() {
    const { register } = useForm();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ssnitNumber, setSsnitNumber] = useState('');
    const [gender, setGender] = useState('');
    const [department, setDepartment] = useState('');
    const [workstartDate, setWorkstartdate] = useState('')
    const [rank, setRank] = useState('');

    const postData = e => {
        e.preventDefault();
        let myData ={
            "firstname" : firstName,
            "surname" :  lastName,
            "date_of_birth":"1997-08-07",
            "gender" : gender,
            "email" : email,
            "department": department,
            "snnit_number": ssnitNumber,
            "work_start_date": workstartDate,
            "rank" :rank,
        }    
        console.log(myData)
        //   axios.post(`/send`, {
        //      firstName,
        //      lastName,
        //      gender,
        //      email,
        //      department,
        //      rank,
        //      phoneNumber,
        //      workstartDate,
        //      ssnitNumber
        // })
        axios({
            method: 'post',
            url: 'http://localhost:9000/employees/send',
            data: myData,
            headers: {'Authorization': 'Bearer ...'}
        });