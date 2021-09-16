const db = require('../config/database');

const createSurveyTable = () => {
    const query = `CREATE TABLE IF NOT EXISTS
    survey(
        survey_id SERIAL PRIMARY KEY NOT NULL,
        email VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        doc_type VARCHAR(3) NOT NULL,
        doc_num VARCHAR(20) NOT NULL,
        age VARCHAR(3) NOT NULL,
        gender VARCHAR(20) NOT NULL,
        city VARCHAR(100) NOT NULL,
        phone VARCHAR(15) NOT NULL,
        socioeconomic_level VARCHAR(1) NOT NULL,
        school_level VARCHAR(30) NOT NULL,
        salary VARCHAR(30) NOT NULL,
        pets JSON NOT NULL,
        frequent_activities JSON NOT NULL,
        tv_content JSON NOT NULL,
        sports JSON NOT NULL,
        physical_activity JSON NOT NULL,
        music_average VARCHAR(20) NOT NULL,
        music_gender JSON NOT NULL,
        favorite_artist VARCHAR(100) NOT NULL,
        colombian_artist JSON NOT NULL,
        max_amount_of_money VARCHAR(50) NOT NULL,
        theater VARCHAR(50) NOT NULL,
        possible_activities JSON NOT NULL,
        clothing_color JSON NOT NULL,
        rapid_food VARCHAR(60) NOT NULL,
        activities_schedule VARCHAR(6) NOT NULL,
        scattering_activities JSON NOT NULL,
        scattering_activities_frecuency VARCHAR(26) NOT NULL,
        manga_like VARCHAR(2) NOT NULL,
        manga_event VARCHAR(60) NOT NULL,
        games_like VARCHAR(2) NOT NULL,
        games_event VARCHAR(60) NOT NULL,
        entertainment_subscription JSON NOT NULL,
        electronics_devices JSON NOT NULL,
        smarthphone VARCHAR(20) NOT NULL,
        operative_system VARCHAR(20) NOT NULL,
        devices_usage_frequency VARCHAR(30) NOT NULL,
        internet_usage_average VARCHAR(24) NOT NULL,
        activities_do_the_most JSON NOT NULL,
        payment_method JSON NOT NULL
    )
    ;

    ALTER TABLE public.survey
    OWNER to hgnpsztahctuii;`;

    db.connect((err, client, done) => {
        if(err) {
            return res.status(400).json({err});
        } else {
            client.query(query, (error, result) => {
                done();
                if(error) {
                    return console.log(error);
                } else {
                    console.log('¡¡¡ SURVEY TABLE CREATED SUCCESSFULLY !!! ');
                    process.exit();
                }
            });
        }
    });
};

module.exports = createSurveyTable;

require('make-runnable');