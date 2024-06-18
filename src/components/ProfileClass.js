// import React from 'react';


// class Profile extends React.Component {

//     constructor(props) {
//         super(props);
//         // Create State
//         this.state = {
//             userInfo: {
//                 name: "Dummy Name",
//                 location: "Dummy location",
//             },
//         };
//         console.log("Constructor");
//     }
//      async componentDidMount() {
//         // API calls
//          const data = await fetch("https://api.github.com/users/Shanukumar2929");
//          const json = await data.json();
//          this.setState({
//             userInfo: json,
//          });
//         console.log("componentDidMount");
//     }

//     render() {
        
//         return (
//             <div>
//                 <h1>Profile Class Component</h1>
//                 <h2>Name: {this.state.userInfo.name}</h2>
//                 <h2>Location : {this.state.userInfo.location}</h2>
                
//             </div>
//         );
//     }
// }

// export default Profile;