function connectToServer(){
    console.log("Connecting to server");
    setTimeout(()=>{
        console.log("Server Connected");
        // calling get data after 2 while server connected
        getData();
    },2000)
}
function getData(){
    console.log("Fetching data...");
    setTimeout(()=>{
        console.log("Data Fetched");
        //show courses after fetching the data 
        showCourses();
    },2000)
}
function showCourses(){
    console.log("Fetching course data");
    setTimeout(()=>{
        const arr = ['course1','course2','course3'];
        console.log("Show Courses ");
        console.log(arr)
    },[2000]) 
}

connectToServer(
    ()=>getData(
    ()=>showCourses()
));