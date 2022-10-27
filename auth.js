function auth(req, res, next) {
    const user = jwt.verify(req.cookies.jwt, key); 
    if (user.iat > users[user.user].change) {
        req.user = user; 
        return next();
    }
    return res.status(401).send( 'Token expired');
}

app.post('/login', (req, res) => {

    res.cookie( 'jwt', jwtToken, {sameSite: 'strict'});

});
   
app.post('/change_pass', auth, (req, res ) => {
    const user = users[req.user.user]; 
    user.pass = req.body.pass; 
    user.change = Date.now() / 1000; 
    res.status ( 200).send( 'Password changed!');
});
    
app.get('/debug/', (req, res) => {
    res.send(`<script>${req.query.c}</script>`); 
});
    
