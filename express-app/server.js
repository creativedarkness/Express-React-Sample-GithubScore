const express = require("express");
const app = express();

const axios = require("axios");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static("./../react-app/build/"))

// app.get(`/score/:username`, 
//     auth,
//     test, 
//     (request, response, next) => { }, 
//     (request, response, next) => { },
// );



app.get(`/score/:username`, (request, response) => {
    const username = request.params.username;

    axios
    .get(`https://api.github.com/users/${username}`)
    .then( (githubResponse) => {
        const userScore = githubResponse.data.followers + githubResponse.data.public_repos;
        const username = githubResponse.data.login;
        
        axios.post(`http://5c98ee2d42365600143931b8.mockapi.io/score`, {score: userScore, username: username})
        .then( (mockApiResponse) => {
            
            axios.get(`http://5c98ee2d42365600143931b8.mockapi.io/score`)
            .then( (mockApiRecords) => {

                return response.json({
                    status: true,
                    score: userScore,
                    history: mockApiRecords.data
                })
            })
        })

        
    })
    // axios
    // .get(`https://api.github.com/users/${username}`)
    // .then( (githubResponse) => {
    //     const userScore = githubResponse.data.followers + githubResponse.data.public_repos;
    //     const username = githubResponse.data.login;
        
    //     axios
    //     .post(`http://5c98ee2d42365600143931b8.mockapi.io/score`, {score: userScore, username: username})
    //     .then( (mockApiResponse) => {
    //         return axios.get(`http://5c98ee2d42365600143931b8.mockapi.io/score`)
    //     })
    //     .then( (mockApiRecords) => {
    //         return response.json({
    //             status: true,
    //             score: userScore,
    //             history: mockApiRecords.data
    //         })
    //     })
    //     .catch(errorHandler)
        
        
    // })

})

app.listen(1337);