const app = require('./src/app');

//starting the server
app.listen(3000,()=>{
    console.log("Server running on port 3000!🚀");
});

const notes = [];



app.post('/notes', (req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({"response" : "note created successfully"});

})

app.get('/notes', (req,res)=>{
    res.status(200).json({
        "response":"notes fetched successfully",
        data: notes
    });
})

app.delete('/notes/:index', (req,res)=>{
    const index = req.params.index;
    console.log(index);
    if(index >= notes.length){
        res.status(404).json({
            "response":"note not found"
        });
    } else {
        delete notes[index];
        res.status(200).json({
            "response":"note deleted successfully"
        });
    }
})

app.patch('/notes/:index', (req,res)=>{
    const index = req.params.index;
    const desc = req.body.desc;

    notes[index].desc = desc;
    res.status(200).json({
        "response":"note updated successfully"
    });
})