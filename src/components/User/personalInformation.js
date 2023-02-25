import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

function PersonalInformation(props) {

    const {count} = useSelector(state => state);

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    });


    const changeUserInfo = (e) => {
        const {name, value} = e.target;
        setUserInfo((prevdata) => ({
            ...prevdata,
            [name]: value
        }));
    }


    const registerUser = () => {
        console.log(userInfo);
    }


    return (

        <div>
            <div className="row ">
                <label>Name</label>
                <div className="col-6">
                    <input className="form-control" placeholder={"enter name"}
                           onChange={changeUserInfo}
                           name="name"
                           value={userInfo.name}/>
                </div>
            </div>


            <div className="row p-3">
                <label>Email</label>
                <div className="col-6">
                    <input type="email" className="form-control"
                           onChange={changeUserInfo}
                           name="email"
                           placeholder={"example@hotmail.com"} value={userInfo.email}/>
                </div>
            </div>

            <div className="row p-3">
                <label>password</label>
                <div className="col-6">
                    <input type="password" className="form-control"
                           onChange={changeUserInfo}
                           name = "password"
                           placeholder={"**************"} value={userInfo.password}/>
                </div>
            </div>

            <div className="row p-3">
                <div className={"col-1"}>
                    <button className={"btn btn-success"}
                    onClick={registerUser}
                    >register</button>
                </div>
            </div>

            <p>
                The count is {count}
            </p>
        </div>
    );
}

export default PersonalInformation;