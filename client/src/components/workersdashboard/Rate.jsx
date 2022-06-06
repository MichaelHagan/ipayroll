import React, {  useEffect, useState } from 'react';
import "./Rate.css"
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Rate() {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://amalitechipayroll.herokuapp.com/employees/all`)
            .then(response => {
                setAPIData(response.data);
            })
    }, [])

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {

    }, [])

    return (
        <>
            <Topbar />
            <main2>
            <Sidebar />
            <div className="admin2">
                    <div className="Add-User">
                        <button className="button2" onClick={() => {
                            // navigate("/form")
                        }}>
                            Send employee payslip
                        </button>
                    </div>

                    <form action="/" method="POST">
                        <table className="table">
                            <thead className="thead-color">
                                <tr>
                                    <th>id</th>
                                    <th>Rank</th>
                                    <th>Salary</th>
                                    <th>Allowance</th>
                                    <th>Pf_employee</th>
                                    <th>Pf_employer</th>
                                    <th>SSNI_tier_one</th>
                                    <th>SSNI_tier_two</th>

                                </tr>
                            </thead>
                            <tbody>

                                {APIData.map((data) => {


                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.rank}</td>
                                            <td>{data.salary}</td>
                                            <td>{data.cash_allowance}</td>
                                            <td>{data.Pf_employee}</td>
                                            <td>{data.pf_employer}</td>
                                            <td>{data.ssnit_tier_one}</td>
                                            <td>{data.ssnit_tier_two}</td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </form>
                </div>
                </main2>

            < Footer />
        </>
    );

}