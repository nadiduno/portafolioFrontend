async function bucarDados(){
  try{
    const response = await fetch ('https://api.github.com/users/nadiduno');
  const body = await response.json();
  return body;
  } catch (err){
    console.log("Erro")
  } finally{
    console.log("Deu")
  }
}
bucarDados().then(body => {
  // console.log(body);
  var bio=body.bio; 
  var public_repos=body.public_repos; 
  document.querySelector(".bio").innerHTML = bio;
  document.querySelector(".public_repos").innerHTML = public_repos;
});