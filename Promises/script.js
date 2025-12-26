function connectToServer(){
    console.log("Connecting to Server...")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Server is connected")
        },2000)
    })
}
function fetchData(){
    console.log("Fetching data...")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched")
        },2000)
    })
}
function showCourses(){
    console.log("Fething courses...");
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const courses = ['course1','course2','course3'];
            res(courses)
        },2000)
    })
}
connectToServer()
.then((resolve)=>{
    console.log(resolve)
    return fetchData()
})
.then((resolve)=>{
    console.log(resolve)
    return showCourses()
})
.then((resolve)=>{
    console.log("Show courses ",resolve)
})