import posts from "./tuits.js";
let tuits = posts;

const findTuits = (req, res) => { res.json(tuits); }

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime();
    newTuit.image = "https://user-images.githubusercontent.com/47161226/200991896-be5dd2a5-4d51-429c-ab39-ef780e32ead1.jpeg";
    newTuit.likes = 0;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.time = "1m";
    newTuit.userName = "NASA"; 
    newTuit.handle = "@nasa";
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => String(t._id) !== tuitdIdToDelete);
    res.sendStatus(200); 
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    tuits = tuits.map(t => 
        String(t._id) === tuitdIdToUpdate ? {...t, ...updates} : t
    );
    res.sendStatus(200);
} 

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
