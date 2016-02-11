import express from 'express'; 

const app = express(); 

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get("/", (req, res) =>{
    return res.status(200).json({
        status: 200,
        message: "Welcome to React + Express"
    });
});


app.get("/api/world", (req,res)=>{
    
    return res.status(200).json({
        message: 'The retrieved API'
    })
})


app.post("/api/world", (req, res)=>{
    return res.status(200).json({
        message: `Hey this is your input: ${req.body.post}`
    })
})

app.use("*", (req, res) =>{
    return res.status(405).json({
        status: 405,
        message: "Method Not Allowed!"
    });
});


const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`App Listening on ${port}`));

export default app;