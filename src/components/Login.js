import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email === 'nitesh@gmail.com' && this.state.password === 'nitesh') {
            alert("Login successfully");
        } else {
            alert("Invalid crendentials");
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-lable">Email Address</label>
                    <input type="email" className="form-control" name="email" id="email" value={this.state.email} onChange={this.handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={this.state.password} onChange={this.handleChange}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Login;