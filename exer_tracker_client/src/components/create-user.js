import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component {
    constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      showWarning: false,
      submitSuccess: null,
      formError: ""
    }
  }
    onChangeUsername(e) {
     this.setState({
       username: e.target.value
     })
   }

   onSubmit(e) {
     e.preventDefault();

     const user = {
       username: this.state.username
     }

     console.log(user);
     const self = this;
     axios.post(this.props.apiRoot + '/users/add', user)
       .then(res => {
         console.log(res);
         self.setState({
           isSuccess:true
         });
       }).catch((err)=>{
         self.setState({
           isSuccess:false,
           formError: err.message
         });
       });

     this.setState({
       username: '',
       showWarning: true
     })
   }

   render() {
     return (
       <div>
         <h3>Create New User</h3>
         {this.state.showWarning? (
           this.state.isSuccess? (
            <div className="alert alert-info" role="alert">
                <strong>Success:</strong> User has been added!
            </div>
           ):(
            <div className="alert alert-danger" role="alert">
               <strong>Error:</strong> Username must be more than three character long.
            </div>
           )
         ): ""}
         <form onSubmit={this.onSubmit}>
           <div className="form-group">
             <label>Username: </label>
             <input  type="text"
                 required
                 className="form-control"
                 value={this.state.username}
                 onChange={this.onChangeUsername}
                 />
           </div>
           <div className="form-group">
             <input type="submit" value="Create User" className="btn btn-primary" />
           </div>
         </form>
       </div>
     )
   }
}
