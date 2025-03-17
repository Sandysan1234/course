const requestcallback = (url, success, failure) =>{
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(()=>{
        if (delay > 4000){
            failure('error: connection timeout')
        }
        else{
            success(`Success: ${url}(${delay} ms)`)
        }
    },delay)
}


const requestpromise= (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(()=>{
            if (delay > 4000){
                reject('error: connection timeout')
            }
            else{
                resolve(`Success: ${url}(${delay} ms)`)
            }
        },delay)
    })
}

        //CALLBACK FUNCTION TAPI MASIH GAGAL
// requestpromise('movie.com').then((response)=>{
//     console.log('succes', response);
// }).catch((error) => {
//     console.log('error',error);
    
// })



        //  "CARA MENGGUNAKAN FUNGSI PROMISE YANG BENAR"
// requestpromise('movie.com')
//     .then((result)=>{
//         console.log('success1');
//         console.log(result);
//         return requestpromise('movie.com')
//     })
//     .then(()=>{
//         console.log('success2');
//         return requestpromise('movie.com')

//     })
//     .then(()=>{
//         console.log('success3');
//         return requestpromise('movie.com')

//     })
//     .catch((err)=>{
//         console.log(err);
//     })


    //"CARA MEMBAUT PROMISE"
// const contohpromise=()=>{
//     return new Promise((resolve, reject) => {
//         resolve(()=>{
//             'berhasil';
//         })
//         reject(()=>{
//             'gagal'

//         })
//     })

// }


// const colordelaychange = (color, delay)=>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve()
//         }, delay); 
//     })
// }

// colordelaychange("red",1000)
//     .then (()=>colordelaychange("blue",1000))
//     .then (()=>colordelaychange("purple",1000))
//     .then (()=>colordelaychange("green",1000))
//     .then (()=>colordelaychange("yellow",1000))


        // fungsi async keyword

// async function hello() {
//     console.log("helloworld");
    
// }


const hello = async () => {
    return "hello world"
    throw 'maaf error'
}

hello().then((res)=>{
    console.log('response', res);
    
}).catch((err)=>{
    console.log('error', err);
    
})