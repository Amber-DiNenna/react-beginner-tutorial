function Profile(props){
  console.log(props)
  return <h1>Name: {props.name} {props.lastname} {props.children}</h1>
}

export default Profile;
