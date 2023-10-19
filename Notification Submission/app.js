window.addEventListener('load',() =>{
    //console.log( window.Notification )
    if( !window.Notification ) return ; 

    //console.log( Notification.permission )

    //Notification
    //.requestPermission()
    //.then(sendNotification)
})

const sendNotification = (permissions) =>{
    let notification = new Notification( 'New Notification',{
        body : "SIUSIUSIUSIUSIUSIUSIUSIUSIUSIUSIUSIUSIUSIUSIUSIU",
        icon : 'icon.jpg'
    })

    notification.onclick = () =>{
        window.location.href = ''
    }

    console.log(notification);
}

const button = document.getElementById('button')
button.addEventListener('click',() => {
    Notification
    .requestPermission()
    .then(sendNotification)
})