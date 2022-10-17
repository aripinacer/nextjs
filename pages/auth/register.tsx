import { useEffect } from "react";
import Link from 'next/link'

function Register() {

    useEffect(() => {
        document.body.className = 'hold-transition login-page';
    } , [])

    
    return (
        <>
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">กรอกข้อมูลการสมัครสมาชิก</p>
                        <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">                              
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block">สมัครสมาชิก</button>
                                </div>
                              
                            </div>
                        </form>
                        <div className="social-auth-links text-center mb-3">
                           
                        </div>
                  
                        <p className="mb-1">
                            {/* <a href="forgot-password.html">I forgot my password</a> */}
                        </p>
                        <p className="mb-0">
                            <Link href="/auth/login" ><a className="text-center">ย้อนกลับ</a></Link>
                        </p>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Register