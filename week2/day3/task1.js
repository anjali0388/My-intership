function fakeAPICall()
{
    console.log(" fatching user details...");
    setTimeout(()=>
    {
        console.log("user data received");
    },1500);
    setTimeout(()=>
    {
        console.log("processing data");
    },2000);
}
fakeAPICall()