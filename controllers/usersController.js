const db = require('../config/database');
const Router = require('express-promise-router');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = new Router();
module.exports = router;

router.get('/', (req, res) => {
    res.send('Welcome to our API');
});

router.post('/login', (req, res) => {
    const data = {
        email : req.body.email,
        password : req.body.password
    };
    db.connect((err, client, done) => {
        if(err){
            return res.status(400).json({err});
        } else {
            const getQuery = `SELECT * FROM users WHERE email = '${data.email}'`;
            client.query(getQuery, (error, result) => {
                done();
                if(error) {
                    return res.status(400).json({error});
                }
                if(result.rows < '1'){
                    return res.status(404).send({
                        status: 'Failed',
                        message: 'No user information found',
                    });
                } else {
                    const user = {
                        id: result.rows[0].id,
                        name: result.rows[0].name,
                        last_name: result.rows[0].last_name,
                        email: result.rows[0].email,
                    };
                    
                    bcrypt.compare(data.password, result.rows[0].password, (err, isMatch) => {
                        if(err) {
                            return res.status(401).send({
                                status: 'Failed',
                                message: err,
                            });
                        }
                        if(isMatch === false) {
                            return res.status(401).send({
                                status: 'Failed',
                                message: 'Invalid credentials!',
                            });
                        } else {
                            let token = jwt.sign(data, 'Secret Password', { expiresIn: 86400 //expires in 24 hours
                            });
                            return res.status(200).send({
                                status: 'Successful',
                                auth: true,
                                token: token,
                                user: user,
                            });
                        }
                    });
                }
            });
        }
    });
});

function isAuth(req, res){
    //If there is no Authorization key in header, app will crash with error "TypeError: Cannot read property 'replace' of undefined"
    let token = req.headers['authorization'];

    if(token == ""){
        return res.status(401).send({
            status: 'Failed',
            message: 'Missing authentication token'
        });
    } else {
        token = token.replace('Bearer', '').trim();

        return jwt.verify(token, 'Secret Password', (err, user) => {
            if(err){
                return res.status(401).send({
                    status: 'Failed',
                    auth: false,
                    message: 'Invalid authentication token'
                });
            } else {
                return resp = 'ok';
            }
        });
    }
}

router.get('/getAllUsers', (req, res) => {
    let result = isAuth(req,res);

    if(result == 'ok'){
        db.connect((err, client, done) => {
            if(err) {
                return res.status(400).json({err});
            } else {
                const query = `SELECT * FROM users`;
                client.query(query, (error, result) => {
                    done();
                    if(error) {
                        return res.status(400).json({error});
                    }
                    if(result.rows < '1'){
                        return res.status(404).send({
                            status: 'Failed',
                            message: 'No users information found',
                        });
                    } else {
                        return res.status(200).send({
                            status: 'Successful',
                            message: 'Users information retrieved',
                            users: result.rows,
                        });
                    }
                });
            }
            
        });
    }
});

router.get('/getUserByID/:id', (req, res) => {
    let result = isAuth(req,res);

    if(result == 'ok'){
        const parsedID = parseInt(req.params.id);

        db.connect((err, client, done) => {
            if(err) {
                return res.status(400).json({err});
            } else {
                const query = `SELECT * FROM users WHERE id = ${parsedID}`;
    
                client.query(query, (error, result) => {
                    done();
                    if(error) {
                        return res.status(400).json({error});
                    }
                    if(result.rows < '1'){
                        return res.status(404).send({
                            status: 'Failed',
                            message: 'No users information found',
                        });
                    } else {
                        return res.status(200).send({
                            status: 'Successful',
                            message: 'Users information retrieved',
                            users: result.rows,
                        });
                    }
                });
            }
        });
    }
});

router.post('/newUser', (req, res) => {
    const data = {
        name : req.body.name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 8)
    };

    db.connect((err, client, done) => {
        if(err) {
            return res.status(400).json({err});
        } else {
            const query = 'INSERT INTO users(name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *';
            const values = [data.name, data.last_name, data.email, data.password];
            
            client.query(query, values, (error, result) => {
                done();
                if(error) {
                    return res.status(400).json({error});
                }
                return res.status(202).send({
                    status: 'Successful',
                    result: result.rows[0],
                });
            });
        }
    });
});

router.put('/updateUserByID/:id', (req, res) => {
    let result = isAuth(req,res);

    if(result == 'ok') {
        const parsedID = parseInt(req.params.id);
        const userToUpdate = {
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
        };

        db.connect((err, client, done) => {
            if(err){
                return res.status(400).json({err});
            } else {
                const query = `UPDATE users SET name = $1, last_name = $2, email = $3, password = $4 WHERE id = ${parsedID} RETURNING *`;
                const values = [userToUpdate.name, userToUpdate.last_name, userToUpdate.email, userToUpdate.password];

                client.query(query, values, (error, result) => {
                    done();
                    if(error){
                        return res.status(400).json({error})
                    }
                    return res.status(200).send({
                        status: 'Successful',
                        result: result.rows[0],
                    });
                });
            }
        });
    }
});

router.delete('/deleteUserByID/:id', (req, res) => {
    let result = isAuth(req,res);

    if(result == 'ok') {
        const parsedID = parseInt(req.params.id);

        db.connect((err, client, done) => {
            if(err){
                return res.status(400).json({err});
            } else {
                const query = `DELETE FROM users WHERE id = ${parsedID}`;

                client.query(query, (error, result) => {
                    done();
                    if(error){
                        return res.status(400).json({error});
                    }
                    return res.status(200).send({
                        status: 'Successful',
                        message: '¡User deleted successfully!'
                    });
                });
            }
        });
    }
});