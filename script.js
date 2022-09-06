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
  var avatar_url=body.avatar_url;
  var name=body.name;
  var bio=body.bio; 
  var created_at=body.created_at; 
  var public_repos=body.public_repos; 
  var followers=body.followers; 
  var following=body.following; 
  var received_events_url=body.received_events_url; 
  document.querySelector(".avatar_url").src = avatar_url;
  document.querySelector(".name").innerHTML = name;
  document.querySelector(".bio").innerHTML = bio;
  document.querySelector(".created_at").innerHTML = created_at;
  document.querySelector(".public_repos").innerHTML = public_repos;
  document.querySelector(".followers").innerHTML = followers;
  document.querySelector(".following").innerHTML = following;
  document.querySelector(".received_events_url").innerHTML = received_events_url;
});