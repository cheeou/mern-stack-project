const {MongoClient} = require('mongodb');
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run (){
    try {
        const database = client.db('firstDB');
        const movies = database.collection('movies');
    
        // const query = { title: 'Back to the Future'};
        const movieList = [         
            { title: 'The Shawshank Redemption' },
            { title: 'Inception' },
            { title: 'Pulp Fiction' },
            { title: 'The Godfather' },
            { title: 'Forrest Gump' }
        ];

        // const movie = await movies.insertOne(query);

        // const movie = await movies.insertMany(movieList);
        // console.log('my favorite of movies', movie);

        // const findOneMovie = await movies.findOne({ title: "Inception"});
        

        // const findOneMovie = await movies.find({});
        // const findOneMovie = await movies.find({}).toArray();
        // console.log(findOneMovie);


        // const findByTitle = await movies.find({ title: { $regex: "inception", $options: "i"} }).toArray(); // reget pattern, case-insensitive options 
        // console.log(findByTitle);
        
        // 업데이트시 매칭되는 필드가 없으면 생셩됨
        // const updateByTitle = await movies.updateOne( 
        //     { title: "Forrest Gump"},
        //     { $set: { title: "WHITE CHICKS"}}
        // );
        // console.log(updateByTitle);

        // const deleteMovie = await movies.deleteOne({ title: 'WHITE CHICKS'});
        // console.log(deleteMovie);

        const movieData = await movies
            .find({ title: 'Inception'})
            .project({ title: 1, _id: 0 })
            .toArray();

        console.log(movieData);

    } finally {
        // db 실행 완료 || 에러 발생시 클라이언트가 닫힘
        await client.close();
    }
}
run();