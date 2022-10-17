import { GetServerSideProps } from "next";
import { useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

function Login() {

    const router = useRouter()

    useEffect(() => {
        document.body.className = 'hold-transition login-page';
    } , [])

    const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        document.body.className = '';

        router.replace("/")
    }

    
    return (
        <>
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={registerUser} method="post">
                            <div className="input-group mb-3">
                                <input type="text" name="username" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" name="passsword" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">                              
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </div>
                              
                            </div>
                        </form>
                        <div className="social-auth-links text-center mb-3">
                           
                        </div>
                  
                        <p className="mb-0">
                            <Link href="/auth/register" ><a className="text-center">Register</a></Link>
                        </p>
                    </div>
                   
                </div>
            </div>
        </>
    )
}


export default Login