const form = document.querySelector('form')
form.addEventListener('submit',async function(event){
    event.preventDefault();
    const formData =new FormData(event.target);
    const data=Object.fromEntries(formData.entries());
    console.log(data);
 /*  try{
        const response = await fetch("https://z7inja5y3g.execute-api.ap-south-1.amazonaws.com/dev/notifications/email",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        const result=await response.json();
        console.log('Response :',result);
    }
    catch(error){
        console.error('Error:',error);
      } */
})