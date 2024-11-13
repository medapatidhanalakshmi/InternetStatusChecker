window.addEventListener("load",checkInternetConnection);

function checkInternetConnection(){
    const statusText=document.getElementById(`statusText`);
    const IPAddressText=document.getElementById(`IPAddressText`);
    const NetworkStrengthText=document.getElementById(`NetworkStrengthText`);

    statusText.textContent='Checking....';

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=>response.json())
        .then((data)=>{
            IPAddressText.textContent=data.ip;
            statusText.textContent='Connected';

            const connection=navigator.connection;

            const NetworkStrength=connection?connection.downlink+'Mbps':'Unknown';
            NetworkStrengthText.textContent=NetworkStrength;

        })
        .catch(()=>{
            statusText.textContent='Disconnected';
            IPAddressText.textContent='-';
            NetworkStrengthText.textContent='-';
        })

    }else{
        statusText.textContent='Disconnected';
        IPAddressText.textContent='-';
        NetworkStrengthText.textContent='-';
    }
}
// ipify API
// ipv4----url paste in browser

