const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tinidb');

const characSchema = new mongoose.Schema({
    name: String,
    classe: String,
    level: String,
    tags: [String],
    date: Date,
    isActive: Boolean
});

const Charac = mongoose.model('Charac', characSchema);



async function getCharacs(){

    return await Charac
        .find({ isActive: true, tags: 'backend'})
        .sort({name: 1 })
        .select({ name: 1, classe: 1});

}

async function run(){
    const charac = new Charac({
        name: 'Toufikos',
        class: 'MERN',
        level: 10,
        tags: ['node', 'backend'],
        isActive: true
    });
    
    //const characs = await getCharacs();
    console.log(charac);
}

run();